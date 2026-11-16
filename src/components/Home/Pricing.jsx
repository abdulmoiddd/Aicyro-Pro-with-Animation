"use client";

import React, { useEffect, useState, useRef } from "react";

export default function Pricing() {
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
      id="pricing"
      ref={sectionRef}
      className="relative z-10 py-16 sm:py-24 bg-transparent transition-colors duration-200"
    >
      <div className="max-w-[var(--container)] mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center max-w-[680px] mx-auto mb-14 transition-opacity transition-transform duration-500 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-[var(--foreground)]">
            Straight answers about pricing.
          </h2>
          <p className="text-lg text-[var(--foreground-muted)]">
            Most companies in this space make you book a call to hear a number.
            Here&apos;s ours, up front.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <PricingCard
            isVisible={isVisible}
            delay="delay-[100ms]"
            kicker="The build"
            price="$2,000"
            unit="value"
            description="The done-for-you implementation — audit, custom build around your trade and service area, install, and notification setup. Included at no charge for Founding 25 members."
          />

          <PricingCard
            isVisible={isVisible}
            delay="delay-[200ms]"
            isFeatured={true}
            kicker="Founder rate"
            price="$250–350"
            unit="/mo"
            description="The founding-round monthly rate, locked for the life of your account — it never goes up, ever. Your exact rate within this range depends on your trade and lead volume, and is confirmed on your call before you commit to anything."
          />

          <PricingCard
            isVisible={isVisible}
            delay="delay-[300ms]"
            kicker="Standard rate (after launch)"
            price="$400–500"
            unit="/mo"
            description="Where pricing is planned to land once the founding round closes. We're telling you now so the founder rate isn't a gimmick — it's simply what early clients get for helping us prove this publicly."
          />
        </div>

        {/* Detailed Pricing Note */}
        <div
          className={`max-w-[800px] mx-auto mt-12 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[18px] p-8 lg:p-10 transition-opacity transition-transform duration-500 ease-out delay-[400ms] shadow-sm ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[0.96rem] leading-relaxed text-[var(--foreground)]">
            <strong className="font-semibold text-[var(--primary)]">
              What moves the price within the range:
            </strong>{" "}
            the complexity of your qualification flow (a restoration company
            dispatching emergency crews needs more than an appliance repair
            shop), your lead volume, and how many notification routes your team
            needs. There are no per-lead fees, and no charge for the leads
            CloseDesk captures. If the numbers don&apos;t make sense for your
            business, we&apos;ll tell you on the call — a bad-fit client costs us
            more than an honest no.
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Subcomponent: Pricing Card ---

function PricingCard({
  isVisible,
  delay,
  isFeatured,
  kicker,
  price,
  unit,
  description,
}) {
  return (
    <div
      className={`relative flex flex-col bg-[var(--card-bg)] border rounded-[22px] p-8 lg:p-10 transition-opacity transition-transform duration-300 ease-out group ${delay} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${
        isFeatured
          ? "border-[var(--primary)] shadow-sm z-10"
          : "border-[var(--border-color)] shadow-sm hover:border-[var(--primary)]/50"
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <span className="absolute -top-3.5 left-7 bg-[var(--primary)] text-[var(--color-accent-ink)] text-xs px-3 py-1 rounded-md font-semibold shadow-sm">
          Founding 25
        </span>
      )}

      {/* Card Content */}
      <span className="text-xs text-[var(--foreground-muted)] font-medium mb-4 block">
        {kicker}
      </span>

      <div className="font-bold text-4xl lg:text-[2.6rem] tracking-tight text-[var(--foreground)] mb-6 tabular-nums">
        {price}
        <span className="text-base font-normal text-[var(--foreground-muted)] ml-1">
          {unit}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-[var(--foreground-muted)] flex-1">
        {description}
      </p>
    </div>
  );
}
