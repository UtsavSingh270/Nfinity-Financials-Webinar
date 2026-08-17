import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import WebinarModel from "@/models/Webinar";
import { isAdmin } from "@/lib/auth";
export async function POST(request) {
    if (!await isAdmin())
        return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
    const db = await connectDb();
    try {
        const body = await request.json();
        if (!db)
            return NextResponse.json({ message: "MongoDB is required for webinars." }, { status: 400 });
        const title = String(body.title || "").trim();
        const category = String(body.category || "").trim();
        const date = String(body.date || "").trim();
        const time = String(body.time || "").trim();
        const imageUrl = String(body.imageUrl || "").trim();
        if (!title || !category || !date || !time) {
            return NextResponse.json({ message: "Title, category, date, and time are required." }, { status: 400 });
        }
        const slug = String(body.slug || title).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        const row = await WebinarModel.create({ title, category, date, time, imageUrl, slug, status: "upcoming" });
        return NextResponse.json({ ...row.toObject(), id: String(row._id), _id: undefined }, { status: 201 });
    }
    catch (e) {
        return NextResponse.json({ message: e instanceof Error ? e.message : "Unable to save webinar." }, { status: 400 });
    }
}
