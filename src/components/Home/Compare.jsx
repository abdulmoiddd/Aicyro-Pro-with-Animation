"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones,
  Settings2,
  MoonStar,
  Zap,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Clock,
} from "lucide-react";

const comparisonData = {
  human: {
    id: "human",
    title: "Human Answering Service",
    icon: Headphones,
    storyCloseDesk:
      "Answers in < 1s, qualifies the emergency, and books the job immediately.",
    storyRival:
      "Lead is put on hold. Operator takes a generic message and tells them you'll call back tomorrow.",
    metrics: [
      {
        label: "Response speed",
        us: "Under a second, 24/7",
        them: "Hold times vary at night",
        win: true,
      },
      {
        label: "Qualifies the job",
        us: "Like a dispatcher: issue, urgency, location",
        them: "Takes a basic message, follows a generic script",
        win: true,
      },
      {
        label: "Books the job",
        us: "Creates the booking and notifies team instantly",
        them: "Usually relays a message for you to call back",
        win: true,
      },
      {
        label: "Setup effort for you",
        us: "None — done-for-you build & install",
        them: "Low — but you write and update the scripts",
        win: true,
      },
      {
        label: "Where it wins",
        us: "Website leads, after-hours demand",
        them: "Phone-first businesses (leads who only call)",
        win: "tie",
      },
    ],
  },
  diy: {
    id: "diy",
    title: "DIY Chat Widget",
    icon: Settings2,
    storyCloseDesk:
      "Proactively guides the visitor, captures details, and secures the booking.",
    storyRival:
      "Sits silently in the corner. If clicked, it asks for an email and promises a reply during business hours.",
    metrics: [
      {
        label: "Response speed",
        us: "Under a second, 24/7",
        them: "Instant — if you've configured it well",
        win: "tie",
      },
      {
        label: "Qualifies the job",
        us: "Like a dispatcher: issue, urgency, location",
        them: "Only as well as you script it yourself",
        win: true,
      },
      {
        label: "Books the job",
        us: "Creates the booking and notifies team instantly",
        them: "Rarely — most collect an email at best",
        win: true,
      },
      {
        label: "Setup effort for you",
        us: "None — done-for-you build & install",
        them: "High — you build, test, and babysit it forever",
        win: true,
      },
      {
        label: "Where it wins",
        us: "Website leads, after-hours demand",
        them: "Tinkerers with time and low-urgency services",
        win: true,
      },
    ],
  },
  nothing: {
    id: "nothing",
    title: "Do Nothing",
    icon: MoonStar,
    storyCloseDesk:
      "Turns a panicked late-night visitor into a confirmed job on your morning calendar.",
    storyRival:
      "The visitor sees you are closed, hits the 'Back' button, and hires the next company on Google.",
    metrics: [
      {
        label: "Response speed",
        us: "Under a second, 24/7",
        them: "Next business day, if the form gets read",
        win: true,
      },
      {
        label: "Qualifies the job",
        us: "Like a dispatcher: issue, urgency, location",
        them: "No",
        win: true,
      },
      {
        label: "Books the job",
        us: "Creates the booking and notifies team instantly",
        them: "No",
        win: true,
      },
      {
        label: "Setup effort for you",
        us: "None — done-for-you build & install",
        them: "None",
        win: "tie",
      },
      {
        label: "Where it wins",
        us: "Website leads, after-hours demand",
        them: "Businesses with more work than they can take",
        win: true,
      },
    ],
  },
};

