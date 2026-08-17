import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
const COOKIE = "proowrx_admin";
function secret() { return process.env.ADMIN_SESSION_SECRET || "development-only-secret-change-me"; }
function signature(value) { return createHmac("sha256", secret()).update(value).digest("hex"); }
export function createAdminToken() { const value = `${Date.now() + 1000 * 60 * 60 * 12}`; return `${value}.${signature(value)}`; }
export function validateAdminToken(token) {
    if (!token)
        return false;
    const [expires, sig] = token.split(".");
    if (!expires || !sig || Number(expires) < Date.now())
        return false;
    const expected = signature(expires);
    return sig.length === expected.length && timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}
export async function isAdmin() { return validateAdminToken((await cookies()).get(COOKIE)?.value); }
export const adminCookie = COOKIE;
