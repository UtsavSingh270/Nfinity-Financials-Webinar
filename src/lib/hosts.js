import { connectDb } from "@/lib/db";
import HostModel from "@/models/Host";

export async function getHosts() {
  try {
    const db = await connectDb();
    if (!db) return [];
    const rows = await HostModel.find().sort({ position: 1, createdAt: 1 }).lean();
    return rows.length ? JSON.parse(JSON.stringify(rows.map((row) => ({ ...row, id: String(row._id), _id: undefined })))) : [];
  } catch (error) {
    console.error("MongoDB host load failed:", error);
    return [];
  }
}