export default function Compare() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("human");

  const activeData = comparisonData[activeTab];

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section
      id="compare"
      ref={sectionRef}
      className="relative z-10 py-20 sm:py-28 bg-[var(--background)] transition-colors duration-200 overflow-hidden"
    >
      <div className="max-w-[var(--container)] mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center max-w-[720px] mx-auto mb-16 transition-opacity transition-transform duration-500 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium text-[var(--foreground-muted)]">
              Compare your options
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-[var(--foreground)] leading-tight">
            CloseDesk vs. everything else you&apos;re considering.
          </h2>
          <p className="text-lg text-[var(--foreground-muted)]">
            You&apos;re comparing anyway. Here is the honest head-to-head reality of
            what happens when a lead lands on your site after hours.
          </p>
        </div>

        {/* Interactive Comparison Arena */}
        <div
          className={`transition-opacity transition-transform duration-500 ease-out delay-[100ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Interactive Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12" role="tablist" aria-label="Comparison options">
            {Object.values(comparisonData).map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex items-center gap-3 px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-colors duration-150 border cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 ${
                    isActive
                      ? "bg-[var(--card-bg)] border-[var(--primary)] text-[var(--foreground)] shadow-sm"
                      : "bg-transparent border-[var(--border-color)] text-[var(--foreground-muted)] hover:bg-[var(--card-bg)] hover:border-[var(--primary)]/50 hover:text-[var(--foreground)]"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      isActive ? "text-[var(--primary)]" : "text-[var(--foreground-muted)]"
                    }
                    aria-hidden="true"
                  />
                  {tab.title}
                  {isActive && (
                    <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-10 h-[2px] bg-[var(--primary)] rounded-t-full" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>

          {/* The VS Board */}
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[24px] shadow-sm overflow-hidden flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {/* Storytelling Outcome Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* CloseDesk Story */}
                  <div className="p-8 lg:p-10 bg-[var(--primary)]/5 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] relative">
                    <span className="inline-flex items-center gap-2 text-xs bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30 px-3 py-1 rounded-lg font-semibold mb-4">
                      <Zap size={14} aria-hidden="true" /> The CloseDesk Outcome
                    </span>
                    <p className="text-[1.05rem] font-medium text-[var(--foreground)] leading-relaxed">
                      <span className="text-xs text-[var(--foreground-muted)] bg-[var(--card-bg)] px-2 py-1 rounded mr-2 border border-[var(--border-color)] tabular-nums">
                        11:42 PM
                      </span>
                      {activeData.storyCloseDesk}
                    </p>
                  </div>

                  {/* Rival Story */}
                  <div className="p-8 lg:p-10 bg-[var(--card-bg)] border-b lg:border-b-0 border-[var(--border-color)] relative">
                    <span className="inline-flex items-center gap-2 text-xs bg-[var(--background)] text-[var(--foreground-muted)] border border-[var(--border-color)] px-3 py-1 rounded-lg font-semibold mb-4">
                      <Clock size={14} aria-hidden="true" /> With {activeData.title}
                    </span>
                    <p className="text-[1.05rem] text-[var(--foreground-muted)] leading-relaxed font-normal">
                      <span className="text-xs text-[var(--foreground-muted)] bg-[var(--background)] border border-[var(--border-color)] px-2 py-1 rounded mr-2 tabular-nums">
                        11:42 PM
                      </span>
                      {activeData.storyRival}
                    </p>
                  </div>
                </div>

                {/* Hard Metrics List */}
                <div className="flex flex-col bg-[var(--card-bg)]">
                  <div className="hidden lg:grid grid-cols-12 bg-[var(--background)] border-y border-[var(--border-color)] px-10 py-3.5 text-xs text-[var(--foreground-muted)] font-semibold">
                    <div className="col-span-3">Feature Metric</div>
                    <div className="col-span-4 text-[var(--primary)]">
                      CloseDesk
                    </div>
                    <div className="col-span-5 pl-8">{activeData.title}</div>
                  </div>

                  {activeData.metrics.map((metric, idx) => {
                    const isLast = idx === activeData.metrics.length - 1;
                    return (
                      <div
                        key={idx}
                        className={`grid grid-cols-1 lg:grid-cols-12 px-6 lg:px-10 py-5 gap-4 lg:gap-0 items-start hover:bg-[var(--background)]/60 transition-colors duration-150 ${
                          isLast ? "" : "border-b border-[var(--border-color)]"
                        }`}
                      >
                        {/* Metric Label */}
                        <div className="col-span-3 font-semibold text-[0.95rem] text-[var(--foreground)] flex items-center lg:items-start pt-1">
                          {metric.label}
                        </div>

                        {/* CloseDesk Value */}
                        <div className="col-span-4 flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-[var(--primary)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-[0.95rem] font-medium text-[var(--foreground)]">
                            {metric.us}
                          </span>
                        </div>

                        {/* Rival Value */}
                        <div className="col-span-5 flex items-start gap-3 lg:pl-8">
                          {metric.win === "tie" ? (
                            <AlertCircle
                              size={18}
                              className="text-[var(--foreground-muted)] shrink-0 mt-0.5 opacity-80"
                              aria-hidden="true"
                            />
                          ) : (
                            <XCircle
                              size={18}
                              className="text-[var(--foreground-muted)] shrink-0 mt-0.5 opacity-60"
                              aria-hidden="true"
                            />
                          )}
                          <span className="text-[0.95rem] text-[var(--foreground-muted)]">
                            {metric.them}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Caveat */}
        <div
          className={`max-w-[800px] mx-auto mt-12 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[16px] p-6 lg:p-8 text-center text-[0.96rem] text-[var(--foreground-muted)] transition-opacity transition-transform duration-500 ease-out delay-[200ms] shadow-sm ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <AlertCircle
            size={22}
            className="mx-auto mb-3 text-[var(--primary)] opacity-80"
            aria-hidden="true"
          />
          <strong className="text-[var(--foreground)] font-semibold block mb-1">
            The honest caveat:
          </strong>
          If most of your leads phone you directly and your website gets little
          traffic, a human answering service may serve you better than we can —
          and we&apos;ll tell you exactly that on an audit call. CloseDesk earns its
          keep where the leads land: on your website, usually after hours.
        </div>
      </div>
    </section>
  );
}
