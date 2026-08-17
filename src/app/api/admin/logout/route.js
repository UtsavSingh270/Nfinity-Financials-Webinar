import { NextResponse } from "next/server";
import { adminCookie } from "@/lib/auth";
export async function POST(request) { const response = NextResponse.redirect(new URL("/admin", request.url)); response.cookies.set(adminCookie, "", { expires: new Date(0), path: "/" }); return response; }
