"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  ArrowRight,
  Sparkles,
  Zap,
  MapPin,
  Phone,
  CheckCircle2,
  Wrench,
  Flame,
  Droplets,
  ShieldCheck,
  Activity,
  RotateCcw,
  AlertTriangle,
  MessageSquare,
  FileText,
  ChevronRight,
} from "lucide-react";

const chatSequence = [
  {
    id: 1,
    type: "user",
    text: "Water is coming through my ceiling. Do you handle emergency water damage??",
    time: "11:42 PM",
    delay: 1000,
  },
  {
    id: 2,
    type: "ai",
    text: "Yes, we run 24/7 emergency crews. Is the water still actively leaking right now?",
    time: "11:42 PM",
    delay: 1600,
  },
  {
    id: 3,
    type: "user",
    text: "Yes, it's getting worse. 412 Maple Ct.",
    time: "11:43 PM",
    delay: 1400,
  },
  {
    id: 4,
    type: "ai",
    text: "Got it. Marking this urgent. What's the best phone number for our on-call tech to reach you at?",
    time: "11:43 PM",
    delay: 1800,
  },
  {
    id: 5,
    type: "user",
    text: "(512) 839-2041. Can someone call me right now?",
    time: "11:43 PM",
    delay: 1200,
  },
  {
    id: 6,
    type: "action",
    text: "Urgent Lead Captured and Dispatched",
    time: "11:43 PM",
    delay: 800,
  },
];

const INDUSTRIES_CONFIG = [
  { name: "HVAC", icon: Flame },
  { name: "Plumbing", icon: Droplets },
  { name: "Restoration", icon: ShieldCheck },
  { name: "Roofing", icon: Activity },
  { name: "Pest Control", icon: ShieldCheck },
  { name: "Electrical", icon: Zap },
  { name: "Water Mitigation", icon: Droplets },
  { name: "Appliance Repair", icon: Wrench },
];

