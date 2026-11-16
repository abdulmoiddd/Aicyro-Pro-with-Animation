"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "How it works", href: "/#problem" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Compare", href: "/#compare" },
  { name: "Who it's not for", href: "/#notfor" },
  { name: "Straight answers", href: "/#faq" },
];

export default function Navbar({ onOpenPopup }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effect & Smooth Scroll Progress Bar
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress(scrollY / docHeight);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync toggle UI with saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("closeDesk-theme") || "light";
    setIsLight(savedTheme === "light");
  }, []);

  // Intersection Observer to track active sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(2);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = isLight ? "dark" : "light";
    localStorage.setItem("closeDesk-theme", newTheme);
    setIsLight(newTheme === "light");
    window.dispatchEvent(new Event("closeDesk-theme-change"));
  };

  const handleNavClick = (e, href) => {
    if (href.includes("#")) {
      e.preventDefault();

      const targetId = href.split("#")[1];
      const elem = document.getElementById(targetId);

      if (elem) {
        setActiveSection(targetId);
        const navHeight = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-200 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border-color)] py-3 shadow-sm"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-[var(--container)] mx-auto px-4 sm:px-6 flex items-center justify-between gap-6 relative">
        {/* ================= BRAND LOGO ================= */}
        <Link
          href="/#top"
          onClick={(e) => handleNavClick(e, "/#top")}
          className="flex items-center gap-3 shrink-0 group select-none rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          aria-label="CloseDesk Home"
        >
          <div className="w-10 h-10 motion-safe:transition-transform duration-200 motion-safe:group-hover:scale-105">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-full h-full"
              aria-hidden="true"
            >
              <path
                fill="var(--primary)"
                d="M56.6,79.5c1.28-2.92,2.85-5.7,4.29-8.53q6.24-12.24,12.52-24.45c.14-.26.3-.5.51-.87l5.59,9.65L93.2,79a4.74,4.74,0,0,1,.24.51Z"
              />
              <path
                fill="var(--foreground)"
                d="M23.88,79.5a69.14,69.14,0,0,1,3.69-6.63Q38,54.81,48.42,36.77q4.52-7.79,9-15.57c.53-.93.87-.93,1.4,0,1.34,2.29,2.65,4.61,4,6.91a2,2,0,0,1-.4,1.28C56.81,39,51.36,48.67,45.83,58.3c-3.77,6.57-7.55,13.14-11.26,19.75a4.15,4.15,0,0,1-1.08,1.45Z"
              />
              <path
                fill="var(--primary)"
                d="M33.49,79.5c1.72-3.43,3.74-6.69,5.64-10q9-15.9,18.17-31.78c1.83-3.2,3.68-6.39,5.52-9.59,1.27,2.16,2.53,4.32,3.84,6.46.32.53,0,.86-.2,1.23Q61.74,44.19,57,52.57,49.59,65.66,42.2,78.76c-.13.23-.32.44-.24.74Z"
              />
              <path
                fill="var(--foreground)"
                d="M6.56,20.59H43.83L24.07,54.76C18.2,43.32,12.42,32,6.56,20.59Z"
              />
            </svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-xl tracking-tight text-[var(--foreground)] transition-colors duration-150 group-hover:text-[var(--primary)]">
              Close<em className="not-italic text-[var(--primary)]">Desk</em>
            </span>
            <span className="hidden sm:block text-xs text-[var(--foreground-muted)] font-normal">
              by Aicyro
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP LINKS ================= */}
        <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]/70 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(2);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${
                  isActive
                    ? "text-[var(--foreground)] font-semibold bg-[var(--primary)]/15 border border-[var(--primary)]/30"
                    : "font-normal text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-bg)]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary)]/50 motion-safe:transition-transform duration-150 motion-safe:hover:scale-105 motion-safe:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-full h-full">
              <svg
                className={`absolute w-4 h-4 transition-opacity duration-200 ${
                  isLight ? "opacity-100 text-[var(--primary)]" : "opacity-0 text-[var(--foreground-muted)]"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                className={`absolute w-4 h-4 transition-opacity duration-200 ${
                  !isLight ? "opacity-100 text-[var(--accent-blue)]" : "opacity-0 text-[var(--foreground-muted)]"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={onOpenPopup}
            className="px-5 py-2.5 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--color-accent-ink)] text-sm font-semibold rounded-xl motion-safe:transition-transform duration-150 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] cursor-pointer shadow-sm"
          >
            Claim a Spot
          </button>
        </div>

        {/* ================= MOBILE CONTROLS ================= */}
        <div className="flex items-center gap-3 lg:hidden shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] motion-safe:active:scale-95 motion-safe:transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] cursor-pointer"
          >
            {isLight ? (
              <svg
                className="w-4 h-4 text-[var(--primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-[var(--accent-blue)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] motion-safe:active:scale-95 motion-safe:transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] cursor-pointer"
          >
            <span
              className={`w-4 h-[2px] bg-[var(--foreground)] rounded-full transition-transform duration-200 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`w-4 h-[2px] bg-[var(--foreground)] rounded-full transition-transform duration-200 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ================= SMOOTH SCROLL TRACK BAR ================= */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent" aria-hidden="true">
        <div
          className="h-full w-full bg-[var(--primary)] origin-left will-change-transform transition-transform duration-75 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border-color)] shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(2);
                return (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 text-sm rounded-xl transition-colors duration-150 border cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${
                      isActive
                        ? "text-[var(--foreground)] font-semibold bg-[var(--primary)]/15 border-[var(--primary)]/30"
                        : "font-normal text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-bg)] border-transparent"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-[var(--border-color)] px-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenPopup();
                  }}
                  className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--color-accent-ink)] text-sm font-semibold rounded-xl transition-colors duration-150 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] cursor-pointer"
                >
                  Claim a Founding 25 Spot
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
