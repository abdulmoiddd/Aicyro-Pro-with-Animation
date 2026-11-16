import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const eyeRef = useRef(null);

  // Track mouse movement for interactive eye tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyeRef.current) {
        const rect = eyeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = Math.min(12, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 20);
        
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
    <div className="relative min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] overflow-hidden font-sans py-16 px-6">
      
      {/* Background Grid Pattern */}
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
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl text-center">
        
        {/* Interactive AI Radar "Eye" */}
        <div
          ref={eyeRef}
          className="relative w-32 h-32 mb-6 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-hidden="true"
        >
          {/* Outer Pulsing Rings */}
          <div className="absolute inset-0 rounded-full border border-[var(--primary)] opacity-30" />
          <div className="absolute inset-2 rounded-full border border-[var(--primary)] opacity-50 animate-[spin_6s_linear_infinite] border-t-transparent" />
          <div className="absolute inset-5 rounded-full border border-[var(--secondary)] opacity-60 animate-[spin_4s_linear_infinite_reverse] border-b-transparent" />

          {/* Center Core (Tracks Mouse) */}
          <div
            className={`absolute inset-7 rounded-full bg-[var(--primary)] flex items-center justify-center transition-[transform,background-color] duration-150 ease-out ${
              isHovering ? "scale-105" : "scale-100"
            }`}
            style={{ 
              transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`
            }}
          >
            {/* Inner Pupil Glow */}
            <div className="w-4 h-4 bg-[var(--color-accent-ink)] rounded-full" />
          </div>
        </div>

        {/* 404 Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--card-bg)] text-[var(--primary)] border border-[var(--border-color)] mb-4 inline-flex items-center gap-2 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" aria-hidden="true" />
          <span>Signal 404 · Destination Not Found</span>
        </div>

        {/* Giant 404 Number */}
        <h1 className="text-7xl sm:text-9xl font-black leading-none text-[var(--foreground)] tracking-tight select-none mb-6">
          404
        </h1>

        {/* Card */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 sm:p-10 text-center shadow-lg w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight mb-3">
            Signal Lost in the Mainframe
          </h2>
          <p className="text-[var(--foreground-muted)] text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            The AI searched the entire database, but the page you are looking
            for doesn't exist, has been moved, or is temporarily offline.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--foreground)] text-sm font-semibold bg-[var(--background)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--color-accent-ink)] text-sm font-semibold shadow-sm transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Navigate Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
