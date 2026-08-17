"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, LoaderCircle, LockKeyhole } from "lucide-react";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const body = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const contentType = res.headers.get("content-type") || "";
      const result = contentType.includes("application/json") ? await res.json() : null;

      if (!res.ok) {
        throw new Error(result?.message || "Sign in failed. Please try again.");
      }

      router.refresh();
      router.push("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f8fc] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative flex items-end bg-[linear-gradient(145deg,#12345d_0%,#0f2c52_45%,#f0aa2b_100%)] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
            <div className="relative max-w-lg">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                <LockKeyhole className="h-4 w-4" />
                Private workspace
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Admin login for Nfinity Financials</h1>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/82 sm:text-base">
                Sign in to manage webinars, hosts, uploads, and registrations from one place.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-white/88 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur">
                  Secure access for the content team
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur">
                  Built for webinar updates and form leads
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 sm:p-8 lg:p-12">
            <div className="mx-auto flex max-w-md flex-col justify-center">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f0aa2b]">Admin access</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Welcome back</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Use your administrator email and password to enter the dashboard.
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Email address</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="username"
                    placeholder="admin@nfinityfinancials.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f0aa2b] focus:bg-white focus:ring-4 focus:ring-[#f0aa2b]/15"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
                  <input
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f0aa2b] focus:bg-white focus:ring-4 focus:ring-[#f0aa2b]/15"
                  />
                </label>

                {error ? (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {error}
                  </div>
                ) : null}

                <button
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#12345d] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(18,52,93,0.25)] transition hover:bg-[#0f2d52] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={loading}
                >
                  {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                  <span>{loading ? "Signing in..." : "Enter dashboard"}</span>
                </button>
              </form>

              <p className="mt-6 text-xs leading-5 text-slate-500">
                Credentials are read from environment variables. If the login fails, make sure the admin API route and env values are set on your deployment.
              </p>

              <Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#12345d] hover:text-[#f0aa2b]">
                Back to site <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
