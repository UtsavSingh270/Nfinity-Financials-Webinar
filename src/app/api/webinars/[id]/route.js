import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDb } from "@/lib/db";
import WebinarModel from "@/models/Webinar";
import { isAdmin } from "@/lib/auth";

export async function PUT(request, { params }) {
    if (!await isAdmin())
        return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
    const db = await connectDb();
    try {
        const { id } = await params;
        const body = await request.json();
        if (!db)
            return NextResponse.json({ message: "MongoDB is required for webinars." }, { status: 400 });
        if (!mongoose.isValidObjectId(id))
            return NextResponse.json({ message: "Webinar not found." }, { status: 404 });
        const title = String(body.title || "").trim();
        const category = String(body.category || "").trim();
        const date = String(body.date || "").trim();
        const time = String(body.time || "").trim();
        const imageUrl = String(body.imageUrl || "").trim();
        if (!title || !category || !date || !time)
            return NextResponse.json({ message: "Title, category, date, and time are required." }, { status: 400 });
        const slug = String(body.slug || title).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        const row = await WebinarModel.findByIdAndUpdate(id, { title, category, date, time, imageUrl, slug, status: "upcoming" }, { new: true, runValidators: true }).lean();
        if (!row)
            return NextResponse.json({ message: "Webinar not found." }, { status: 404 });
        return NextResponse.json({ ...row, id: String(row._id), _id: undefined });
    }
    catch (error) {
        return NextResponse.json({ message: error instanceof Error ? error.message : "Unable to update webinar." }, { status: 400 });
    }
}
