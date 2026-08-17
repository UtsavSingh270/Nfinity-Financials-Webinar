import { NextResponse } from "next/server";
import { adminCookie, createAdminToken } from "@/lib/auth";
export async function POST(request) {
    try {
        const body = await request.json();
        const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
        const password = typeof body.password === "string" ? body.password.trim() : "";
        const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
        const adminPassword = process.env.ADMIN_PASSWORD?.trim();
        if (!email || !password)
            return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
        if (!adminEmail || !adminPassword) {
            return NextResponse.json({
                message: "Admin credentials are not loaded. Make sure ADMIN_EMAIL and ADMIN_PASSWORD are set in the running environment, then restart the dev server.",
            }, { status: 500 });
        }
        if (email !== adminEmail || password !== adminPassword)
            return NextResponse.json({ message: "Incorrect email or password." }, { status: 401 });
        const token = createAdminToken();
        const response = NextResponse.json({ ok: true });
        response.cookies.set(adminCookie, token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 12 });
        return response;
    }
    catch (error) {
        console.error("Admin login failed:", error);
        return NextResponse.json({
            message: error instanceof Error ? `Unable to sign in right now. ${error.message}` : "Unable to sign in right now.",
        }, { status: 500 });
    }
}
