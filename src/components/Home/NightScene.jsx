"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Clock,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Smartphone,
} from "lucide-react";

const TIMELINE_STEPS = [
  {
    id: 1,
    time: "9:47 PM",
    clockH: "9",
    clockM: "47",
    clockAp: "PM",
    tag: "Fort Worth · Water Damage",
    leadName: "Fort Worth Homeowner",
    message:
      "Water heater burst, there's water pouring everywhere. Can anyone come tonight??",
    lossAmount: "$3,400",
    cumulativeLoss: "$3,400",
    stamp: "GONE — NO REPLY",
    competitor: "Hired competitor running 24/7 ads",
    tabsOpen: 3,
  },
  {
    id: 2,
    time: "11:26 PM",
    clockH: "11",
    clockM: "26",
    clockAp: "PM",
    tag: "Arlington · Flooding",
    leadName: "Arlington Property Owner",
    message:
      "Basement flooding from storm drain, need emergency pump out ASAP. Are you open?",
    lossAmount: "$2,800",
    cumulativeLoss: "$6,200",
    stamp: "HIRED SOMEONE ELSE",
    competitor: "Hired firm that answered in 18 seconds",
    tabsOpen: 4,
  },
  {
    id: 3,
    time: "1:03 AM",
    clockH: "1",
    clockM: "03",
    clockAp: "AM",
    tag: "Fort Worth · HVAC Outage",
    leadName: "Fort Worth Family",
    message:
      "AC died and we have a newborn in the house. Please tell me someone's there to dispatch.",
    lossAmount: "$4,200",
    cumulativeLoss: "$10,400",
    stamp: "GONE — NO REPLY",
    competitor: "Booked with 24/7 AI-equipped competitor",
    tabsOpen: 2,
  },
];

