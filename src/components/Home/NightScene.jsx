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
  CheckCircle2,
  XCircle,
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
  const [activeStep, setActiveStep] = useState(0); // 0, 1, 2, or 3 (7:02 AM)
  const [isResolved, setIsResolved] = useState([false, false, false]);
  const [isFlash, setIsFlash] = useState(false);
  const [stars, setStars] = useState([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Generate background constellation stars once on mount
  useEffect(() => {
    const starArray = Array.from({ length: 60 }).map((_, i) => ({
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
      timers.push(setTimeout(() => setIsFlash(false), 900));

      // Resolve step 0 after 3.2s
      timers.push(
        setTimeout(() => {
          setIsResolved((prev) => [true, false, false]);
        }, 3200),
      );

      // Step 1: 11:26 PM at t=4.5s
      timers.push(
        setTimeout(() => {
          setActiveStep(1);
          setIsFlash(true);
          setTimeout(() => setIsFlash(false), 900);
        }, 4500),
      );

      // Resolve step 1 after 7.5s
      timers.push(
        setTimeout(() => {
          setIsResolved((prev) => [true, true, false]);
        }, 7500),
      );

      // Step 2: 1:03 AM at t=8.8s
      timers.push(
        setTimeout(() => {
          setActiveStep(2);
          setIsFlash(true);
          setTimeout(() => setIsFlash(false), 900);
        }, 8800),
      );

      // Resolve step 2 after 11.8s
      timers.push(
        setTimeout(() => {
          setIsResolved((prev) => [true, true, true]);
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
      className="relative z-10 py-24 sm:py-32 bg-[#070312] text-[#f4f4f5] overflow-hidden transition-colors duration-500"
    >
      {/* ================= AMBIENT NOCTURNE BACKGROUND FX ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Deep Midnight Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#8a2be2]/18 via-[#3b126b]/10 to-transparent blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6366f1]/10 rounded-full blur-[150px] -z-10" />

        {/* Twinkling Starfield */}
        {stars.map((star) => (
          <i
            key={star.id}
            className="absolute rounded-full bg-white opacity-40"
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

        {/* Radial Nightstand Flare on Emergency Alarm */}
        <div
          className={`absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[var(--primary)]/25 to-[#ff4d4d]/15 blur-[120px] transition-opacity duration-700 pointer-events-none ${
            isFlash ? "opacity-100 scale-110" : "opacity-0 scale-95"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#c084fc] mb-6 backdrop-blur-md shadow-sm">
            <Moon size={14} className="text-[#c084fc] animate-[pulse_3s_ease-in-out_infinite]" />
            <span>The Overnight Blind Spot</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-balance">
            Your next customer isn&apos;t waiting until morning.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#818cf8]">
              And neither is your competitor.
            </span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed text-balance">
            He answered every call during the day. But when midnight pipes burst and heaters die, homeowners hire the first business that answers.
          </p>

          {/* Interactive Nocturnal Timeline Scrubber */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 pt-4">
            {TIMELINE_STEPS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => handleManualSelect(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 border ${
                  activeStep === idx
                    ? "bg-[#8a2be2]/25 border-[#c084fc] text-white shadow-[0_0_20px_rgba(192,132,252,0.3)] scale-105"
                    : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeStep === idx ? "bg-[#c084fc] animate-ping" : "bg-white/30"}`} />
                {s.time}
              </button>
            ))}

            <button
              onClick={() => handleManualSelect(3)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 border ${
                activeStep === 3
                  ? "bg-amber-500/25 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] scale-105"
                  : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <Clock size={12} />
              7:02 AM Wakeup
            </button>

            {!isAutoPlaying && (
              <button
                onClick={handleRestart}
                title="Restart autoplay"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors ml-1"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ================= MAIN DUAL-STAGE THEATER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ================= LEFT COLUMN: THE NOCTURNAL DEVICE (REPLACES CARTOON) ================= */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#13092b]/80 via-[#0e0620]/90 to-[#080214] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Corner Reflection */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#8a2be2]/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Top Stage Bar: Digital OLED Clock & Status */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c084fc] shadow-inner">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    Owner&apos;s Phone on Nightstand
                  </h3>
                  <span className="text-[11px] font-mono text-white/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Do Not Disturb · Asleep
                  </span>
                </div>
              </div>

              {/* Glowing OLED Clock Display */}
              <div className="font-mono text-2xl sm:text-3xl font-black text-white px-3.5 py-1.5 rounded-xl bg-black/60 border border-white/10 shadow-inner flex items-center gap-1 tabular-nums">
                <span className="text-white/90">
                  {isMorning ? "7:02" : `${currentStepData.clockH}:${currentStepData.clockM}`}
                </span>
                <span className="text-xs font-mono text-[#c084fc] ml-1">
                  {isMorning ? "AM" : currentStepData.clockAp}
                </span>
              </div>
            </div>

            {/* Middle Stage: The Photorealistic Smartphone Mockup Display */}
            <div className="relative my-8 sm:my-10 flex flex-col items-center justify-center z-10">
              {/* Phone Outer Chassis with Radiance Ring */}
              <div
                className={`relative w-full max-w-[340px] rounded-[2.5rem] bg-[#0b0318] border-2 border-white/15 p-3 sm:p-4 shadow-2xl transition-all duration-700 ${
                  isFlash
                    ? "shadow-[0_0_80px_rgba(168,85,247,0.5)] border-[#c084fc]/60 scale-[1.02]"
                    : "shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                }`}
              >
                {/* Dynamic Screen Island */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>

                {/* Lock Screen Content */}
                <div className="min-h-[220px] flex flex-col justify-between">
                  {/* Lock Screen Time */}
                  <div className="text-center mb-4">
                    <div className="text-4xl sm:text-5xl font-black tracking-tight text-white font-mono drop-shadow">
                      {isMorning ? "7:02" : `${currentStepData.clockH}:${currentStepData.clockM}`}
                    </div>
                    <div className="text-[11px] font-mono text-white/40 tracking-widest uppercase mt-0.5">
                      {isMorning ? "Friday, June 12" : "Thursday Night"}
                    </div>
                  </div>

                  {/* Incoming Push Notification Banner */}
                  <AnimatePresence mode="wait">
                    {!isMorning ? (
                      <motion.div
                        key={currentStepData.id}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.35 }}
                        className={`rounded-2xl p-3.5 border backdrop-blur-xl transition-all duration-500 ${
                          isResolved[activeStep]
                            ? "bg-red-950/40 border-red-500/30 text-white/90"
                            : "bg-white/10 border-[#c084fc]/50 text-white shadow-[0_0_25px_rgba(192,132,252,0.25)]"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                          <span className="flex items-center gap-1.5 font-bold text-[#c084fc]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-ping" />
                            WEBSITE EMERGENCY FORM
                          </span>
                          <span className="text-white/50">{currentStepData.time}</span>
                        </div>

                        <p className="text-xs text-white/95 font-medium leading-relaxed line-clamp-2">
                          {currentStepData.message}
                        </p>

                        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                          <span className="text-white/60">Value: {currentStepData.lossAmount}</span>
                          <span
                            className={`font-bold px-2 py-0.5 rounded ${
                              isResolved[activeStep]
                                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            }`}
                          >
                            {isResolved[activeStep] ? "❌ UNANSWERED" : "⏳ 3 Tabs Open"}
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="morning-wake"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-2xl p-4 bg-amber-500/10 border border-amber-500/30 text-white text-center"
                      >
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 mx-auto flex items-center justify-center text-amber-400 mb-2">
                          <Clock size={16} />
                        </div>
                        <h4 className="text-xs font-bold text-amber-300 mb-1">
                          Alarm Rings · 0 Missed Calls
                        </h4>
                        <p className="text-[11px] text-white/70 leading-relaxed">
                          All 3 homeowners hired competitors hours ago. Your phone never rang because emergency visitors don&apos;t wait.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry: The Live Overnight Loss Gauge */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 z-10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-white/60 flex items-center gap-1.5">
                  <AlertTriangle size={13} className="text-red-400" />
                  Estimated Overnight Revenue Bleed:
                </span>
                <span className="font-bold text-red-400 text-sm tracking-tight font-mono">
                  {isMorning ? "-$10,400" : `-${currentStepData.cumulativeLoss}`}
                </span>
              </div>

              {/* Progress Bleed Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-orange-500 to-red-500 rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: isMorning
                      ? "100%"
                      : activeStep === 0
                        ? "33%"
                        : activeStep === 1
                          ? "66%"
                          : "100%",
                  }}
                />
              </div>

              <p className="text-[11px] text-white/50 mt-2 leading-relaxed font-sans">
                {isMorning
                  ? "3 emergency jobs were up for grabs tonight. 0 booked. All went to competitors."
                  : `Job ${activeStep + 1} of 3 tonight. Homeowner waited 45 seconds before clicking competitor ad.`}
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE OVERNIGHT FEED ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs tracking-wider uppercase text-white/60 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                Tonight&apos;s Unanswered Traffic Flow
              </span>
              <span className="text-xs font-mono text-white/40">3 High-Intent Visitors</span>
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
                    className={`relative rounded-2xl p-5 border backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden ${
                      isCurrent
                        ? "bg-white/10 border-[#c084fc]/50 shadow-[0_10px_30px_rgba(192,132,252,0.15)] translate-x-1"
                        : isPast
                          ? "bg-white/[0.03] border-white/5 opacity-80 hover:opacity-100"
                          : "bg-white/[0.02] border-white/5 opacity-40"
                    }`}
                  >
                    {/* Dynamic Impact Stamp Slam */}
                    {isGone && (
                      <div className="absolute top-4 right-4 z-20 animate-in zoom-in-75 duration-300">
                        <span className="font-mono text-[10px] font-black tracking-widest text-red-400 border-2 border-red-500/70 px-2.5 py-1 rounded-md bg-[#0a0118]/90 shadow-[0_0_15px_rgba(239,68,68,0.4)] rotate-[-4deg] inline-block">
                          {step.stamp}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8a2be2] to-[#6366f1] flex items-center justify-center font-bold text-xs text-white shadow-sm">
                          {step.tag.charAt(0)}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide">
                            {step.tag}
                          </div>
                          <div className="text-[10px] font-mono text-white/50">
                            {step.time} · {step.tabsOpen} competitor tabs open
                          </div>
                        </div>
                      </div>

                      {!isGone && isCurrent && (
                        <span className="font-mono text-[10px] font-bold text-purple-300 bg-purple-500/20 border border-purple-500/30 px-2 py-0.5 rounded-full flex items-center gap-1.5 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          Waiting for reply
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] text-white/90 leading-relaxed font-medium pl-9">
                      &ldquo;{step.message}&rdquo;
                    </p>

                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono pl-9">
                      <span className="text-white/50">
                        Estimated Value: <strong className="text-white">{step.lossAmount}</strong>
                      </span>
                      <span className={isGone ? "text-red-400 font-semibold" : "text-white/40"}>
                        {isGone ? step.competitor : "Awaiting first responder"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 mt-2">
              <Sparkles size={18} className="shrink-0 text-[#c084fc] mt-0.5" />
              <p className="text-xs text-white/70 leading-relaxed">
                <strong className="text-white font-semibold">Speed to lead is everything after dark.</strong>{" "}
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
          50% { opacity: 0.85; transform: scale(1.1); } 
        }
      `,
        }}
      />
    </section>
  );
}
