"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Check,
  X,
  Star,
  Users,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import HostsSection from "./HostsSection";

const defaultForm = { firstName: "", lastName: "", email: "", phone: "" };

function normalizeAuPhone(value) {
  return String(value || "").replace(/[^\d+]/g, "");
}

// Site-wide brand/contact info. This isn't webinar-specific, so it lives
// here as config rather than coming from Mongo — move it into its own
// "brands" collection later if you want it editable from the dashboard.
const CONTACT_BRANDS = [
  {
    name: "Nfinity Financials",
    email: "info@nfinityfinancials.com",
    phone: "0456 456 267",
    socials: {
      facebook: "https://www.facebook.com/bestmortgagebrokers",
      instagram: "https://www.instagram.com/nfinity_financials",
      linkedin: "https://www.linkedin.com/company/nfinityfinancials",
      youtube: "https://www.youtube.com/@nfinityfinancials",
      website: "https://nfinityfinancials.com",
    },
  },
  {
    name: "PropWealth",
    email: "info@propwealth.com.au",
    phone: "0409 016 393",
    socials: {
      facebook: "https://www.facebook.com/PropWealthau",
      instagram: "https://www.instagram.com/propwealthau",
      linkedin: "https://www.linkedin.com/company/propwealth",
      youtube: "https://www.youtube.com/@PropWealth",
      website: "https://propwealth.com.au",
    },
  },
];

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  website: Globe,
};

// Shared full-width container class — keeps edge padding but spans 100vw
const CONTAINER = "w-full px-4 lg:px-10 xl:px-16";

