import { connectDb } from "@/lib/db";
import WebinarModel from "@/models/Webinar";

export async function getWebinars() {
  try {
    const db = await connectDb();
    if (!db) return [];
    const rows = await WebinarModel.find().sort({ date: 1, createdAt: 1 }).lean();
    return rows.map((row) => ({ ...row, id: String(row._id), _id: undefined }));
  } catch (error) {
    console.error("MongoDB webinar load failed:", error);
    return [];
  }
}
