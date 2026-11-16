"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft, Home, Compass, Radio } from "lucide-react";

export default function Custom404() {
  const router = useRouter();
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const eyeRef = useRef(null);

  // Track cursor position for tactile radar tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyeRef.current) {
        const rect = eyeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = Math.min(14, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 22);
        
        setPupilPos({
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] overflow-hidden font-sans py-16 px-6 transition-colors duration-200">
      
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)"
        }}
        aria-hidden="true"
      />

      {/* Main 404 Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-xl text-center">
        
        {/* Interactive Telemetry Beacon */}
        <div
          ref={eyeRef}
          className="relative w-32 h-32 mb-8 cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-hidden="true"
        >
          {/* Outer Pulsing Radar Rings */}
          <div className="absolute inset-0 rounded-full border border-[var(--border-color)]" />
          <div className="absolute inset-2 rounded-full border border-[var(--primary)]/30 motion-safe:animate-[spin_10s_linear_infinite] border-t-transparent" />
          <div className="absolute inset-5 rounded-full border border-[var(--primary)]/50 motion-safe:animate-[spin_6s_linear_infinite_reverse] border-b-transparent" />

          {/* Core Sensor (Follows Cursor) */}
          <div
            className={`absolute inset-7 rounded-full bg-[var(--card-bg)] border-2 border-[var(--primary)] flex items-center justify-center shadow-sm motion-safe:transition-transform duration-100 ease-out ${
              isHovering ? "scale-105" : "scale-100"
            }`}
            style={{ 
              transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`
            }}
          >
            <div className="w-4 h-4 bg-[var(--primary)] rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent-ink)] rounded-full" />
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border-color)] mb-6 inline-flex items-center gap-2 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[var(--logo-politico-red)] motion-safe:animate-pulse" aria-hidden="true" />
          <span>Signal 404: Route Not Resolved</span>
        </div>

        {/* Display Heading */}
        <h1 className="text-7xl sm:text-8xl font-black text-[var(--foreground)] tracking-tight tabular-nums select-none mb-4 leading-none">
          404
        </h1>

        {/* Content Card */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 text-center shadow-xs w-full mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] mb-2">
            <Radio size={14} aria-hidden="true" />
            <span>Autonomous Dispatch Error</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight mb-3">
            This destination is off the network.
          </h2>

          <p className="text-[var(--foreground-muted)] text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed text-pretty">
            The page you requested does not exist, has been archived, or was moved. CloseDesk monitors all incoming traffic, but this route leads nowhere.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[var(--border-color)] text-[var(--foreground)] text-sm font-semibold bg-[var(--background)] hover:border-[var(--primary)] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 disabled:pointer-events-none shadow-2xs whitespace-nowrap"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Go Back</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--color-accent-ink)] text-sm font-bold transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] shadow-xs whitespace-nowrap"
            >
              <Home size={16} aria-hidden="true" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>

        {/* Quick Diagnostic Strip */}
        <div className="flex items-center gap-4 text-xs text-[var(--foreground-muted)]">
          <span className="flex items-center gap-1.5">
            <Compass size={13} className="text-[var(--primary)]" aria-hidden="true" />
            <span>Gateway Online</span>
          </span>
          <span className="text-[var(--border-color)]" aria-hidden="true">|</span>
          <span className="tabular-nums">Code: ERR_PATH_UNMAPPED</span>
        </div>

      </div>
    </div>
  );
}
