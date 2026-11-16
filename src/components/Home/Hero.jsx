"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const chatSequence = [
  {
    id: 1,
    type: "user",
    text: "Water is coming through my ceiling. Do you handle emergency water damage??",
    delay: 1000,
  },
  {
    id: 2,
    type: "ai",
    text: "Yes — we run 24/7 emergency crews. Is the water still actively leaking right now?",
    delay: 1800,
  },
  {
    id: 3,
    type: "user",
    text: "Yes, it's getting worse. 412 Maple Ct.",
    delay: 1500,
  },
  {
    id: 4,
    type: "ai",
    text: "Got it — marking this urgent. What's the best phone number for our on-call tech to reach you at?",
    delay: 2000,
  },
  { id: 5, type: "action", text: "Urgent Lead Captured", delay: 800 },
];

export default function Hero({ onOpenPopup }) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);
  const [showTicketPopup, setShowTicketPopup] = useState(false);

  // Interactive UI states
  const [isIslandHovered, setIsIslandHovered] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const chatContainerRef = useRef(null);
  const interactionAreaRef = useRef(null);
  const phoneModelRef = useRef(null);
  const router = useRouter();

  // Scroll to bottom of chat smoothly
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  // Chat Sequence Engine
  useEffect(() => {
    let timeoutId;
    if (step === 0) setShowTicketPopup(false);

    if (step < chatSequence.length) {
      const nextMessage = chatSequence[step];
      if (nextMessage.type === "ai") {
        setIsTyping(true);
        timeoutId = setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setMessages((prev) => [...prev, nextMessage]);
            setStep((prev) => prev + 1);
          }, 150);
        }, nextMessage.delay);
      } else {
        timeoutId = setTimeout(() => {
          setMessages((prev) => [...prev, nextMessage]);
          setStep((prev) => prev + 1);
        }, nextMessage.delay);
      }
    } else {
      setShowTicketPopup(true);
      timeoutId = setTimeout(() => {
        setMessages([]);
        setStep(0);
      }, 7000);
    }
    return () => clearTimeout(timeoutId);
  }, [step]);

  // Replay Function
  const handleReplay = () => {
    setMessages([]);
    setStep(0);
    setShowTicketPopup(false);
    setIsTyping(false);
  };

  // 3D Cursor Interaction Logic
  const handleMouseMove = (e) => {
    if (!interactionAreaRef.current || !phoneModelRef.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = interactionAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    phoneModelRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    phoneModelRef.current.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    if (!phoneModelRef.current) return;
    phoneModelRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    phoneModelRef.current.style.transition = "transform 0.5s ease-out";
  };

  const industries = [
    "HVAC",
    "Plumbing",
    "Restoration",
    "Roofing",
    "Pest Control",
    "Electrical",
    "Water Mitigation",
    "Appliance Repair",
  ];
  const marqueeIndustries = [
    ...industries,
    ...industries,
    ...industries,
  ];

  return (
    <section
      className="relative min-h-[100svh] flex flex-col pt-24 lg:pt-32 bg-transparent text-[var(--foreground)] transition-colors duration-200 overflow-x-hidden"
      id="top"
    >
      <div className="relative w-full max-w-[var(--container)] mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center mt-4 mb-16 sm:mb-20 flex-1">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-5 cursor-default shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium text-[var(--foreground-muted)]">
              Founding 25 Launch Program — Now Open
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight mb-5 leading-[1.08] text-[var(--foreground)] text-balance">
            Turn field-service <br className="hidden lg:block" /> website
            visitors into{" "}
            <span className="text-[var(--primary)]">
              booked jobs, 24/7.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl font-normal mb-8 sm:mb-10 leading-relaxed text-balance px-2 sm:px-0">
            CloseDesk by Aicyro is a done-for-you AI booking desk that responds
            to your website visitors instantly, qualifies urgent service
            requests, captures contact details, and books quote calls,
            inspections, and service visits{" "}
            <span className="text-[var(--foreground)] font-semibold border-b border-[var(--border-color)]">
              before they call a competitor.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button
              onClick={onOpenPopup}
              className="flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--color-accent-ink)] font-bold rounded-xl transition-colors duration-150 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 text-base sm:text-lg shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 cursor-pointer"
            >
              Claim a Founding 25 Spot
            </button>
            <button
              onClick={() => router.push("/free-website-audit")}
              className="flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-[var(--card-bg)] hover:bg-[var(--background)] text-[var(--foreground)] font-semibold rounded-xl border border-[var(--border-color)] hover:border-[var(--primary)]/50 transition-colors duration-150 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 text-base sm:text-lg shadow-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 cursor-pointer"
            >
              <span className="whitespace-nowrap">Get a Free Website Lead Audit</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Stage (Interactive Mobile Phone Mockup) */}
        <div
          ref={interactionAreaRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 relative w-full h-[550px] sm:h-[650px] lg:h-[700px] flex items-center justify-center perspective-[1400px] mt-8 lg:mt-0"
        >
          {/* Subtle Ambient Float Wrapper */}
          <div className="w-full flex justify-center items-center h-full">
            {/* The 3D Rotating Model */}
            <div
              ref={phoneModelRef}
              className="relative w-[300px] sm:w-[320px] h-[600px] sm:h-[640px] transform-style-3d will-change-transform scale-90 sm:scale-100"
            >
              {/* Hardware Buttons */}
              <div className="absolute top-[100px] -left-[2.5px] w-[3px] h-[26px] bg-[var(--foreground-muted)]/40 rounded-l-md z-0 shadow-sm" aria-hidden="true" />
              <div className="absolute top-[140px] -left-[2.5px] w-[3px] h-[50px] bg-[var(--foreground-muted)]/40 rounded-l-md z-0 shadow-sm" aria-hidden="true" />
              <div className="absolute top-[205px] -left-[2.5px] w-[3px] h-[50px] bg-[var(--foreground-muted)]/40 rounded-l-md z-0 shadow-sm" aria-hidden="true" />
              <div className="absolute top-[160px] -right-[2.5px] w-[3px] h-[70px] bg-[var(--foreground-muted)]/40 rounded-r-md z-0 shadow-sm" aria-hidden="true" />

              {/* Phone Outer Metallic Frame */}
              <div className="absolute inset-0 bg-[var(--card-bg)] rounded-[3.2rem] sm:rounded-[3.7rem] p-[3px] sm:p-1 border border-[var(--border-color)]">
                {/* Phone Black Bezel */}
                <div className="relative w-full h-full bg-[var(--background)] rounded-[3rem] sm:rounded-[3.5rem] p-2 sm:p-[10px] overflow-hidden">
                  {/* Inner Phone Screen */}
                  <div className="relative w-full h-full bg-[var(--card-bg)] rounded-[2.5rem] sm:rounded-[2.8rem] overflow-hidden flex flex-col transition-colors duration-200">
                    {/* Interactive Modern Dynamic Island */}
                    <div
                      onMouseEnter={() => setIsIslandHovered(true)}
                      onMouseLeave={() => setIsIslandHovered(false)}
                      className={`absolute top-2.5 left-1/2 -translate-x-1/2 h-[28px] bg-[var(--foreground)] rounded-full z-50 flex items-center px-2.5 overflow-hidden motion-safe:transition-transform duration-200 ease-out cursor-pointer ${
                        isIslandHovered ? "w-[130px] scale-105" : "w-[100px] justify-end scale-100"
                      }`}
                    >
                      {isIslandHovered && (
                        <div className="flex items-center gap-1.5 ml-1 mr-auto">
                          <span className="w-1.5 h-1.5 bg-[var(--logo-mongo-green)] rounded-full animate-pulse" aria-hidden="true" />
                          <span className="text-[10px] text-[var(--background)] font-semibold">
                            AI Active
                          </span>
                        </div>
                      )}
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--background)] shrink-0" aria-hidden="true" />
                    </div>

                    {/* Phone Status Bar */}
                    <div className="w-full pt-3.5 px-6 flex justify-between items-center text-[11px] font-medium text-[var(--foreground)] z-40 bg-transparent pb-2 transition-colors duration-200">
                      <span className="tracking-wide">9:41</span>
                      <div className="flex gap-1.5 items-center" aria-hidden="true">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M2 22h20V2L2 22z" />
                        </svg>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 3C6.95 3 2.15 4.79 -1.04 8.01l13.04 14.86 13.04-14.86C21.85 4.79 17.05 3 12 3zm0 2.22c4.15 0 8.04 1.48 11.08 3.99L12 18.17 1.05 9.1C4.09 6.59 7.98 5.22 12 5.22z" />
                        </svg>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17 4h-3V2h-4v2H7v18h10V4zm-5 14h-2v-4H8l4-7v5h2l-4 6z" />
                        </svg>
                      </div>
                    </div>

                    {/* App Header with Replay Button */}
                    <div className="bg-[var(--card-bg)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-4 pb-3 flex items-center justify-between gap-3 relative z-30">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 p-[1px] shadow-sm shrink-0">
                          <div className="w-full h-full bg-[var(--card-bg)] rounded-full flex items-center justify-center font-bold text-[var(--foreground)] text-xs">
                            CD
                          </div>
                        </div>
                        <div className="leading-tight cursor-default">
                          <h3 className="text-xs font-semibold text-[var(--foreground)] flex items-center gap-1.5">
                            CloseDesk
                          </h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-[var(--logo-mongo-green)] rounded-full" aria-hidden="true" />
                            <span className="text-[10px] text-[var(--foreground-muted)] font-normal">
                              Online
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Action Icons */}
                      <div className="flex items-center gap-3 text-[var(--primary)]">
                        {step > 0 && (
                          <button
                            onClick={handleReplay}
                            title="Replay Sequence"
                            aria-label="Replay chat sequence"
                            className="w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center hover:bg-[var(--primary)]/20 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] cursor-pointer"
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>
                          </button>
                        )}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Chat Messages Area */}
                    <div
                      ref={chatContainerRef}
                      className="flex-1 p-4 overflow-y-auto flex flex-col gap-3.5 hide-scrollbar bg-[var(--background)] relative z-10 pb-20"
                    >
                      <div className="text-center mb-2">
                        <span className="text-[10px] font-normal text-[var(--foreground-muted)] bg-[var(--card-bg)] border border-[var(--border-color)] px-2.5 py-1 rounded-md">
                          Today 11:42 PM
                        </span>
                      </div>

                      {messages.map((msg) => {
                        if (msg.type === "action") {
                          return (
                            <motion.div
                              key={msg.id}
                              initial={{ opacity: 0, scale: 0.95, y: 8 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="self-center my-1 sm:my-2 bg-[var(--primary)]/10 border border-[var(--primary)]/20 px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default shadow-sm"
                            >
                              <svg
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--primary)]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-xs font-semibold text-[var(--primary)]">
                                {msg.text}
                              </span>
                            </motion.div>
                          );
                        }

                        return (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`relative max-w-[85%] text-xs sm:text-[13px] py-2.5 px-3.5 shadow-sm cursor-default leading-snug rounded-xl ${
                              msg.type === "user"
                                ? "self-end bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[var(--foreground)]"
                                : "self-start bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)]"
                            }`}
                          >
                            {msg.text}
                          </motion.div>
                        );
                      })}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="self-start bg-[var(--card-bg)] border border-[var(--border-color)] py-2.5 px-3.5 rounded-xl flex items-center gap-1.5 w-14 shadow-sm">
                          <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" />
                          <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse delay-75" />
                          <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse delay-150" />
                        </div>
                      )}
                    </div>

                    {/* Fake Interactive Text Input Area */}
                    <div className="absolute bottom-0 w-full bg-[var(--card-bg)]/95 backdrop-blur-md border-t border-[var(--border-color)] z-30 flex flex-col pt-2.5 px-3 pb-8">
                      <div className="flex items-center gap-2">
                        <button
                          aria-label="Add attachment"
                          className="w-8 h-8 rounded-full bg-[var(--background)] flex items-center justify-center shrink-0 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] cursor-pointer"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>

                        {/* Interactive Input Box */}
                        <div
                          tabIndex={0}
                          role="textbox"
                          aria-label="Mock message input"
                          onClick={() => setIsInputFocused(true)}
                          onBlur={() => setIsInputFocused(false)}
                          className={`flex-1 h-9 rounded-full bg-[var(--background)] px-3 flex items-center cursor-text transition-colors duration-150 border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${
                            isInputFocused
                              ? "border-[var(--primary)]"
                              : "border-[var(--border-color)] hover:border-[var(--primary)]/50"
                          }`}
                        >
                          <span className="text-xs text-[var(--foreground-muted)] flex items-center h-full">
                            {isInputFocused ? (
                              <span className="w-[1.5px] h-3.5 bg-[var(--primary)] animate-pulse inline-block mr-1" />
                            ) : (
                              "Message..."
                            )}
                          </span>
                        </div>

                        <button
                          aria-label="Send message"
                          className="w-8 h-8 rounded-full bg-[var(--primary)] hover:bg-[var(--secondary)] flex items-center justify-center shrink-0 text-[var(--color-accent-ink)] shadow-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] cursor-pointer"
                        >
                          <svg
                            className="w-4 h-4 ml-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h14M12 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-[var(--foreground)]/20 rounded-full z-50" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Floating Lead Ticket Component */}
              <AnimatePresence>
                {showTicketPopup && (
                  <motion.div
                    initial={{ opacity: 0, x: 16, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 16, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="absolute -right-4 sm:-right-16 bottom-20 sm:bottom-28 bg-[var(--card-bg)] border border-[var(--primary)]/40 p-4 sm:p-5 rounded-2xl shadow-md z-50 scale-90 sm:scale-100 origin-bottom-left w-64 sm:w-72 cursor-default"
                  >
                    <div className="flex justify-between items-center mb-3 pb-3 border-b border-[var(--border-color)]">
                      <span className="text-[var(--foreground)] font-semibold text-xs sm:text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" aria-hidden="true" />
                        Lead Captured
                      </span>
                      <span className="bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[var(--primary)] text-[10px] font-semibold px-2 py-0.5 rounded">
                        Urgent
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[var(--foreground-muted)] text-xs">
                          Service
                        </span>
                        <span className="text-[var(--foreground)] font-medium text-right max-w-[130px] truncate">
                          Water damage
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--foreground-muted)] text-xs">
                          Name
                        </span>
                        <span className="text-[var(--foreground)] font-medium text-right">
                          Dana R.
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--foreground-muted)] text-xs">
                          Phone
                        </span>
                        <span className="text-[var(--foreground)] font-medium text-right">
                          (555) 014-2276
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--foreground-muted)] text-xs">
                          Location
                        </span>
                        <span className="text-[var(--foreground)] font-medium text-right">
                          412 Maple Ct.
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" aria-hidden="true" />
                      <span className="text-[var(--foreground-muted)] text-xs font-normal">
                        Team notified · Logged in Pulse
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar (Full Width Solid Bar with Marquee) */}
      <div className="relative z-10 w-full bg-[var(--card-bg)]/80 backdrop-blur-md border-y border-[var(--border-color)] py-4 sm:py-5 flex flex-col md:flex-row items-center px-4 sm:px-8 mt-auto shadow-sm">
        <div className="shrink-0 flex items-center md:border-r border-[var(--border-color)] md:pr-6 mb-3 md:mb-0">
          <p className="text-xs text-[var(--primary)] font-semibold whitespace-nowrap">
            Built for field-service businesses
          </p>
        </div>

        <div
          className="w-full flex overflow-hidden flex-1 md:pl-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="flex gap-3 sm:gap-4 w-max animate-marquee-scroll hover:[animation-play-state:paused] py-1 items-center">
            {marqueeIndustries.map((industry, index) => (
              <div
                key={`${industry}-${index}`}
                className="whitespace-nowrap px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/40 transition-colors duration-150 cursor-default text-sm font-medium"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes marquee-scroll { to { transform: translateX(-50%); } }
        .animate-marquee-scroll { animation: marquee-scroll 28s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-scroll { animation: none; }
        }
      `,
        }}
      />
    </section>
  );
}