export default function NightScene() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isResolved, setIsResolved] = useState([false, false, false]);
  const [isFlash, setIsFlash] = useState(false);
  const [stars, setStars] = useState([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Generate background constellation stars once on mount
  useEffect(() => {
    const starArray = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 85}%`,
      duration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 3}s`,
      size: Math.random() > 0.85 ? "3px" : "2px",
    }));
    setStars(starArray);
  }, []);

  // Autonomous Nighttime Story Progression
  useEffect(() => {
    if (!isAutoPlaying) return;

    let isCancelled = false;
    let timers = [];

    const runSimulation = () => {
      if (isCancelled) return;

      // Step 0: 9:47 PM
      setActiveStep(0);
      setIsResolved([false, false, false]);
      setIsFlash(true);
      timers.push(setTimeout(() => setIsFlash(false), 800));

      // Resolve step 0 after 3.2s
      timers.push(
        setTimeout(() => {
          setIsResolved([true, false, false]);
        }, 3200),
      );

      // Step 1: 11:26 PM at t=4.5s
      timers.push(
        setTimeout(() => {
          setActiveStep(1);
          setIsFlash(true);
          setTimeout(() => setIsFlash(false), 800);
        }, 4500),
      );

      // Resolve step 1 after 7.5s
      timers.push(
        setTimeout(() => {
          setIsResolved([true, true, false]);
        }, 7500),
      );

      // Step 2: 1:03 AM at t=8.8s
      timers.push(
        setTimeout(() => {
          setActiveStep(2);
          setIsFlash(true);
          setTimeout(() => setIsFlash(false), 800);
        }, 8800),
      );

      // Resolve step 2 after 11.8s
      timers.push(
        setTimeout(() => {
          setIsResolved([true, true, true]);
        }, 11800),
      );

      // Step 3: 7:02 AM Wakeup at t=13.2s
      timers.push(
        setTimeout(() => {
          setActiveStep(3);
        }, 13200),
      );

      // Loop after 19s
      timers.push(
        setTimeout(() => {
          runSimulation();
        }, 19000),
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          runSimulation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      isCancelled = true;
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [isAutoPlaying]);

  const handleManualSelect = (idx) => {
    setIsAutoPlaying(false);
    setActiveStep(idx);
    if (idx === 0) setIsResolved([true, false, false]);
    if (idx === 1) setIsResolved([true, true, false]);
    if (idx === 2) setIsResolved([true, true, true]);
    if (idx === 3) setIsResolved([true, true, true]);
  };

  const handleRestart = () => {
    setIsAutoPlaying(true);
    setActiveStep(0);
    setIsResolved([false, false, false]);
  };

  const currentStepData =
    activeStep < 3 ? TIMELINE_STEPS[activeStep] : TIMELINE_STEPS[2];
  const isMorning = activeStep === 3;

  return (
    <section
      ref={sectionRef}
      id="night"
      className="relative z-10 py-24 sm:py-32 bg-[var(--background)] text-[var(--foreground)] overflow-hidden transition-colors duration-200"
    >
      {/* ================= AMBIENT NOCTURNE BACKGROUND FX ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Subtle Constellation Stars */}
        {stars.map((star) => (
          <i
            key={star.id}
            className="absolute rounded-full bg-[var(--foreground)] opacity-20"
            style={{
              width: star.size,
              height: star.size,
              left: star.left,
              top: star.top,
              animation: `twinkle ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[var(--container)] mx-auto px-4 sm:px-6 z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-xs font-medium text-[var(--foreground-muted)] mb-6 shadow-sm">
            <Moon size={14} className="text-[var(--primary)]" aria-hidden="true" />
            <span>The Overnight Blind Spot</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance text-[var(--foreground)]">
            Your next customer isn&apos;t waiting until morning.
            <br />
            <span className="text-[var(--primary)]">
              And neither is your competitor.
            </span>
          </h2>

          <p className="text-[var(--foreground-muted)] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            He answered every call during the day. But when midnight pipes burst and heaters die, homeowners hire the first business that answers.
          </p>

          {/* Interactive Nocturnal Timeline Scrubber */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 pt-4">
            {TIMELINE_STEPS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => handleManualSelect(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors duration-150 border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 cursor-pointer ${
                  activeStep === idx
                    ? "bg-[var(--card-bg)] border-[var(--primary)] text-[var(--foreground)] shadow-sm"
                    : "bg-[var(--card-bg)]/60 border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/50"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeStep === idx ? "bg-[var(--primary)] animate-pulse" : "bg-[var(--border-color)]"}`} aria-hidden="true" />
                {s.time}
              </button>
            ))}

            <button
              onClick={() => handleManualSelect(3)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors duration-150 border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 cursor-pointer ${
                activeStep === 3
                  ? "bg-[var(--card-bg)] border-[var(--primary)] text-[var(--foreground)] shadow-sm"
                  : "bg-[var(--card-bg)]/60 border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/50"
              }`}
            >
              <Clock size={12} aria-hidden="true" />
              7:02 AM Wakeup
            </button>

            {!isAutoPlaying && (
              <button
                onClick={handleRestart}
                title="Restart autoplay"
                aria-label="Restart autoplay"
                className="p-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-150 ml-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 cursor-pointer"
              >
                <RotateCcw size={14} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* ================= MAIN DUAL-STAGE THEATER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ================= LEFT COLUMN: THE NOCTURNAL DEVICE ================= */}
          <div className="lg:col-span-6 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Top Stage Bar: Digital OLED Clock & Status */}
            <div className="flex items-center justify-between pb-6 border-b border-[var(--grid-line)] z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] shadow-sm">
                  <Smartphone size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-2">
                    Owner&apos;s Phone on Nightstand
                  </h3>
                  <span className="text-xs text-[var(--foreground-muted)] flex items-center gap-1.5 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--logo-mongo-green)]" aria-hidden="true" />
                    Do Not Disturb · Asleep
                  </span>
                </div>
              </div>

              {/* Glowing OLED Clock Display */}
              <div className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] px-3.5 py-1.5 rounded-xl bg-[var(--background)] border border-[var(--border-color)] shadow-inner flex items-center gap-1 tabular-nums">
                <span>
                  {isMorning ? "7:02" : `${currentStepData.clockH}:${currentStepData.clockM}`}
                </span>
                <span className="text-xs text-[var(--primary)] ml-1">
                  {isMorning ? "AM" : currentStepData.clockAp}
                </span>
              </div>
            </div>

            {/* Middle Stage: The Photorealistic Smartphone Mockup Display */}
            <div className="relative my-8 sm:my-10 flex flex-col items-center justify-center z-10">
              {/* Phone Outer Chassis */}
              <div
                className={`relative w-full max-w-[340px] rounded-[2.5rem] bg-[var(--background)] border p-3 sm:p-4 shadow-sm transition-colors duration-200 ${
                  isFlash
                    ? "border-[var(--primary)]"
                    : "border-[var(--border-color)]"
                }`}
              >
                {/* Dynamic Screen Island */}
                <div className="w-20 h-4 bg-[var(--card-bg)] rounded-full mx-auto mb-3 flex items-center justify-center border border-[var(--border-color)]" aria-hidden="true">
                  <div className="w-2 h-2 rounded-full bg-[var(--foreground-muted)]/30" />
                </div>

                {/* Lock Screen Content */}
                <div className="min-h-[220px] flex flex-col justify-between">
                  {/* Lock Screen Time */}
                  <div className="text-center mb-4">
                    <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] tabular-nums">
                      {isMorning ? "7:02" : `${currentStepData.clockH}:${currentStepData.clockM}`}
                    </div>
                    <div className="text-xs text-[var(--foreground-muted)] mt-0.5">
                      {isMorning ? "Friday, June 12" : "Thursday Night"}
                    </div>
                  </div>

                  {/* Incoming Push Notification Banner */}
                  <AnimatePresence mode="wait">
                    {!isMorning ? (
                      <motion.div
                        key={currentStepData.id}
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className={`rounded-2xl p-3.5 border transition-colors duration-200 ${
                          isResolved[activeStep]
                            ? "bg-[var(--card-bg)] border-[var(--logo-politico-red)]/40 text-[var(--foreground)]"
                            : "bg-[var(--card-bg)] border-[var(--primary)]/40 text-[var(--foreground)] shadow-sm"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="flex items-center gap-1.5 font-semibold text-[var(--primary)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" aria-hidden="true" />
                            Website emergency form
                          </span>
                          <span className="text-[var(--foreground-muted)]">{currentStepData.time}</span>
                        </div>

                        <p className="text-xs text-[var(--foreground)] font-normal leading-relaxed line-clamp-2">
                          {currentStepData.message}
                        </p>

                        <div className="mt-2.5 pt-2 border-t border-[var(--grid-line)] flex items-center justify-between text-xs">
                          <span className="text-[var(--foreground-muted)]">Value: {currentStepData.lossAmount}</span>
                          <span
                            className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                              isResolved[activeStep]
                                ? "bg-[var(--logo-politico-red)]/15 text-[var(--logo-politico-red)] border border-[var(--logo-politico-red)]/30"
                                : "bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30"
                            }`}
                          >
                            {isResolved[activeStep] ? "Unanswered" : "3 tabs open"}
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="morning-wake"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-2xl p-4 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] text-center shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--border-color)] mx-auto flex items-center justify-center text-[var(--primary)] mb-2">
                          <Clock size={16} aria-hidden="true" />
                        </div>
                        <h4 className="text-xs font-semibold text-[var(--foreground)] mb-1">
                          Alarm Rings · 0 Missed Calls
                        </h4>
                        <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                          All 3 homeowners hired competitors hours ago. Your phone never rang because emergency visitors don&apos;t wait.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry: The Live Overnight Loss Gauge */}
            <div className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] z-10">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[var(--foreground-muted)] flex items-center gap-1.5">
                  <AlertTriangle size={13} className="text-[var(--logo-politico-red)]" aria-hidden="true" />
                  Estimated overnight revenue bleed:
                </span>
                <span className="font-semibold text-[var(--logo-politico-red)] text-sm tracking-tight">
                  {isMorning ? "-$10,400" : `-${currentStepData.cumulativeLoss}`}
                </span>
              </div>

              {/* Progress Bleed Bar */}
              <div className="w-full h-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-full overflow-hidden" aria-hidden="true">
                <div
                  className="h-full bg-[var(--logo-politico-red)] rounded-full transition-transform duration-300 origin-left"
                  style={{
                    transform: `scaleX(${
                      isMorning
                        ? 1
                        : activeStep === 0
                          ? 0.33
                          : activeStep === 1
                            ? 0.66
                            : 1
                    })`,
                  }}
                />
              </div>

              <p className="text-xs text-[var(--foreground-muted)] mt-2 leading-relaxed">
                {isMorning
                  ? "3 emergency jobs were up for grabs tonight. 0 booked. All went to competitors."
                  : `Job ${activeStep + 1} of 3 tonight. Homeowner waited 45 seconds before clicking competitor ad.`}
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE OVERNIGHT FEED ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[var(--foreground)] flex items-center gap-2 font-medium">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--logo-politico-red)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--logo-politico-red)]" />
                </span>
                Tonight&apos;s unanswered traffic flow
              </span>
              <span className="text-xs text-[var(--foreground-muted)]">3 high-intent visitors</span>
            </div>

            {/* Feed Cards */}
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {TIMELINE_STEPS.map((step, idx) => {
                const isCurrent = activeStep === idx;
                const isPast = activeStep > idx || isResolved[idx];
                const isGone = isResolved[idx] || activeStep > idx;

                return (
                  <div
                    key={step.id}
                    onClick={() => handleManualSelect(idx)}
                    className={`relative rounded-2xl p-5 border transition-colors duration-150 cursor-pointer overflow-hidden ${
                      isCurrent
                        ? "bg-[var(--card-bg)] border-[var(--primary)] shadow-sm"
                        : isPast
                          ? "bg-[var(--card-bg)]/60 border-[var(--border-color)] opacity-80 hover:opacity-100"
                          : "bg-[var(--card-bg)]/30 border-[var(--border-color)] opacity-40"
                    }`}
                  >
                    {/* Dynamic Impact Stamp */}
                    {isGone && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="text-xs font-semibold text-[var(--logo-politico-red)] border border-[var(--logo-politico-red)]/60 px-2 py-0.5 rounded-md bg-[var(--card-bg)] shadow-sm inline-block">
                          {step.stamp}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-lg bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center font-bold text-xs text-[var(--primary)] shadow-sm">
                          {step.tag.charAt(0)}
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-[var(--foreground)] tracking-wide">
                            {step.tag}
                          </div>
                          <div className="text-xs text-[var(--foreground-muted)]">
                            {step.time} · {step.tabsOpen} competitor tabs open
                          </div>
                        </div>
                      </div>

                      {!isGone && isCurrent && (
                        <span className="text-xs font-semibold text-[var(--primary)] bg-[var(--primary)]/15 border border-[var(--primary)]/30 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" aria-hidden="true" />
                          Waiting for reply
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed font-normal pl-9">
                      &ldquo;{step.message}&rdquo;
                    </p>

                    <div className="mt-3 pt-3 border-t border-[var(--grid-line)] flex items-center justify-between text-xs pl-9">
                      <span className="text-[var(--foreground-muted)]">
                        Estimated Value: <strong className="text-[var(--foreground)] font-semibold">{step.lossAmount}</strong>
                      </span>
                      <span className={isGone ? "text-[var(--logo-politico-red)] font-medium" : "text-[var(--foreground-muted)]"}>
                        {isGone ? step.competitor : "Awaiting first responder"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout Box */}
            <div className="p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-start gap-3 mt-2 shadow-sm">
              <Sparkles size={18} className="shrink-0 text-[var(--primary)] mt-0.5" aria-hidden="true" />
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                <strong className="text-[var(--foreground)] font-semibold">Speed to lead is everything after dark.</strong>{" "}
                Homeowners don&apos;t wait hours for a call back. CloseDesk responds in under 1 second, qualifies the issue, and books the emergency on your calendar while you sleep.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes twinkle { 
          0%, 100% { opacity: 0.15; transform: scale(0.8); } 
          50% { opacity: 0.65; transform: scale(1.05); } 
        }
      `,
        }}
      />
    </section>
  );
}
