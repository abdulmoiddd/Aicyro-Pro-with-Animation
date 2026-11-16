"use client";

import React from "react";
import { Clock, AlertTriangle, ShieldCheck } from "lucide-react";

const TIMELINE_STEPS = [
  {
    id: 1,
    time: "9:47 PM",
    tag: "Fort Worth · Water Damage",
    leadName: "Fort Worth Homeowner",
    message:
      "Water heater burst, there's water pouring everywhere. Can anyone come tonight??",
    lossAmount: "$3,400",
    stamp: "GONE — NO REPLY",
    competitor: "Hired competitor running 24/7 ads",
    tabsOpen: "3 competitor tabs open",
  },
  {
    id: 2,
    time: "11:26 PM",
    tag: "Arlington · Flooding",
    leadName: "Arlington Property Owner",
    message:
      "Basement flooding from storm drain, need emergency pump out ASAP. Are you open?",
    lossAmount: "$2,800",
    stamp: "HIRED SOMEONE ELSE",
    competitor: "Hired firm that answered in 18 seconds",
    tabsOpen: "4 competitor tabs open",
  },
  {
    id: 3,
    time: "1:03 AM",
    tag: "Fort Worth · HVAC Outage",
    leadName: "Fort Worth Family",
    message:
      "AC died and we have a newborn in the house. Please tell me someone's there to dispatch.",
    lossAmount: "$4,200",
    stamp: "GONE — NO REPLY",
    competitor: "Booked with 24/7 AI-equipped competitor",
    tabsOpen: "2 competitor tabs open",
  },
];

export default function NightScene() {
  return (
    <section
      id="night"
      className="relative z-10 pt-0 sm:pt-2 pb-20 sm:pb-28 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] mb-5 text-[var(--foreground)]">
            Your next customer isn&apos;t waiting until morning.
            <br />
            <span className="text-[var(--primary)]">
              And neither is your competitor.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
            He answered every call during the day. But when midnight pipes burst
            and heaters die, homeowners hire the first business that answers.
          </p>
        </div>

        {/* 3 Overnight Lead Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {TIMELINE_STEPS.map((step) => (
            <div
              key={step.id}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-[var(--primary)]/50 transition-colors duration-150"
            >
              <div>
                {/* Card Header: Clock Time & Status Stamp */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[var(--primary)] shrink-0" aria-hidden="true" />
                    <span className="text-xs font-semibold text-[var(--foreground)]">
                      {step.time}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[var(--logo-politico-red)] px-2 py-0.5 rounded border border-[var(--logo-politico-red)]/30 bg-[var(--logo-politico-red)]/10">
                    {step.stamp}
                  </span>
                </div>

                {/* Tag & Subheader */}
                <div className="text-xs font-semibold text-[var(--foreground)] mb-1">
                  {step.tag}
                </div>
                <div className="text-xs text-[var(--foreground-muted)] mb-3">
                  {step.tabsOpen}
                </div>

                {/* Customer Message */}
                <p className="text-sm text-[var(--foreground)] italic leading-relaxed mb-6">
                  &ldquo;{step.message}&rdquo;
                </p>
              </div>

              {/* Card Footer: Financial Impact */}
              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[var(--foreground-muted)] block text-[11px]">
                    Lost Ticket Value
                  </span>
                  <span className="text-base font-bold text-[var(--logo-politico-red)]">
                    {step.lossAmount}
                  </span>
                </div>
                <span className="text-[11px] text-[var(--foreground-muted)] text-right max-w-[140px] leading-snug">
                  {step.competitor}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Morning Contrast Summary Ledger */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Total Overnight Bleed */}
            <div className="lg:col-span-5 flex items-start gap-4 pb-6 lg:pb-0 lg:border-r border-[var(--border-color)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--logo-politico-red)]/10 border border-[var(--logo-politico-red)]/20 flex items-center justify-center shrink-0 text-[var(--logo-politico-red)]">
                <AlertTriangle size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs text-[var(--foreground-muted)] font-medium">
                  7:02 AM Wakeup · 0 Missed Calls
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--logo-politico-red)] tracking-tight my-0.5">
                  -$10,400 Lost Overnight
                </div>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  All 3 homeowners hired competitors hours ago. Your phone never rang because emergency visitors don&apos;t leave voicemails.
                </p>
              </div>
            </div>

            {/* Right: The CloseDesk Solution */}
            <div className="lg:col-span-7 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 text-[var(--primary)]">
                <ShieldCheck size={20} aria-hidden="true" />
              </div>
              <div>
                <strong className="text-sm font-semibold text-[var(--foreground)] block mb-1">
                  Speed to lead is everything after dark.
                </strong>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Homeowners don&apos;t wait hours for a call back. CloseDesk responds in under 1 second, qualifies the issue, and books the emergency on your calendar while you sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
