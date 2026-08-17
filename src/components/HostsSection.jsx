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
          <h2 className="mt-3 w-full text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-[-0.04em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
            Experienced finance and property professionals
          </h2>
          <p className="mt-4 w-full max-w-none text-[#5b6b82]">
            Learn from specialists who combine mortgage strategy, property analysis and real-world client experience.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-6.5">
          {hosts.map((host, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={host.id}
                className={`group relative flex items-stretch gap-9 overflow-hidden rounded-[32px] border border-[#e6ecf3] bg-white p-8 shadow-[0_2px_12px_rgba(11,42,74,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,42,74,0.14)] ${
                  reversed ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Gold accent bar on the outer edge */}
                <span
                  className={`absolute top-0 bottom-0 w-1 bg-[linear-gradient(to_bottom,#f2a93b,#d98d1f)] ${
                    reversed ? "right-0" : "left-0"
                  }`}
                />

                {/* Photo panel — fixed width, fills full card height, cropped to cover */}
                <div className="relative min-h-70 w-60 shrink-0 overflow-hidden rounded-[18px]">
                  {host.imageUrl ? (
                    <>
                      <Image
                        src={host.imageUrl}
                        alt={host.name || "Host"}
                        fill
                        sizes="(max-width: 900px) 100vw, 240px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,42,74,0.25),transparent_55%)]" />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#0b2a4a,#123a63)] font-['Space_Grotesk',sans-serif] text-[2.2rem] font-bold tracking-[0.02em] text-white">
                      {(host.name || "")
                        .split(" ")
                        .map((word) => word.charAt(0))
                        .join("")}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="text-[1.4rem] font-bold leading-tight tracking-[-0.01em] text-[#0b2a4a] font-['Space_Grotesk',sans-serif]">
                    {host.name}
                  </h3>
                  <p className="mt-1.5 text-[0.82rem] font-semibold text-[#d98d1f]">
                    {host.designation}
                  </p>
                  <div className="mt-3.5 space-y-3.5 text-[0.92rem] leading-[1.7] text-[#5b6b82]">
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