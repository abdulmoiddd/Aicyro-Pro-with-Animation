"use client";

import React, { useEffect, useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Offer({ onOpenPopup }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founding25"
      ref={sectionRef}
      className="relative z-10 py-20 sm:py-28 bg-[var(--background)] transition-colors duration-300"
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Main Offer Card Container */}
        <div
          className={`relative w-full rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl overflow-hidden transition-[opacity,transform] duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtle Accent Top Rule */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)]" />

          {/* Content Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 p-8 sm:p-12 lg:p-14 items-center">
            {/* Left Column: Offer Details */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 tracking-tight text-[var(--foreground)] leading-[1.15]">
                Founder pricing, locked for life.
              </h2>
              <p className="text-base sm:text-lg text-[var(--foreground-muted)] mb-8 leading-relaxed">
                We're taking a limited group of founding clients through the
                full done-for-you build — and locking their rate permanently.
              </p>

              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm sm:text-base text-[var(--foreground)]">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-[var(--primary)]"
                    aria-hidden="true"
                  />
                  <span>
                    Done-for-you implementation: audit, custom build, install,
                    notifications — the full $2,000 build, included.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[var(--foreground)]">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-[var(--primary)]"
                    aria-hidden="true"
                  />
                  <span>60 days of hands-on optimization after launch.</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[var(--foreground)]">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-[var(--primary)]"
                    aria-hidden="true"
                  />
                  <span>
                    Founder monthly rate ($250–350/mo) locked for life — never
                    raised, ever.
                  </span>
                </li>
              </ul>

              <button
                onClick={onOpenPopup}
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--primary)] text-[var(--color-accent-ink)] font-bold rounded-xl shadow-md hover:opacity-95 active:scale-[0.98] transition-[opacity,transform] duration-200 text-base sm:text-lg w-full sm:w-auto"
              >
                Claim a Founding 25 Spot
              </button>
            </div>

            {/* Right Column: Pricing Receipt Card */}
            <div className="relative bg-[var(--background)] border border-[var(--border-color)] rounded-2xl p-7 sm:p-9 shadow-sm">
              <div className="text-xs font-semibold text-[var(--foreground-muted)] mb-2">
                Implementation value
              </div>
              <div className="font-black text-4xl sm:text-5xl text-[var(--foreground)] tracking-tight mb-2 flex items-center gap-3">
                $2,000
                <span className="text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] px-2.5 py-1 rounded-md line-through">
                  Waived
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                included for Founding 25 members
              </p>

              <hr className="border-t border-[var(--border-color)] my-6" />

              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                Standard pricing after the founding round is planned at
                $400–500/mo. Founding members lock a $250–350/mo rate for the
                life of their account.
              </p>

              <hr className="border-t border-[var(--border-color)] my-6" />

              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-medium">
                Prefer to start smaller? Book a free website lead audit —
                we'll show you exactly where after-hours leads are slipping
                away.
              </p>

              {/* ===== TICKET H8: PILOT_QUOTE slot (hidden by default) ===== */}
              <div
                id="pilot-quote"
                className="hidden mt-6 pt-6 border-t border-[var(--border-color)]"
              >
                <p className="italic text-sm text-[var(--foreground)] leading-relaxed">
                  "[PILOT_QUOTE_APPROVED_TEXT]"
                </p>
                <p className="mt-2 text-xs text-[var(--foreground-muted)]">
                  [PILOT_NAME] / [PILOT_COMPANY] / [PILOT_TRADE]
                </p>
              </div>
              {/* ===== END TICKET H8 ===== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
