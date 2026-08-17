import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const uploadRoot = path.join(process.cwd(), "public", "uploads");

function slugSegment(value, fallback) {
  const cleaned = String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return cleaned || fallback;
}

async function ensureDir(dir) {
  await fs.mkdir(path.join(uploadRoot, dir), { recursive: true });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const kind = slugSegment(formData.get("kind"), "misc");

    if (!file || typeof file === "string") {
      return NextResponse.json({ message: "No file uploaded." }, { status: 400 });
    }

    const folder = kind === "host" ? "hosts" : kind === "webinar" ? "webinars" : kind;
    await ensureDir(folder);

    const ext = path.extname(file.name || "").toLowerCase() || ".bin";
    const name = slugSegment(file.name?.replace(/\.[^.]+$/, ""), "upload");
    const filename = `${Date.now()}-${name}${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    await fs.writeFile(path.join(uploadRoot, folder, filename), buffer);

    return NextResponse.json({
      url: `/uploads/${folder}/${filename}`,
      folder,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to upload file.";
    return NextResponse.json({
      message: process.env.VERCEL ? "File uploads need external storage on Vercel." : message,
    }, { status: 500 });
  }
}
