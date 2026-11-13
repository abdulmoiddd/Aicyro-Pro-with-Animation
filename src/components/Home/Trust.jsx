"use client";

import React, { useEffect, useState, useRef } from "react";

// --- Live Motion Icons (Pure SVG + CSS Animation) ---

function LiveShieldIcon() {
  return (
    <div className="relative w-7 h-7 flex items-center justify-center">
      {/* Radiating security perimeter pulse */}
      <span className="absolute inset-[-4px] rounded-full border border-[var(--primary)]/30 animate-[ping_3.2s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-[var(--primary)]"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="transition-all" />
        <path
          d="m9 12 2 2 4-4"
          className="stroke-[var(--primary)] animate-[pulse_2.5s_ease-in-out_infinite]"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

function LiveScanDocumentIcon() {
  return (
    <div className="relative w-7 h-7 flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-[var(--primary)]"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" strokeDasharray="1 1" opacity="0.6" />
        <line x1="8" y1="17" x2="13" y2="17" strokeDasharray="1 1" opacity="0.6" />
      </svg>

      {/* Live Animated Scanning Laser Beam */}
      <div className="absolute left-1 right-1 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent shadow-[0_0_8px_var(--primary)] animate-[laser-sweep_2.4s_ease-in-out_infinite] pointer-events-none" />
    </div>
  );
}

function LivePulseActivityIcon() {
  return (
    <div className="relative w-7 h-7 flex items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-[var(--primary)]"
      >
        {/* Frame Box */}
        <rect width="18" height="18" x="3" y="3" rx="4" opacity="0.4" />
        {/* Live Heartbeat Line */}
        <path
          d="M7 12h2.5l1.5-4 3 8 1.5-4H17"
          className="stroke-[var(--primary)] animate-[ecg-flow_2s_linear_infinite]"
          strokeWidth="2.2"
          strokeDasharray="24"
          strokeDashoffset="24"
        />
      </svg>

      {/* Traveling Pulse Beacon Dot */}
      <span className="absolute w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)] animate-[ecg-dot_2s_linear_infinite] pointer-events-none" />
    </div>
  );
}

export default function Trust() {
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trustData = [
    {
      title: "Your data is yours — in writing",
      description:
        "Every lead, conversation, and booking belongs to your business. It's in the agreement, not just on this page.",
      icon: LiveShieldIcon,
      delay: "delay-[150ms]",
    },
    {
      title: "A documented process",
      description:
        "Every step of the build follows a written process, and every call happens in your business hours.",
      icon: LiveScanDocumentIcon,
      delay: "delay-[300ms]",
    },
    {
      title: "Results visible in Pulse",
      description:
        "Leads, bookings, and outcomes live in your Pulse dashboard — you see exactly what CloseDesk is producing.",
      icon: LivePulseActivityIcon,
      delay: "delay-[450ms]",
    },
  ];

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="relative z-10 py-12 sm:py-16 bg-transparent transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center max-w-[680px] mx-auto mb-16 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          <span className="font-mono text-xs tracking-widest uppercase text-[var(--primary)] flex items-center justify-center gap-2 mb-5">
            <div className="w-7 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full" />
            Why owners trust us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            No black box. No lock-in. No guesswork.
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[22px] p-8 lg:p-10 transition-all duration-[700ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2.5 hover:border-[var(--primary)]/40 hover:shadow-[0_16px_40px_var(--lead-glow)] overflow-hidden ${item.delay} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
              >
                {/* Animated Top Border (Expands on Hover) */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent-blue)] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-10" />

                {/* Icon Container with live motion */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--primary)]/15 group-hover:shadow-[0_0_20px_var(--lead-glow)]">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 tracking-tight transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[0.94rem] leading-relaxed text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes laser-sweep {
          0%, 100% { transform: translateY(-7px); opacity: 0.2; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        @keyframes ecg-flow {
          0% { stroke-dashoffset: 24; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -24; }
        }
        @keyframes ecg-dot {
          0% { transform: translate(-10px, 0); opacity: 0; }
          30% { opacity: 1; }
          50% { transform: translate(0px, -4px); opacity: 1; }
          70% { transform: translate(5px, 4px); opacity: 1; }
          100% { transform: translate(10px, 0); opacity: 0; }
        }
      `,
        }}
      />
    </section>
  );
}
