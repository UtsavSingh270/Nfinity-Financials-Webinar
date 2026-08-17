import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDb } from "@/lib/db";
import HostModel from "@/models/Host";
import { isAdmin } from "@/lib/auth";

export async function GET() {
  const db = await connectDb();
  if (!db) return NextResponse.json({ hosts: [] });
  const hosts = await HostModel.find().sort({ position: 1, createdAt: 1 }).lean();
  return NextResponse.json({
    hosts: hosts.map((host) => ({ ...host, id: String(host._id), _id: undefined })),
  });
}

export async function POST(request) {
  if (!await isAdmin()) {
    return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
  }

  try {
    const db = await connectDb();
    if (!db) {
      return NextResponse.json({ message: "MongoDB is required for hosts." }, { status: 400 });
    }
    const body = await request.json();
    const payload = {
      name: String(body.name || "").trim(),
      designation: String(body.designation || "").trim(),
      description: String(body.description || "").trim(),
      imageUrl: String(body.imageUrl || "").trim(),
      position: Number(body.position || 1),
    };

    if (!payload.name || !payload.designation || !payload.description) {
      return NextResponse.json({ message: "Host name, designation, and description are required." }, { status: 400 });
    }
    if (!Number.isFinite(payload.position) || payload.position < 1) {
      payload.position = 1;
    }

    const saved = body.id && mongoose.isValidObjectId(body.id)
      ? await HostModel.findByIdAndUpdate(body.id, payload, { new: true, runValidators: true })
      : await HostModel.create(payload);

    const hosts = await HostModel.find().sort({ position: 1, createdAt: 1 }).lean();
    return NextResponse.json({
      host: { ...saved.toObject(), id: String(saved._id), _id: undefined },
      hosts: hosts.map((host) => ({ ...host, id: String(host._id), _id: undefined })),
    });
  } catch (error) {
    return NextResponse.json({ message: error instanceof Error ? error.message : "Unable to save host." }, { status: 400 });
  }
}