export default function Hero({ onOpenPopup }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState("conversation"); // "conversation" | "ticket"
  const [isDispatched, setIsDispatched] = useState(false);
  const chatScrollRef = useRef(null);

  // Autonomous Chat Simulation Engine
  useEffect(() => {
    let timer;
    if (step < chatSequence.length) {
      const item = chatSequence[step];
      if (item.type === "ai") {
        setIsTyping(true);
        timer = setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [...prev, item]);
          setStep((s) => s + 1);
        }, item.delay);
      } else {
        timer = setTimeout(() => {
          if (item.type === "action") {
            setIsDispatched(true);
          }
          setMessages((prev) => [...prev, item]);
          setStep((s) => s + 1);
        }, item.delay);
      }
    } else {
      // Loop replay after pause
      timer = setTimeout(() => {
        handleReset();
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [step]);

  // Keep chat pinned to bottom
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleReset = () => {
    setMessages([]);
    setIsDispatched(false);
    setActiveTab("conversation");
    setStep(0);
  };

  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-32 pb-10 sm:pb-12 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 overflow-hidden"
    >
      <div className="max-w-[var(--container)] mx-auto px-6 relative z-10">
        
        {/* Main Stage Grid: Columns 1-6 Left Pitch & Columns 7-12 Right Unified Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-center mb-12 sm:mb-16">
          
          {/* ================= LEFT COLUMN (Columns 1-6) ================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10 min-w-0 xl:pr-4">
            
            {/* Program Launch Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              <span className="text-xs font-semibold text-[var(--foreground)]">
                Founding 25 Launch Program: Now Open
              </span>
            </div>

            {/* Headline Announces Itself */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[var(--foreground)] leading-[1.07] mb-6 text-balance break-words min-w-0">
              Turn field-service website visitors into{" "}
              <span className="text-[var(--primary)]">
                booked jobs, 24/7.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-lg leading-relaxed mb-8 text-pretty">
              CloseDesk by Aicyro is a done-for-you AI booking desk that responds
              to your website visitors instantly, qualifies urgent service
              requests, captures contact details, and books quote calls,
              inspections, and service visits{" "}
              <strong className="text-[var(--foreground)] font-semibold">
                before they call a competitor.
              </strong>
            </p>

            {/* Primary & Secondary Actions kept firmly in one single line */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 w-full mb-10 flex-nowrap overflow-visible">
              <button
                onClick={onOpenPopup}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-3 sm:py-3.5 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--color-accent-ink)] font-bold rounded-xl shadow-xs transition-colors duration-150 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 text-xs sm:text-sm md:text-base cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap shrink-0"
              >
                <span>Claim a Founding 25 Spot</span>
                <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
              </button>

              <button
                onClick={() => router.push("/free-website-audit")}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4.5 py-3 sm:py-3.5 bg-[var(--card-bg)] hover:bg-[var(--background)] text-[var(--foreground)] font-semibold rounded-xl border border-[var(--border-color)] hover:border-[var(--primary)]/60 transition-colors duration-150 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 text-xs sm:text-sm md:text-base cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 disabled:pointer-events-none shadow-2xs whitespace-nowrap shrink-0"
              >
                <Sparkles size={15} className="text-[var(--primary)] shrink-0" aria-hidden="true" />
                <span>Get a Free Website Lead Audit</span>
              </button>
            </div>

            {/* Editorial Figures Row Parted by Hairlines */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--border-color)] w-full max-w-lg">
              <div className="pr-4 border-r border-[var(--border-color)]">
                <div className="text-2xl font-bold text-[var(--foreground)] tracking-tight tabular-nums">
                  &lt; 1.2s
                </div>
                <div className="text-xs text-[var(--foreground-muted)] font-medium mt-0.5">
                  Response speed
                </div>
              </div>

              <div className="pr-4 border-r border-[var(--border-color)]">
                <div className="text-2xl font-bold text-[var(--foreground)] tracking-tight tabular-nums">
                  24/7/365
                </div>
                <div className="text-xs text-[var(--foreground-muted)] font-medium mt-0.5">
                  After-hours live
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-[var(--primary)] tracking-tight tabular-nums">
                  $0
                </div>
                <div className="text-xs text-[var(--foreground-muted)] font-medium mt-0.5">
                  Build fee waived
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (Columns 7-12): UNIFIED DISPATCH CONSOLE ================= */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 w-full min-w-0">
            <div className="rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm overflow-hidden flex flex-col h-[520px]">
              
              {/* Console Masthead */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-[var(--border-color)] bg-[var(--card-bg)]">
                {/* Console Brand & Live Telemetry */}
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--logo-mongo-green)] motion-safe:animate-pulse" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-bold text-[var(--foreground)] block leading-tight">
                      CloseDesk Dispatch Console
                    </span>
                    <span className="text-[11px] text-[var(--foreground-muted)] block">
                      Autonomous emergency triage
                    </span>
                  </div>
                </div>

                {/* Console View Switcher & Replay */}
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center p-1 rounded-xl bg-[var(--background)] border border-[var(--border-color)]">
                    <button
                      onClick={() => setActiveTab("conversation")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                        activeTab === "conversation"
                          ? "bg-[var(--card-bg)] text-[var(--foreground)] shadow-2xs"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      <MessageSquare size={13} aria-hidden="true" />
                      <span>Live Stream</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("ticket")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                        activeTab === "ticket"
                          ? "bg-[var(--card-bg)] text-[var(--foreground)] shadow-2xs"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      <FileText size={13} aria-hidden="true" />
                      <span>Tech Voucher</span>
                      {isDispatched && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" aria-hidden="true" />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={handleReset}
                    aria-label="Replay simulation"
                    title="Replay sequence"
                    className="p-2 rounded-xl text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)] border border-transparent hover:border-[var(--border-color)] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--primary)] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <RotateCcw size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Console Body: Live Conversation Stream */}
              {activeTab === "conversation" && (
                <div ref={chatScrollRef} className="flex-1 p-5 overflow-y-auto space-y-3.5 bg-[var(--card-bg)]">
                  {messages.map((m) => {
                    if (m.type === "action") {
                      return (
                        <div
                          key={m.id}
                          className="p-4 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-left text-xs font-semibold text-[var(--foreground)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs"
                        >
                          <div className="flex items-center gap-2 text-[var(--primary)] font-bold">
                            <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0" aria-hidden="true" />
                            <span>{m.text}: Calendar Synced</span>
                          </div>
                          <button
                            onClick={() => setActiveTab("ticket")}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--color-accent-ink)] font-bold text-[11px] cursor-pointer transition-colors duration-150 shadow-2xs"
                          >
                            <span>Inspect Ticket</span>
                            <ChevronRight size={12} aria-hidden="true" />
                          </button>
                        </div>
                      );
                    }
                    const isAi = m.type === "ai";
                    return (
                      <div
                        key={m.id}
                        className={`flex flex-col ${isAi ? "items-start" : "items-end"}`}
                      >
                        <div className="flex items-center gap-2 mb-1 px-1 text-[11px] text-[var(--foreground-muted)]">
                          <span className="font-semibold text-[var(--foreground)]">
                            {isAi ? "CloseDesk AI Desk" : "Homeowner"}
                          </span>
                          <span className="tabular-nums">{m.time}</span>
                        </div>
                        <div
                          className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                            isAi
                              ? "bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] rounded-tl-sm shadow-2xs"
                              : "bg-[var(--primary)] text-[var(--color-accent-ink)] font-medium rounded-tr-sm shadow-2xs"
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    );
                  })}

                  {isTyping && (
                    <div className="flex items-center gap-1.5 p-3 rounded-2xl rounded-tl-sm bg-[var(--background)] border border-[var(--border-color)] w-16 shadow-2xs">
                      <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full motion-safe:animate-pulse" />
                      <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full motion-safe:animate-pulse [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full motion-safe:animate-pulse [animation-delay:0.4s]" />
                    </div>
                  )}
                </div>
              )}

              {/* Console Body: Synchronized Technician Dispatch Voucher */}
              {activeTab === "ticket" && (
                <div className="flex-1 p-6 overflow-y-auto bg-[var(--card-bg)] flex flex-col justify-between">
                  <div>
                    {/* Header: Priority and Dispatch Timestamp */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border-color)]">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--logo-politico-red)]/10 text-[var(--logo-politico-red)] text-xs font-bold">
                          <AlertTriangle size={13} aria-hidden="true" />
                          <span>Priority 1 Emergency Ticket</span>
                        </span>
                      </div>
                      <span className="text-xs text-[var(--foreground-muted)] font-medium tabular-nums">
                        Dispatched 11:43:12 PM
                      </span>
                    </div>

                    {/* Work Order Incident Dossier */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-[11px] font-semibold text-[var(--foreground-muted)] block mb-1">
                          Reported Incident
                        </span>
                        <p className="text-sm font-bold text-[var(--foreground)] leading-snug">
                          Water leaking actively through ceiling, spreading rapidly
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border-color)]">
                          <span className="text-[11px] text-[var(--foreground-muted)] block mb-1">
                            Service Location
                          </span>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--foreground)]">
                            <MapPin size={13} className="text-[var(--primary)] shrink-0" aria-hidden="true" />
                            <span>412 Maple Ct.</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border-color)]">
                          <span className="text-[11px] text-[var(--foreground-muted)] block mb-1">
                            Caller Contact
                          </span>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--foreground)]">
                            <Phone size={13} className="text-[var(--primary)] shrink-0" aria-hidden="true" />
                            <span>(512) 839-2041</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-[var(--foreground-muted)] block">
                            Estimated Job Value
                          </span>
                          <span className="text-base font-bold text-[var(--primary)] tabular-nums">
                            $1,250 to $3,500
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] text-[var(--foreground-muted)] block">
                            Triage Time
                          </span>
                          <span className="text-xs font-bold text-[var(--foreground)] tabular-nums">
                            &lt; 1.2s instant hold
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technician Calendar Push Status */}
                  <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                    <span className="text-[var(--primary)] font-bold flex items-center gap-1.5">
                      <CheckCircle2 size={14} aria-hidden="true" />
                      <span>On-Call Tech Notified via SMS and Calendar</span>
                    </span>
                    <button
                      onClick={() => setActiveTab("conversation")}
                      className="text-xs font-semibold text-[var(--foreground-muted)] hover:text-[var(--foreground)] underline cursor-pointer"
                    >
                      View Live Stream
                    </button>
                  </div>
                </div>
              )}

              {/* Console Command Footer */}
              <div className="px-5 py-3.5 border-t border-[var(--border-color)] bg-[var(--background)]/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--logo-mongo-green)]" aria-hidden="true" />
                  <span className="text-xs text-[var(--foreground-muted)] font-medium">
                    24/7 AI Engine: Emergency response speed &lt; 1.2s
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="px-3.5 py-1.5 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--color-accent-ink)] rounded-xl text-xs font-bold cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--primary)] disabled:opacity-50 disabled:pointer-events-none shadow-2xs whitespace-nowrap"
                >
                  Simulate Urgent Lead
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ================= FULL-WIDTH TRADE CATEGORY BELT ================= */}
        {/* Full-width container strip below the 12-column grid: impossible to collide with buttons */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold text-[var(--foreground-muted)] shrink-0">
            Custom engineered for high-urgency field service trades:
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {INDUSTRIES_CONFIG.map(({ name, icon: IconComponent }) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--background)] hover:border-[var(--primary)]/50 text-xs font-semibold text-[var(--foreground)] shadow-2xs transition-colors duration-150 cursor-default inline-flex items-center gap-1.5"
              >
                <IconComponent size={13} className="text-[var(--primary)] shrink-0" aria-hidden="true" />
                <span>{name}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
