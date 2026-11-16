"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

// Magnetic Button Component
const MagneticButton = ({ children, href, className, primary, onClick, style }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;

    btn.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = "";
  };

  const baseClasses = `relative inline-flex items-center justify-center gap-2 font-display font-semibold text-base px-7 py-3.5 rounded-xl border cursor-pointer overflow-hidden transition-[transform,border-color,background-color,color,box-shadow] duration-200 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${className}`;

  if (href.startsWith("#")) {
    return (
      <a
        ref={btnRef}
        href={href}
        onClick={onClick}
        style={style}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <Link
      ref={btnRef}
      href={href}
      style={style}
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll Reveal Observer
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

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
    <section className="text-center py-20 sm:py-28 relative z-[2] bg-transparent transition-colors duration-300">
      <div
        ref={sectionRef}
        className={`max-w-[1180px] mx-auto px-6 relative z-[2] transition-[opacity,transform] duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-[var(--foreground)]">
          The next urgent lead is coming tonight.
          <br />
          Who's going to answer it?
        </h2>

        <p className="text-[var(--foreground-muted)] text-base sm:text-lg max-w-[58ch] mx-auto mt-5 mb-9">
          Claim a Founding 25 spot, or start with a free website lead audit.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <MagneticButton
            primary
            href="#founding25"
            className="bg-[var(--primary)] text-[var(--color-accent-ink)] border-transparent shadow-md hover:opacity-95 active:scale-[0.98]"
          >
            Claim a Founding 25 Spot
          </MagneticButton>

          <MagneticButton
            href="/free-website-audit"
            className="bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Get a Free Website Lead Audit
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