export default function HomePage({ webinars, hosts, initialSlug }) {
  const upcoming = useMemo(() => webinars.filter((item) => item.status === "upcoming"), [webinars]);
  const initial = initialSlug ? webinars.find((item) => item.slug === initialSlug) : null;
  const [selected, setSelected] = useState(initial || upcoming[0] || webinars[0] || null);
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState("");
  const active = selected || upcoming[0] || webinars[0] || null;

  async function submit(event) {
    event.preventDefault();
    if (!active) return;

    setStatus("");
    const response = await fetch("/api/registrations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, webinarId: active.id }),
    });
    const result = await response.json();
    setStatus(response.ok ? result.message : result.message || "Unable to register.");
    if (response.ok) setForm(defaultForm);
  }

  return (
    <main id="nf-webinar-page" className="min-h-screen bg-white text-slate-800">
      {/* =========================================================
          HERO + REGISTRATION FORM
      ========================================================= */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#f8fbff_0%,#edf3fa_100%)] pt-0 pb-6">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,42,74,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(11,42,74,0.022)_1px,transparent_1px)] bg-size:48px_48px mask-[radial-gradient(ellipse_90%_70%_at_50%_35%,#000_20%,transparent_80%)]" />
        
        {/* Edge-to-edge banner */}
        <div className="w-full bg-[#123a63] px-6 py-5 text-center md:py-3">
  <p className="mx-auto max-w-l text-sm font-bold leading-relaxed text-white sm:text-base md:text-lg">
    Kick Start Your Wealth Creation Journey Through{" "}
    <br className="md:hidden" />
    <span className="text-[#f2a93b]">Property Including the Latest Changes</span>{" "}
    <br className="md:hidden" />
    Every Property Investor Needs to Know
  </p>
</div>

        {/* Padded content container */}
        <div className={`relative ${CONTAINER}`}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,.8fr)] lg:items-center">
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d6e5f5] bg-white/70 px-4 py-2 text-[0.76rem] font-semibold uppercase tracking-[0.06em] text-[#123a63] backdrop-blur">
                <Star className="h-4 w-4 text-[#f2a93b]" />
                60 minutes interactive webinar
              </span>

              <h1 className="mt-4 max-w-[14ch] text-[clamp(2.7rem,5.2vw,4.8rem)] font-bold leading-[0.94] tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]',sans-serif]">
                Learn how to find <span className="text-[#f2a93b]">high-growth investment properties under $500k</span>
              </h1>

              <p className="mt-4 max-w-[58ch] text-[1.02rem] leading-[1.72] text-[#5b6b82]">
                Join Australia&apos;s leading experts to learn how investors are still finding strong-growth property opportunities,
                and how to identify the suburbs, data signals, and finance structures that make it possible.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#0b2a4a]">
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Live online webinar</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Interactive Q&amp;A</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Practical investment strategy</span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-black/10 pt-5">
                <div>
                  <strong className="block text-[1.7rem] font-bold leading-none text-[#d98d1f] font-['Space_Grotesk',sans-serif]">100+</strong>
                  <span className="mt-1 block text-sm text-[#5b6b82]">Live Webinars Hosted</span>
                </div>
                <div>
                  <strong className="block text-[1.7rem] font-bold leading-none text-[#d98d1f] font-['Space_Grotesk',sans-serif]">5,000+</strong>
                  <span className="mt-1 block text-sm text-[#5b6b82]">People Attended</span>
                </div>
              </div>
            </motion.div>

            <motion.aside
              id="register"
              className="relative rounded-3xl border border-[#e6ecf3] bg-white p-7 shadow-[0_30px_80px_-24px_rgba(11,42,74,0.22)]"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b bg-[#f2a93b]" />
              <h2 className="mb-5 text-center text-2xl font-bold leading-tight text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
                Reserve Your Spot
              </h2>

              <form className="grid gap-3" onSubmit={submit}>
                <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.02em] text-[#0b2a4a]">
                  First Name *
                  <input
                    className="h-12 rounded-xl border border-[#dbe3ef] bg-[#f9fbfd] px-4 text-base text-[#16233a] outline-none"
                    value={form.firstName}
                    onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
                    required
                  />
                </label>

                <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.02em] text-[#0b2a4a]">
                  Last Name *
                  <input
                    className="h-12 rounded-xl border border-[#dbe3ef] bg-[#f9fbfd] px-4 text-base text-[#16233a] outline-none"
                    value={form.lastName}
                    onChange={(event) => setForm((current) => ({ ...current, lastName: event.target.value }))}
                    required
                  />
                </label>

                <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.02em] text-[#0b2a4a]">
                  Email *
                  <input
                    type="email"
                    className="h-12 rounded-xl border border-[#dbe3ef] bg-[#f9fbfd] px-4 text-base text-[#16233a] outline-none"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    required
                  />
                </label>

                <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.02em] text-[#0b2a4a]">
  Phone *
  <div className="grid grid-cols-[auto_1fr] items-center gap-0 overflow-hidden rounded-xl border border-[#dbe3ef] bg-[#f9fbfd]">
    <span className="flex h-12 items-center gap-2 border-r border-[#dbe3ef] bg-[#f9fbfd] px-3 text-sm font-bold text-[#0b2a4a]">
      <svg viewBox="0 0 30 20" className="h-3.5 w-5" fill="none">
        <path d="M30 0H0V20H30V0Z" fill="#0052B4" />
        <path d="M11.0872 12.4564L11.7292 13.7989L13.1793 13.4639L12.5299 14.8029L13.6959 15.7275L12.2442 16.0548L12.2482 17.5429L11.0872 16.6119L9.92619 17.5429L9.93023 16.0548L8.47852 15.7275L9.64453 14.8029L8.99514 13.4639L10.4451 13.7989L11.0872 12.4564Z" fill="#F0F0F0" />
        <path d="M22.6798 14.1241L22.9861 14.7645L23.6776 14.6047L23.3679 15.2433L23.9241 15.6844L23.2316 15.8404L23.2335 16.5502L22.6798 16.1062L22.1261 16.5502L22.1279 15.8404L21.4355 15.6844L21.9917 15.2433L21.682 14.6047L22.3736 14.7645L22.6798 14.1241Z" fill="#F0F0F0" />
        <path d="M19.8322 7.33099L20.1385 7.97141L20.83 7.81151L20.5203 8.45023L21.0764 8.89131L20.384 9.04735L20.3859 9.7572L19.8322 9.31306L19.2784 9.7572L19.2804 9.04735L18.5879 8.89131L19.144 8.45023L18.8344 7.81151L19.5259 7.97141L19.8322 7.33099Z" fill="#F0F0F0" />
        <path d="M22.6798 3.44922L22.9861 4.08964L23.6776 3.92968L23.3679 4.56845L23.924 5.00948L23.2316 5.16557L23.2335 5.87536L22.6798 5.43123L22.1261 5.87536L22.1279 5.16557L21.4355 5.00948L21.9917 4.56845L21.682 3.92968L22.3736 4.08964L22.6798 3.44922Z" fill="#F0F0F0" />
        <path d="M25.1681 6.3606L25.4743 7.00095L26.1659 6.84111L25.8562 7.47977L26.4124 7.9208L25.7199 8.07689L25.7218 8.78668L25.1681 8.34267L24.6144 8.78668L24.6162 8.07689L23.9238 7.9208L24.4799 7.47977L24.1702 6.84111L24.8618 7.00095L25.1681 6.3606Z" fill="#F0F0F0" />
        <path d="M23.3896 9.7572L23.6304 10.4985H24.41L23.7793 10.9567L24.0203 11.698L23.3896 11.2399L22.7588 11.698L22.9998 10.9567L22.3691 10.4985H23.1487L23.3896 9.7572Z" fill="#F0F0F0" />
        <path d="M15 0V1.79036L12.3535 3.26098H15V6.73898H11.5369L15 8.66286V9.99977H13.4367L9.13043 7.60767V9.99977H5.86957V7.15375L0.746719 9.99977H0V8.20959L2.6465 6.73898H0V3.26098H3.46307L0 1.33645V0H1.56328L5.86957 2.39234V0H9.13043V2.8462L14.2533 0H15Z" fill="#F0F0F0" />
        <path d="M8.4375 0H6.5625V4.06234H0V5.93731H6.5625V9.99976H8.4375V5.93731H15V4.06234H8.4375V0Z" fill="#D80027" />
        <path d="M9.13086 6.73895L15.0004 9.99975V9.07768L10.7906 6.73895H9.13086Z" fill="#D80027" />
        <path d="M4.20973 6.73895L0 9.07768V9.99975L5.86957 6.73895H4.20973Z" fill="#D80027" />
        <path d="M5.86957 3.26079L0 0V0.922072L4.20979 3.26079H5.86957Z" fill="#D80027" />
        <path d="M10.7907 3.26079L15.0004 0.922072V0L9.13086 3.26079H10.7907Z" fill="#D80027" />
      </svg>
      +61
    </span>
    <input
      inputMode="tel"
      placeholder="0412 345 678"
      className="h-12 bg-transparent px-4 text-base text-[#16233a] outline-none"
      value={form.phone}
      onChange={(event) => setForm((current) => ({ ...current, phone: normalizeAuPhone(event.target.value) }))}
      required
    />
  </div>
</label>

                <button
                  className="mt-2 h-14 rounded-full bg-linear-to-b from-[#173e67] to-[#0b2a4a] font-[Space_Grotesk] text-base font-bold text-white shadow-[0_14px_30px_rgba(11,42,74,0.24)] disabled:opacity-70"
                  disabled={!active}
                >
                  Register Now
                </button>

                {status && <p className="m-0 text-sm font-semibold text-[#0b2a4a]">{status}</p>}
              </form>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOUND FAMILIAR? / PROBLEM SECTION
      ========================================================= */}
      <section className="pt-10 pb-19">
        <div className={CONTAINER}>
          <div className="mb-7 w-full">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d98d1f] before:block before:h-0.5 before:w-7 before:rounded-full before:bg-[linear-gradient(90deg,#f2a93b,transparent)] before:content-['']">
              {active?.soundFamiliarKicker || "Sound familiar?"}
            </span>
            <h2 className="mt-3 w-full text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
              {active?.soundFamiliarTitle || "The $500k property research loop you’re probably stuck in"}
            </h2>
            <p className="mt-4 w-full max-w-none text-[#5b6b82]">
              {active?.soundFamiliarDescription || "If you’re looking to invest wisely with a realistic budget, you’ve likely faced the same pressure points: strong opportunities feeling out of reach, confusion over where to start, and uncertainty about which numbers actually matter."}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:items-stretch">
            <div className="space-y-4">
              {(active?.soundFamiliarPoints?.length ? active.soundFamiliarPoints : [
                "Endless “top suburb” lists that don’t fit a $500k budget",
                "Overwhelming data without a clear strategy to interpret it",
                "Fear that all “good opportunities” are already out of reach",
                "Uncertainty about where and how to start building a portfolio",
              ]).map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl border border-[#dbe7f5] bg-white px-4 py-3 text-[#0b2a4a] shadow-[0_2px_12px_rgba(11,42,74,0.04)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-sm font-bold text-white">✓</span>
                  <span className="text-[15px] leading-6">{point}</span>
                </div>
              ))}

              <div className="rounded-[28px] bg-[linear-gradient(135deg,#0b2a4a,#143e67)] p-6 text-white shadow-[0_16px_40px_-12px_rgba(11,42,74,0.14)]">
                <h3 className="text-[1.5rem] font-bold leading-tight font-['Space_Grotesk',sans-serif]">
                  Cut Through The Noise
                </h3>
                <p className="mt-3 max-w-[44ch] text-[15px] leading-7 text-[#d7e2ef]">
                  This webinar is designed to cut through the noise and give you a straightforward, actionable process to identify value and growth potential within your budget.
                </p>
              </div>
            </div>

            <div className="relative min-h-85 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0d4bb3,#1553ba)] shadow-[0_16px_40px_-12px_rgba(11,42,74,0.14)] lg:h-full">
              <Image
                src="/images/quick-check.png"
                alt="Quick check"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REALITY / CASE STUDY SECTION
      ========================================================= */}
      <section className="bg-[#f4f8fc] pt-10 pb-19">
        <div className={CONTAINER}>
          <div className="mb-7 w-full">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d98d1f] before:block before:h-0.5 before:w-7 before:rounded-full before:bg-[linear-gradient(90deg,#f2a93b,transparent)] before:content-['']">
              {active?.realityKicker || "Why $500k isn't just $500k"}
            </span>
            <h2 className="mt-3 w-full text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
              {active?.realityTitle || "The reality most investors are facing right now"}
            </h2>
            <p className="mt-4 w-full max-w-none max-w-[78ch] text-[#5b6b82]">
              {active?.realityDescription ||
                "In Australia's property market, $500,000 isn't just a number, it's a psychological and practical barrier that's reshaping investment strategy. Here's what most investors don't realise:"}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {(active?.realityCases?.length
              ? active.realityCases
              : [
                  {
                    label: "Investor A",
                    text: "Found a property in Suburb X for $485,000 in 2019. Today it's worth $530,000.",
                    growth: "+$45,000 over 7 years (1.5% p.a.)",
                    win: false,
                  },
                  {
                    label: "Investor B",
                    text: "Found a property in Suburb Y for $480,000 in 2019. Today it's worth $770,000.",
                    growth: "+$290,000 over 7 years (8.4% p.a.)",
                    win: true,
                  },
                ]
            ).map((item) => (
              <article
                key={item.label}
                className={`rounded-[20px] border bg-white p-6 shadow-[0_2px_12px_rgba(11,42,74,0.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,42,74,0.14)] ${
                  item.win ? "border-[#f2a93b]/50" : "border-[#e6ecf3]"
                }`}
              >
                <h4 className="text-[1.1rem] font-bold text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">{item.label}</h4>
                <p className="mt-2.5 text-[#5b6b82]">{item.text}</p>
                <span
                  className={`mt-4 inline-flex rounded-full px-4 py-2 font-['Space_Grotesk',sans-serif] text-[0.85rem] font-bold ${
                    item.win ? "bg-[linear-gradient(135deg,#f2a93b,#d98d1f)] text-[#2a1a03]" : "bg-[linear-gradient(135deg,#0b2a4a,#123a63)] text-white"
                  }`}
                >
                  {item.growth}
                </span>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[20px] border border-[#e6ecf3] bg-white p-6 text-[15px] leading-7 text-[#16233a] shadow-[0_2px_12px_rgba(11,42,74,0.06)]">
            {active?.realityLesson ||
              "Both were bought for under $500k. But one built significant wealth, while the other barely kept pace with inflation. Investor B knew how to identify the right affordable suburbs, the infrastructure, demographics, and supply dynamics that drive sustained growth even at lower price points. Finding properties under $500k with genuine growth potential requires a specific framework. Without it, you're not buying affordable, you're buying cheap. And there's a massive difference."}
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATE CHECKLIST — "Do any of these sound like you?"
      ========================================================= */}
      <section className="pt-10 pb-19">
        <div className={CONTAINER}>
          <div className="mb-7 w-full">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d98d1f] before:block before:h-0.5 before:w-7 before:rounded-full before:bg-[linear-gradient(90deg,#f2a93b,transparent)] before:content-['']">
              {active?.relateKicker || "A quick check"}
            </span>
            <h2 className="mt-3 w-full text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
              {active?.relateTitle || "Do any of these sound like you?"}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-stretch">
            <div className="flex flex-col gap-4">
              <div className="space-y-2.5">
                {(active?.relateItems?.length
                  ? active.relateItems
                  : [
                      "You have a budget under $500k but feel priced out of any “good” areas",
                      "You're overwhelmed by conflicting advice about where affordable growth markets actually are",
                      "You can't tell the difference between genuinely affordable growth suburbs and areas that are cheap for a reason",
                      "You've seen properties under $500k but have no confidence they'll actually appreciate",
                      "You want to build wealth through property but your budget feels limiting",
                    ]
                ).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#e6ecf3] bg-white px-4 py-3.5 text-[#16233a] shadow-[0_2px_12px_rgba(11,42,74,0.04)] transition-transform hover:translate-x-1"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fdf1de] text-[10px] font-bold text-[#d98d1f]">
                      ☐
                    </span>
                    <span className="text-[14px] leading-6">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-1 text-[0.98rem] font-semibold leading-7 text-[#0b2a4a]">
                {active?.relateClosing || "If you ticked any of the above boxes, then this webinar is for you."}
              </p>
            </div>

            <div className="relative min-h-70 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0d4bb3,#1553ba)] shadow-[0_16px_40px_-12px_rgba(11,42,74,0.14)] lg:h-full">
              <Image
                src="/images/sound-familiar.png"
                alt="Sound familiar"
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                className="object-fill hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT YOU'LL LEARN — numbered cards
      ========================================================= */}
      <section className="bg-[#f4f8fc] pt-10 pb-19">
        <div className={CONTAINER}>
          <div className="mb-7 w-full">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d98d1f] before:block before:h-0.5 before:w-7 before:rounded-full before:bg-[linear-gradient(90deg,#f2a93b,transparent)] before:content-['']">
              {active?.learningKicker || "What you'll learn"}
            </span>
            <h2 className="mt-3 w-full text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
              {active?.learningTitle || "What you'll learn in this insightful webinar"}
            </h2>
            <p className="mt-4 w-full max-w-none text-[#5b6b82]">
              {active?.learningDescription ||
                "A practical, strategy-led session covering the framework, growth drivers and finance strategies for building a property portfolio under $500k."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {(active?.learningItems?.length
              ? active.learningItems
              : [
                  { title: "Suburb Selection Framework for Under $500k Opportunities", text: "A step-by-step method to evaluate suburbs with strong growth indicators that still offer entry points under $500k." },
                  { title: "Key Growth Drivers for 2026 & Beyond", text: "Understand the specific infrastructure, demographic, and supply-demand metrics that signal opportunity in affordable areas." },
                  { title: "Finance Strategies to Maximise Investment ROI", text: "Learn how loan structures, affordability modelling, and ownership options can make the most of your investment." },
                  { title: "Real-World Case Studies", text: "See real examples of suburbs that met growth and affordability criteria and learn how to spot similar opportunities." },
                ]
            ).map(({ title, text }, index) => (
              <div
                key={title}
                className="flex flex-col rounded-[20px] border border-[#e6ecf3] bg-white p-6 shadow-[0_2px_12px_rgba(11,42,74,0.06)] transition-all hover:-translate-y-1.5 hover:border-[#f2a93b]/40 hover:shadow-[0_16px_40px_-12px_rgba(11,42,74,0.14)]"
              >
                <strong className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b2a4a] font-[Space_Grotesk] text-white">
                  {String(index + 1).padStart(2, "0")}
                </strong>
                <h3 className="mb-2 mt-4 text-[1.05rem] font-semibold leading-snug text-[#0b2a4a]">{title}</h3>
                <p className="m-0 text-[0.92rem] leading-relaxed text-[#5b6b82]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BEFORE / AFTER TRANSFORM SECTION
      ========================================================= */}
      <section className="pt-10 pb-19">
        <div className={CONTAINER}>
          <div className="mb-7 w-full">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d98d1f] before:block before:h-0.5 before:w-7 before:rounded-full before:bg-[linear-gradient(90deg,#f2a93b,transparent)] before:content-['']">
              {active?.transformKicker || "Not sure if it's worth your time?"}
            </span>
            <h2 className="mt-3 w-full text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
              {active?.transformTitle || "Here's the shift in thinking it's designed to create"}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[20px] border border-[#e6ecf3] bg-white p-7 shadow-[0_2px_12px_rgba(11,42,74,0.06)]">
              <h4 className="text-[1.05rem] font-bold text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
                {active?.transformBeforeTitle || "Before attending this webinar"}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {(active?.transformBeforeItems?.length
                  ? active.transformBeforeItems
                  : [
                      "You believe finding a good property under $500k is nearly impossible",
                      "You're consuming endless “affordable suburbs” lists but feeling less confident",
                      "You're making decisions based solely on price, hoping for the best",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed text-[#16233a]">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-[#c0392b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] bg-[linear-gradient(135deg,#0b2a4a,#123a63)] p-7 shadow-[0_16px_40px_-12px_rgba(11,42,74,0.14)]">
              <h4 className="text-[1.05rem] font-bold text-[#ffd17a] font-['Space_Grotesk',sans-serif]">
                {active?.transformAfterTitle || "After attending this webinar"}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {(active?.transformAfterItems?.length
                  ? active.transformAfterItems
                  : [
                      "You'll have a clear framework for objectively evaluating affordable properties",
                      "You'll know exactly where sub-$500k growth opportunities exist",
                      "You'll distinguish genuine value from properties that are cheap for a reason, and move forward with confidence",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed text-[#dce8f5]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ffd17a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-[62ch] text-center text-[1.02rem] font-semibold leading-7 text-[#0b2a4a]">
            {active?.transformClosing ||
              "That transformation, from overwhelmed to clear, from hesitant to confident, is exactly what this webinar delivers."}
          </p>

          <div className="mt-6 text-center">
            <a
              href="#register"
              className="inline-flex h-13 items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f2a93b,#d98d1f)] px-7 font-['Space_Grotesk',sans-serif] text-[0.92rem] font-bold text-[#2a1a03] shadow-[0_12px_32px_-8px_rgba(242,169,59,0.45)] transition-transform hover:-translate-y-0.5"
            >
              Reserve Your Spot <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOSTS — data from MongoDB via the `hosts` prop
      ========================================================= */}
      <HostsSection hosts={hosts} />

      {/* =========================================================
          UPCOMING WEBINARS
      ========================================================= */}
      <section className="pt-10 pb-19">
        <div className={CONTAINER}>
          <div className="mb-7 w-full">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d98d1f] before:block before:h-0.5 before:w-7 before:rounded-full before:bg-[linear-gradient(90deg,#f2a93b,transparent)] before:content-['']">
              Upcoming webinars
            </span>
            <h2 className="mt-3 w-full text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
              Register from the cards below.
            </h2>
            <p className="mt-4 w-full max-w-none text-[#5b6b82]">
              Each webinar card can use an uploaded image from the dashboard. Clicking register brings the visitor back to the top form and selects that webinar.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {upcoming.map((webinar) => (
              <article key={webinar.id} className="overflow-hidden rounded-[22px] border border-[#e6ecf3] bg-white shadow-[0_2px_12px_rgba(11,42,74,0.06)]">
                <div className="relative min-h-52.5 bg-[#e9f0f8]">
                  {webinar.imageUrl ? (
                    <Image src={webinar.imageUrl} alt={webinar.title} fill sizes="(max-width: 900px) 100vw, 360px" className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center gap-2 p-6 text-center text-[#0b2a4a]">
                      <Users className="h-6 w-6" />
                      <span className="text-sm font-semibold">No image uploaded</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <small className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#d98d1f]">{webinar.category}</small>
                  <h3 className="mt-2 text-[1.55rem] font-semibold leading-[1.05] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">{webinar.title}</h3>
                  <div className="mt-4 flex items-center gap-4 text-[11px] font-semibold text-[#123a63]">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><CalendarDays className="h-3.5 w-3.5" /> {new Date(`${webinar.date}T00:00:00`).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><Clock3 className="h-3.5 w-3.5" /> {webinar.time}</span>
                    <button
                      type="button"
                      className="ml-auto inline-flex items-center gap-1.5 whitespace-nowrap text-[11px] font-semibold text-[#f2a93b]"
                      onClick={() => {
                        setSelected(webinar);
                        document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      Register <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section className="bg-[#f4f8fc] pb-10 pt-10">
        <div className={CONTAINER}>
          <div className="relative overflow-hidden rounded-4xl bg-[linear-gradient(135deg,#0b2a4a_0%,#123a63_50%,#0b2a4a_100%)] p-8 text-white sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(242,169,59,0.16),transparent_65%)]" />
            <div className="pointer-events-none absolute -left-16 -bottom-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(26,77,128,0.35),transparent_65%)]" />

            <div className="relative">
              <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold tracking-[-0.02em] font-['Space_Grotesk',sans-serif]">
                Ready to take the next step?
              </h2>
              <p className="mt-2.5 text-[#c4d4e8]">
                Reserve your webinar place or speak with the Nfinity Financials and PropWealth teams.
              </p>
            </div>

            <div className="relative mt-7 grid gap-4 sm:grid-cols-2 pb-6">
              {CONTACT_BRANDS.map((brand) => (
                <div key={brand.name} className="rounded-[18px] border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-[1.15rem] font-bold font-['Space_Grotesk',sans-serif]">{brand.name}</h3>
                  <div className="mt-4 flex flex-col gap-2.5 text-sm">
                    <a href={`mailto:${brand.email}`} className="inline-flex w-fit items-center gap-2.5 text-[#e7eff8] transition-colors hover:text-[#ffd17a]">
                      <Mail className="h-4 w-4 shrink-0" /> {brand.email}
                    </a>
                    <a href={`tel:${brand.phone.replace(/\s+/g, "")}`} className="inline-flex w-fit items-center gap-2.5 text-[#e7eff8] transition-colors hover:text-[#ffd17a]">
                      <Phone className="h-4 w-4 shrink-0" /> {brand.phone}
                    </a>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2.5 ">
                    {Object.entries(brand.socials).map(([platform, url]) => {
                      const Icon = SOCIAL_ICONS[platform];
                      if (!Icon) return null;
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${brand.name} ${platform}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:-translate-y-0.5 hover:border-[#f2a93b] hover:bg-[#f2a93b] hover:text-[#0b2a4a]"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <footer className="border-t border-[#e6ecf3] pt-5 text-center text-[0.8rem] text-white/70">
                  &copy; {new Date().getFullYear()} Nfinity Financials &amp; PropWealth. All rights reserved.
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}