import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDb } from "@/lib/db";
import RegistrationModel from "@/models/Registration";
import WebinarModel from "@/models/Webinar";
import { sendRegistrationEmail } from "@/lib/mailer";
import { isAdmin } from "@/lib/auth";
export async function POST(request) {
    try {
        const body = await request.json();
        const phone = String(body.phone || "").replace(/\s+/g, "");
        if (!body.name?.trim() || !/^\S+@\S+\.\S+$/.test(body.email || "") || !body.webinarId)
            return NextResponse.json({ message: "Please provide a valid name, email, and webinar selection." }, { status: 400 });
        if (!/^(?:\+?61|0)4\d{8}$/.test(phone))
            return NextResponse.json({ message: "Please enter a valid Australian mobile number." }, { status: 400 });
        const db = await connectDb();
        if (!db)
            return NextResponse.json({ message: "MongoDB is required for registrations." }, { status: 400 });
        if (!mongoose.isValidObjectId(body.webinarId))
            return NextResponse.json({ message: "The selected webinar could not be found." }, { status: 404 });
        const row = await WebinarModel.findById(body.webinarId).lean();
        if (!row)
            return NextResponse.json({ message: "The selected webinar could not be found." }, { status: 404 });
        const webinar = JSON.parse(JSON.stringify({ ...row, id: String(row._id), _id: undefined }));
        if (webinar.status !== "upcoming")
            return NextResponse.json({ message: "This webinar is not open for registration." }, { status: 404 });
        const source = webinar.title;
        await RegistrationModel.create({ webinarId: webinar.id, webinarTitle: webinar.title, source, name: body.name.trim(), email: body.email.toLowerCase().trim(), phone, company: String(body.company || "").trim(), role: String(body.role || "").trim(), question: String(body.question || "").trim(), submittedAt: new Date() });
        const emailed = await sendRegistrationEmail(body.name.trim(), body.email.trim(), webinar);
        return NextResponse.json({ message: emailed ? "Your confirmation and meeting link are on their way to your inbox." : "Registration received. Email delivery will activate when SMTP settings are added." });
    }
    catch {
        return NextResponse.json({ message: "We couldn't complete your registration. Please try again." }, { status: 500 });
    }
}
export async function GET() {
    if (!await isAdmin())
        return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
    const db = await connectDb();
    if (!db)
        return NextResponse.json([]);
    const rows = await RegistrationModel.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(rows.map(r => ({ ...r, id: String(r._id), _id: undefined })));
}
