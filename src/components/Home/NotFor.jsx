"use client";

import React, { useEffect, useState, useRef } from "react";
import { XCircle } from "lucide-react";

export default function NotFor() {
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

  const notForData = [
    {
      title: "You're not running ads or SEO",
      description:
        "CloseDesk converts visitors you already have. If nobody lands on your website, there's nothing for us to answer. Fix traffic first — then talk to us.",
      delay: "delay-[100ms]",
    },
    {
      title: "You have no real after-hours demand",
      description:
        "If your jobs are all scheduled weeks out and nothing is ever urgent, the 24/7 booking desk solves a problem you don't have.",
      delay: "delay-[180ms]",
    },
    {
      title: "You can't take more jobs",
      description:
        "If your crews are booked solid for months, more booked jobs just means more cancellations. Come back when you're hiring.",
      delay: "delay-[260ms]",
    },
    {
      title: "Your website barely works",
      description:
        "CloseDesk lives on your site. If the site itself is broken or you don't control it, we'd be installing a booking desk in a building with no door.",
      delay: "delay-[340ms]",
    },
  ];

  return (
    <section
      id="notfor"
      ref={sectionRef}
      className="relative z-10 py-20 sm:py-28 bg-[var(--background)] transition-colors duration-300"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center max-w-[680px] mx-auto mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-[var(--foreground)]">
            We turn down businesses that fit these. Honestly.
          </h2>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            A bad-fit client gets no results and costs both of us. If any of
            these describe you, CloseDesk isn't your answer yet — and we'll say
            so.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {notForData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 transition-[transform,border-color,box-shadow,opacity] duration-300 ease-out hover:-translate-y-1 hover:border-[var(--logo-politico-red)]/40 hover:shadow-lg group ${item.delay} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Icon */}
              <div className="shrink-0 mt-0.5 p-2 rounded-xl bg-[var(--logo-politico-red)]/10 border border-[var(--logo-politico-red)]/20 transition-[transform,background-color] duration-200 group-hover:scale-105 group-hover:bg-[var(--logo-politico-red)]/15">
                <XCircle
                  size={22}
                  className="text-[var(--logo-politico-red)]"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
