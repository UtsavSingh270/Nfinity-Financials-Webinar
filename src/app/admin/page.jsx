import { isAdmin } from "@/lib/auth";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { connectDb } from "@/lib/db";
import RegistrationModel from "@/models/Registration";
import { getWebinars } from "@/lib/webinars";
import { getHosts } from "@/lib/hosts";
export const dynamic = "force-dynamic";
export default async function AdminPage() {
  if (!await isAdmin()) return <AdminLogin />;
  const [webinars, hosts] = await Promise.all([getWebinars(), getHosts()]);
  let registrations = [];
  try {
    const db = await connectDb();
    if (db) {
      registrations = JSON.parse(JSON.stringify((await RegistrationModel.find().sort({ createdAt: -1 }).lean()).map((x) => ({ ...x, id: String(x._id), _id: undefined }))));
    }
  } catch (error) {
    console.error("MongoDB registration load failed:", error);
  }
  return <AdminDashboard initialWebinars={webinars} initialHosts={hosts} initialRegistrations={registrations} />;
}
