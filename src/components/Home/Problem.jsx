"use client";

import React, { useRef, useEffect, useState } from "react";
import { User, Clock, XCircle, Trophy } from "lucide-react";

export default function Problem() {
  const sectionRef = useRef(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  // Animation Orchestration States
  const [headerVisible, setHeaderVisible] = useState(false);
  const [lineDrawn, setLineDrawn] = useState(false);
  const [visibleStages, setVisibleStages] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [footerVisible, setFooterVisible] = useState(false);

  // 1. Intersection Observer to detect scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasScrolledIntoView(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 2. Fire the animations sequentially
  useEffect(() => {
    if (!hasScrolledIntoView) return;

    const headerTimer = setTimeout(() => setHeaderVisible(true), 150);
    const lineTimer = setTimeout(() => setLineDrawn(true), 350);

    const baseDelay = 500;
    const interval = 200;

    const stageTimers = [0, 1, 2, 3].map((index) => {
      return setTimeout(
        () => {
          setVisibleStages((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        },
        baseDelay + index * interval,
      );
    });

    const footerTimer = setTimeout(
      () => setFooterVisible(true),
      baseDelay + 4 * interval + 150,
    );

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(lineTimer);
      clearTimeout(footerTimer);
      stageTimers.forEach(clearTimeout);
    };
  }, [hasScrolledIntoView]);

  const stages = [
    {
      num: "01",
      title: "Visitor lands",
      desc: "Intent is high — they're ready to hire.",
      icon: User,
      status: "normal",
    },
    {
      num: "02",
      title: "Nobody responds",
      desc: "Your form sits there. Phone rings out.",
      icon: Clock,
      status: "warning",
    },
    {
      num: "03",
      title: "Tab closed",
      desc: "They go back to the search results.",
      icon: XCircle,
      status: "warning",
    },
    {
      num: "04",
      title: "Competitor wins",
      desc: "Whoever answered first gets the job.",
      icon: Trophy,
      status: "lost",
    },
  ];

  const pains = [
    "Speed beats reputation when someone's basement is flooding.",
    "It collects requests nobody sees until hours later.",
    "Nights and weekends are when emergencies - and lost jobs - happen.",
    "Every unanswered visitor is money you paid to book a competitor's job.",
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 bg-[var(--background)] text-[var(--foreground)] z-10 overflow-hidden border-t border-[var(--border-color)] flex flex-col justify-center transition-colors duration-200"
    >
      <div className="max-w-[var(--container)] mx-auto w-full flex flex-col items-center">
        {/* ================= HEADER ================= */}
        <div
          className={`flex flex-col items-center text-center mb-16 lg:mb-20 transition-opacity transition-transform duration-500 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium text-[var(--foreground-muted)]">
              The Leak in Your Website
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 text-balance leading-[1.12] text-[var(--foreground)]">
            You&apos;re paying for traffic.
            <br className="hidden sm:block" />
            <span className="text-[var(--primary)]">
              Your competitors are booking it.
            </span>
          </h2>
          <p className="text-[var(--foreground-muted)] text-base sm:text-lg max-w-[58ch] font-normal leading-relaxed text-balance">
            A homeowner with a burst pipe doesn&apos;t fill out a contact form and
            wait. They open three tabs and hire whoever answers first.
          </p>
        </div>

        {/* ================= PIPELINE GRID ================= */}
        <div className="relative w-full mb-16 lg:mb-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[33px] left-[12.5%] right-[12.5%] h-[2px] bg-[var(--grid-line)] z-0 rounded-full overflow-hidden" aria-hidden="true">
            <div
              className="h-full bg-[var(--primary)] transition-transform duration-700 ease-out origin-left"
              style={{ transform: `scaleX(${lineDrawn ? 1 : 0})` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stages.map((stage, i) => {
              const isVisible = visibleStages[i];
              const Icon = stage.icon;

              const isLost = stage.status === "lost";
              const isWarning = stage.status === "warning";

              const iconColor = isLost
                ? "text-[var(--logo-politico-red)]"
                : isWarning
                  ? "text-[var(--foreground-muted)]"
                  : "text-[var(--primary)]";

              const borderColorClass = isLost
                ? "border-[var(--logo-politico-red)]/40 bg-[var(--card-bg)]"
                : isVisible
                  ? "border-[var(--border-color)] bg-[var(--card-bg)]"
                  : "border-[var(--border-color)] bg-[var(--card-bg)]";

              return (
                <div
                  key={i}
                  className={`relative text-center px-4 transition-opacity transition-transform duration-500 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {/* Step Icon Box */}
                  <div className="group cursor-default">
                    <div
                      className={`mx-auto w-[66px] h-[66px] mb-4 rounded-2xl border flex items-center justify-center transition-colors duration-200 relative overflow-hidden shadow-sm ${borderColorClass}`}
                    >
                      {i === 0 && (
                        <User className={iconColor} size={28} aria-hidden="true" />
                      )}

                      {i === 1 && (
                        <div className="relative w-7 h-7 flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`w-full h-full ${iconColor}`}
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12" />
                            <line
                              x1="12"
                              y1="12"
                              x2="16.5"
                              y2="12"
                              className="origin-[12px_12px]"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      )}

                      {i === 2 && (
                        <XCircle className={iconColor} size={28} aria-hidden="true" />
                      )}

                      {i === 3 && (
                        <Trophy className={iconColor} size={28} aria-hidden="true" />
                      )}
                    </div>
                  </div>

                  {/* Step Title & Desc */}
                  <h3
                    className={`text-base font-semibold mb-2 ${isLost ? "text-[var(--logo-politico-red)]" : "text-[var(--foreground)]"}`}
                  >
                    <span className="text-xs font-normal text-[var(--foreground-muted)] mr-1.5 tabular-nums">
                      {stage.num}.
                    </span>
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= COMPACT FOOTER / DIAGNOSTICS ================= */}
        <div
          className={`w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 bg-[var(--card-bg)] border border-[var(--border-color)] p-8 sm:p-10 rounded-3xl relative overflow-hidden transition-opacity transition-transform duration-500 ease-out shadow-sm ${
            footerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="lg:w-1/3 text-center lg:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2">
              Your ad spend. <br /> Their job.
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] mt-2">
              Stop leaking high-intent leads to your competitors.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 z-10">
            {pains.map((pain, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-3.5 h-3.5 text-[var(--primary)]" aria-hidden="true" />
                </div>
                <span className="text-sm font-normal text-[var(--foreground-muted)] leading-snug">
                  {pain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
