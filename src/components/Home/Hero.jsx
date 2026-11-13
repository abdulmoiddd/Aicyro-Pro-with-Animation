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
        // Wait then cycle back
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

    const rect = interactionAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    phoneModelRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    phoneModelRef.current.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    if (!phoneModelRef.current) return;
    phoneModelRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    phoneModelRef.current.style.transition =
      "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)";
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
      className="relative min-h-[100svh] flex flex-col pt-24 lg:pt-32 bg-transparent text-[var(--foreground)] transition-colors duration-300 overflow-x-hidden"
      id="top"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center mt-4 mb-16 sm:mb-20 flex-1">
        {/* Left Column: Copy & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--card-bg)]/80 border border-[var(--border-color)] mb-5 hover:border-[var(--primary)]/40 transition-colors duration-300 shadow-sm cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse shadow-[0_0_8px_var(--primary)]"></span>
            <span className="text-[11px] font-bold text-[var(--foreground-muted)] uppercase tracking-wider font-mono">
              Founding 25 Launch Program — Now Open
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight mb-5 leading-[1.08] text-[var(--foreground)] text-balance"
          >
            Turn field-service <br className="hidden lg:block" /> website
            visitors into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent-blue)]">
              booked jobs, 24/7.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl font-medium mb-8 sm:mb-10 leading-relaxed text-balance px-2 sm:px-0"
          >
            CloseDesk by Aicyro is a done-for-you AI booking desk that responds
            to your website visitors instantly, qualifies urgent service
            requests, captures contact details, and books quote calls,
            inspections, and service visits{" "}
            <span className="text-[var(--foreground)] font-bold border-b border-[var(--primary)]/40">
              before they call a competitor.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onOpenPopup}
              className="relative group overflow-hidden flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:scale-105 active:scale-95 font-black rounded-xl transition-all duration-300 ease-out text-base sm:text-lg shadow-xl hover:shadow-[0_15px_30px_color-mix(in_srgb,var(--primary)_40%,transparent)]"
            >
              <span className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] transition-all duration-700 group-hover:left-[150%]" />
              <span className="relative z-10">Claim a Founding 25 Spot</span>
            </button>
            <button
              onClick={() => router.push("/free-website-audit")}
              className="flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-[var(--card-bg)]/80 hover:bg-[var(--card-bg)] text-[var(--foreground)] hover:text-[var(--primary)] font-bold rounded-xl border border-[var(--border-color)] hover:border-[var(--primary)]/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-base sm:text-lg shadow-sm"
            >
              Get a Free Website Lead Audit
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Stage (Interactive Mobile Phone Mockup) */}
        <div
          ref={interactionAreaRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 relative w-full h-[550px] sm:h-[650px] lg:h-[700px] flex items-center justify-center perspective-[1400px] mt-8 lg:mt-0"
        >
          {/* Subtle Ambient Float Wrapper */}
          <div className="animate-float-subtle w-full flex justify-center items-center h-full">
            {/* The 3D Rotating Model */}
            <div
              ref={phoneModelRef}
              className="relative w-[300px] sm:w-[320px] h-[600px] sm:h-[640px] transform-style-3d will-change-transform scale-90 sm:scale-100"
            >
              {/* Hardware Buttons */}
              <div className="absolute top-[100px] -left-[2.5px] w-[3px] h-[26px] bg-gradient-to-r from-[#333] to-[#555] rounded-l-md z-0 shadow-sm"></div>
              <div className="absolute top-[140px] -left-[2.5px] w-[3px] h-[50px] bg-gradient-to-r from-[#333] to-[#555] rounded-l-md z-0 shadow-sm"></div>
              <div className="absolute top-[205px] -left-[2.5px] w-[3px] h-[50px] bg-gradient-to-r from-[#333] to-[#555] rounded-l-md z-0 shadow-sm"></div>
              <div className="absolute top-[160px] -right-[2.5px] w-[3px] h-[70px] bg-gradient-to-l from-[#333] to-[#555] rounded-r-md z-0 shadow-sm"></div>

              {/* Phone Outer Metallic Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d1d1d6] via-[#f4f4f5] to-[#8e8e93] rounded-[3.2rem] sm:rounded-[3.7rem] p-[3px] sm:p-1 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] lg:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                {/* Phone Black Bezel */}
                <div className="relative w-full h-full bg-[#0b0219] rounded-[3rem] sm:rounded-[3.5rem] p-2 sm:p-[10px] overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                  {/* Inner Phone Screen */}
                  <div className="relative w-full h-full bg-[var(--card-bg)] rounded-[2.5rem] sm:rounded-[2.8rem] overflow-hidden flex flex-col transition-colors duration-300">
                    {/* Diagonal Glass Glare */}
                    <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-tr from-transparent via-[var(--foreground)]/5 to-transparent -translate-y-1/2 translate-x-1/4 rotate-45 pointer-events-none z-50"></div>

                    {/* Interactive Modern Dynamic Island */}
                    <div
                      onMouseEnter={() => setIsIslandHovered(true)}
                      onMouseLeave={() => setIsIslandHovered(false)}
                      className={`absolute top-2.5 left-1/2 -translate-x-1/2 h-[28px] bg-black rounded-full z-50 flex items-center px-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.2)] border border-white/10 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer ${
                        isIslandHovered ? "w-[130px]" : "w-[100px] justify-end"
                      }`}
                    >
                      {isIslandHovered && (
                        <div className="flex items-center gap-1.5 ml-1 mr-auto animate-pop-in">
                          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_4px_#22c55e]"></span>
                          <span className="text-[10px] text-white font-bold tracking-wide">
                            AI Active
                          </span>
                        </div>
                      )}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.3)] shrink-0"></div>
                    </div>

                    {/* Phone Status Bar */}
                    <div className="w-full pt-3.5 px-6 flex justify-between items-center text-[11px] font-semibold text-[var(--foreground)] z-40 bg-transparent pb-2 transition-colors duration-300">
                      <span className="tracking-wide">9:41</span>
                      <div className="flex gap-1.5 items-center">
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M2 22h20V2L2 22z" />
                        </svg>
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 3C6.95 3 2.15 4.79 -1.04 8.01l13.04 14.86 13.04-14.86C21.85 4.79 17.05 3 12 3zm0 2.22c4.15 0 8.04 1.48 11.08 3.99L12 18.17 1.05 9.1C4.09 6.59 7.98 5.22 12 5.22z" />
                        </svg>
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17 4h-3V2h-4v2H7v18h10V4zm-5 14h-2v-4H8l4-7v5h2l-4 6z" />
                        </svg>
                      </div>
                    </div>

                    {/* App Header with Replay Button */}
                    <div className="bg-[var(--card-bg)]/80 backdrop-blur-md border-b border-[var(--grid-line)] px-4 pb-3 flex items-center justify-between gap-3 relative z-30">
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-5 h-5 text-[var(--primary)] shrink-0 cursor-pointer hover:scale-110 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] p-[1px] shadow-sm shrink-0">
                          <div className="w-full h-full bg-[var(--card-bg)] rounded-full flex items-center justify-center font-bold text-[var(--foreground)] text-xs transition-colors duration-300">
                            CD
                          </div>
                        </div>
                        <div className="leading-tight cursor-default">
                          <h3 className="text-[13px] font-bold text-[var(--foreground)] tracking-wide flex items-center gap-1.5">
                            CloseDesk
                          </h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full shadow-[0_0_5px_#22c55e]"></span>
                            <span className="text-[9px] text-[var(--foreground-muted)] font-medium uppercase tracking-wider">
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
                            className="w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center hover:bg-[var(--primary)]/20 hover:rotate-180 transition-all duration-500 active:scale-90"
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
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
                          className="w-4 h-4 cursor-pointer hover:scale-110 active:scale-90 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
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
                        <span className="text-[10px] font-medium text-[var(--foreground-muted)] bg-[var(--border-color)]/50 px-2.5 py-1 rounded-md">
                          Today 11:42 PM
                        </span>
                      </div>

                      {messages.map((msg) => {
                        if (msg.type === "action") {
                          return (
                            <motion.div
                              key={msg.id}
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              className="self-center my-1 sm:my-2 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent-blue)]/10 border border-[var(--primary)]/20 px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default hover:scale-105 transition-transform duration-300 shadow-sm"
                            >
                              <svg
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--primary)]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-[10px] sm:text-xs font-bold text-[var(--primary)] uppercase tracking-widest">
                                {msg.text}
                              </span>
                            </motion.div>
                          );
                        }

                        return (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 12, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            className={`relative max-w-[85%] text-xs sm:text-[13px] py-2.5 px-3.5 shadow-sm cursor-default hover:scale-[1.02] transition-all duration-300 leading-snug ${
                              msg.type === "user"
                                ? "self-end bg-gradient-to-br from-[var(--foreground)] to-[var(--logo-base)] text-[var(--background)] rounded-2xl rounded-tr-sm origin-bottom-right hover:shadow-md"
                                : "self-start bg-[var(--card-bg)] border border-[var(--grid-line)] text-[var(--foreground)] rounded-2xl rounded-tl-sm origin-bottom-left hover:shadow-md"
                            }`}
                          >
                            {msg.text}
                          </motion.div>
                        );
                      })}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="self-start bg-[var(--card-bg)] border border-[var(--grid-line)] py-3 px-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5 w-14 shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-bounce"></span>
                          <span
                            className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-bounce"
                            style={{ animationDelay: "0.15s" }}
                          ></span>
                          <span
                            className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-bounce"
                            style={{ animationDelay: "0.3s" }}
                          ></span>
                        </motion.div>
                      )}
                    </div>

                    {/* Fake Interactive Text Input Area */}
                    <div className="absolute bottom-0 w-full bg-[var(--card-bg)]/90 backdrop-blur-md border-t border-[var(--grid-line)] z-30 flex flex-col pt-2.5 px-3 pb-8">
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-[var(--grid-line)] flex items-center justify-center shrink-0 text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors active:scale-90">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
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
                          onClick={() => setIsInputFocused(true)}
                          onBlur={() => setIsInputFocused(false)}
                          className={`flex-1 h-9 rounded-full bg-[var(--background)] px-3 flex items-center shadow-inner cursor-text transition-all duration-300 border outline-none ${
                            isInputFocused
                              ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20"
                              : "border-[var(--border-color)] hover:border-[var(--primary)]/50"
                          }`}
                        >
                          <span className="text-[11px] text-[var(--foreground-muted)]/70 flex items-center h-full mt-0.5">
                            {isInputFocused ? (
                              <span className="w-[1.5px] h-3.5 bg-[var(--primary)] animate-pulse inline-block mr-1"></span>
                            ) : (
                              "Message..."
                            )}
                          </span>
                        </div>

                        <button className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0 text-white shadow-md hover:bg-[var(--accent-blue)] transition-colors active:scale-90">
                          <svg
                            className="w-4 h-4 ml-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
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
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-[var(--foreground)]/30 rounded-full z-50 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating Lead Ticket Component */}
              <AnimatePresence>
                {showTicketPopup && (
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.85 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.85 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="absolute -right-6 sm:-right-20 bottom-20 sm:bottom-28 bg-[var(--card-bg)]/95 backdrop-blur-2xl border border-[var(--primary)]/40 p-4 sm:p-5 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] z-50 scale-90 sm:scale-100 origin-bottom-left w-64 sm:w-72 hover:shadow-[0_30px_60px_-15px_rgba(138,43,226,0.3)] hover:-translate-y-2 cursor-default"
                  >
                    <div className="flex justify-between items-center mb-3 pb-3 border-b border-[var(--grid-line)]">
                      <span className="text-[var(--foreground)] font-bold text-xs sm:text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-[var(--accent-blue)] rounded-full animate-pulse shadow-[0_0_8px_var(--accent-blue)]"></span>
                        Lead Captured
                      </span>
                      <span className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-[9px] sm:text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest shadow-sm">
                        URGENT
                      </span>
                    </div>

                    <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                      <div className="flex justify-between group">
                        <span className="text-[var(--foreground-muted)] text-[10px] sm:text-xs font-mono transition-colors group-hover:text-[var(--primary)]">
                          SERVICE
                        </span>
                        <span className="text-[var(--foreground)] font-medium text-right max-w-[130px] truncate">
                          Water damage
                        </span>
                      </div>
                      <div className="flex justify-between group">
                        <span className="text-[var(--foreground-muted)] text-[10px] sm:text-xs font-mono transition-colors group-hover:text-[var(--primary)]">
                          NAME
                        </span>
                        <span className="text-[var(--foreground)] font-medium text-right">
                          Dana R.
                        </span>
                      </div>
                      <div className="flex justify-between group">
                        <span className="text-[var(--foreground-muted)] text-[10px] sm:text-xs font-mono transition-colors group-hover:text-[var(--primary)]">
                          PHONE
                        </span>
                        <span className="text-[var(--foreground)] font-medium text-right">
                          (555) 014-2276
                        </span>
                      </div>
                      <div className="flex justify-between group">
                        <span className="text-[var(--foreground-muted)] text-[10px] sm:text-xs font-mono transition-colors group-hover:text-[var(--primary)]">
                          LOCATION
                        </span>
                        <span className="text-[var(--foreground)] font-medium text-right">
                          412 Maple Ct.
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[var(--grid-line)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full shadow-[0_0_6px_var(--primary)] animate-pulse"></span>
                      <span className="text-[var(--foreground)] text-[10px] sm:text-xs font-semibold">
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
        <div className="shrink-0 flex items-center md:border-r border-[var(--grid-line)] md:pr-6 mb-3 md:mb-0">
          <p className="text-[10px] sm:text-xs text-[var(--primary)] font-bold uppercase tracking-[0.2em] whitespace-nowrap font-mono">
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
                className="whitespace-nowrap px-4 py-2 rounded-full bg-[var(--foreground-muted)]/5 border border-[var(--border-color)] text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] hover:border-[var(--primary)]/30 hover:scale-105 transition-all cursor-default text-sm font-semibold tracking-wide"
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
        @keyframes pop-in { 0% { opacity: 0; transform: scale(0.8) translateY(15px); } 60% { transform: scale(1.02) translateY(-2px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-pop-in { animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes marquee-scroll { to { transform: translateX(-50%); } }
        .animate-marquee-scroll { animation: marquee-scroll 28s linear infinite; }
      `,
        }}
      />
    </section>
  );
}
