import Image from "next/image";

export default function HostsSection({ hosts = [] }) {
  if (!hosts.length) return null;

  return (
    <section className="bg-[#f4f8fc] pt-10 pb-10">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="mb-7 w-full">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d98d1f] before:block before:h-0.5 before:w-7 before:rounded-full before:bg-[linear-gradient(90deg,#f2a93b,transparent)] before:content-['']">
            Meet your hosts
          </span>
          <h2 className="mt-3 w-full text-[clamp(1.85rem,6vw,3.4rem)] font-bold leading-[1.05] sm:leading-none tracking-[-0.03em] sm:tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
            Experienced finance and property professionals
          </h2>
          <p className="mt-4 w-full max-w-none text-[#5b6b82]">
            Learn from specialists who combine mortgage strategy, property analysis and real-world client experience.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-5 sm:gap-6.5">
          {hosts.map((host, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={host.id}
                className={`group relative flex flex-col items-stretch gap-5 overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#e6ecf3] bg-white p-5 sm:gap-7 sm:p-7 lg:gap-9 lg:p-8 shadow-[0_2px_12px_rgba(11,42,74,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,42,74,0.14)] sm:flex-row ${
                  reversed ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Accent bar — full-width strip on top for mobile, edge bar on desktop */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-[linear-gradient(to_right,#f2a93b,#d98d1f)] sm:inset-x-auto sm:inset-y-0 sm:top-0 sm:bottom-0 sm:h-auto sm:w-1 sm:bg-[linear-gradient(to_bottom,#f2a93b,#d98d1f)] ${
                    reversed ? "sm:right-0 sm:left-auto" : "sm:left-0"
                  }`}
                />

                {/* Photo panel — full width strip on mobile, fixed-width column from sm+ */}
                <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-[16px] sm:h-auto sm:w-44 sm:rounded-[18px] md:w-52 lg:w-60">
                  {host.imageUrl ? (
                    <>
                      <Image
                        src={host.imageUrl}
                        alt={host.name || "Host"}
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,42,74,0.25),transparent_55%)]" />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#0b2a4a,#123a63)] font-['Space_Grotesk',sans-serif] text-[1.8rem] sm:text-[2.2rem] font-bold tracking-[0.02em] text-white">
                      {(host.name || "")
                        .split(" ")
                        .map((word) => word.charAt(0))
                        .join("")}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 min-w-0 flex-col justify-center">
                  <h3 className="text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] font-bold leading-tight tracking-[-0.01em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
                    {host.name}
                  </h3>
                  <p className="mt-1.5 text-[0.8rem] sm:text-[0.82rem] font-semibold text-[#d98d1f]">
                    {host.designation}
                  </p>
                  <div className="mt-3.5 space-y-3.5 text-[0.9rem] sm:text-[0.92rem] leading-[1.65] sm:leading-[1.7] text-[#5b6b82]">
                    {(host.description || "")
                      .split(/\n\s*\n/)
                      .filter((para) => para.trim())
                      .map((para, i) => (
                        <p key={i}>{para.trim()}</p>
                      ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}