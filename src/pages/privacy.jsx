// src/pages/privacy.jsx
"use client";

import React from "react";
import Seo from "../components/Essential/Seo";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";
import { ShieldCheck, Lock, ExternalLink } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "about", title: "1. About Us" },
    { id: "collect", title: "2. Information We Collect" },
    { id: "use", title: "3. How We Use Information" },
    { id: "basis", title: "4. Legal Basis for Processing" },
    { id: "cookies", title: "5. Cookies and Tracking" },
    { id: "third-party", title: "6. Third-Party Services" },
    { id: "transfers", title: "7. International Data Transfers" },
    { id: "sharing", title: "8. Data Sharing and Disclosure" },
    { id: "retention", title: "9. Data Retention" },
    { id: "security", title: "10. Data Security" },
    { id: "rights", title: "11. Your Privacy Rights" },
    { id: "contact", title: "12. Contact Us" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-200">
      <Seo
        title="Privacy Policy | Aicyro"
        description="Read our Privacy Policy to understand how Aicyro collects, uses, and protects your personal information."
      />

      {/* Decorative Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
        }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-[var(--container)] mx-auto px-6 pt-28 sm:pt-36 pb-20 w-full">
        {/* Document Masthead */}
        <div className="mb-12 border-b border-[var(--border-color)] pb-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs font-semibold text-[var(--foreground)] mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
            <span>Legal and Compliance Dossier</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-4 text-balance">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--foreground-muted)]">
            <span className="tabular-nums">Effective Date: June 8, 2026</span>
            <span className="text-[var(--border-color)]" aria-hidden="true">•</span>
            <span>Zero Data Brokerage Commitment</span>
          </div>
        </div>

        {/* 12-Column Grid: Sticky Index Sidebar + Reading Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Table of Contents Sticky Sidebar (Columns 1-4) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs">
              <span className="text-xs font-bold text-[var(--foreground)] block mb-4">
                Table of Contents
              </span>
              <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs sm:text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors duration-150 py-1"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Zero-Sale Guarantee Pod */}
            <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs">
              <div className="flex items-center gap-2.5 text-[var(--primary)] font-bold text-xs mb-3">
                <Lock size={18} aria-hidden="true" />
                <span>Zero Data Sale Commitment</span>
              </div>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                We do not sell personal information to data brokers or advertisers. All workflow processing occurs under strict confidentiality agreements.
              </p>
            </div>
          </aside>

          {/* Document Content Track (Columns 5-12) */}
          <div className="lg:col-span-8 space-y-8 max-w-[70ch]">
            
            {/* Overview Section */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs">
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed mb-4">
                Welcome to AICYRO ("Company," "we," "our," or "us"). We respect
                your privacy and are committed to protecting your personal
                information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and use our services.
              </p>
              <div className="p-3.5 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 text-xs sm:text-sm font-semibold text-[var(--primary)]">
                By accessing or using our website, you agree to the terms of this Privacy Policy.
              </div>
            </div>

            {/* Section 1 */}
            <section id="about" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 01</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                1. About Us
              </h2>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                AICYRO is an international technology company providing AI-powered
                business solutions, automation services, customer engagement
                systems, chatbot solutions, software development, and related
                consulting services to clients worldwide.
              </p>
            </section>

            {/* Section 2 */}
            <section id="collect" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 02</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                2. Information We Collect
              </h2>
              <div className="space-y-6 text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                <p>We may collect the following categories of information:</p>

                <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)]">
                  <h3 className="text-sm font-bold text-[var(--foreground)] mb-2">
                    Personal Information
                  </h3>
                  <p className="text-xs sm:text-sm mb-3">
                    When you submit a form, request a demo, contact us, or interact with our services, we may collect:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name and job title</li>
                    <li>Business information and voluntary inquiries</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)]">
                  <h3 className="text-sm font-bold text-[var(--foreground)] mb-2">
                    Technical Information
                  </h3>
                  <p className="text-xs sm:text-sm mb-3">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>IP address and general geolocation</li>
                    <li>Browser type, device details, and operating system</li>
                    <li>Website usage statistics and navigation paths</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)]">
                  <h3 className="text-sm font-bold text-[var(--foreground)] mb-2">
                    Communication Data
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>Email correspondence</li>
                    <li>Contact form submissions and lead chats</li>
                    <li>Customer support logs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="use" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 03</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                3. How We Use Your Information
              </h2>
              <div className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                <p className="mb-3">We use collected information to:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Provide and improve our AI booking desk services</li>
                  <li>Respond to inquiries, support tickets, and scheduling requests</li>
                  <li>Deliver requested lead audits, blueprints, and proposals</li>
                  <li>Prevent fraud, abusive activity, or security violations</li>
                  <li>Comply with applicable legal and statutory requirements</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="basis" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 04</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                4. Legal Basis for Processing
              </h2>
              <div className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                <p className="mb-3">Where applicable under GDPR and privacy regulations, we process data on:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Your voluntary consent</li>
                  <li>Performance and execution of service agreements</li>
                  <li>Legitimate corporate and operational interests</li>
                  <li>Statutory compliance obligations</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 05</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                Our website uses only necessary technical cookies and opt-in deal personalization cookies to improve responsiveness. We do not use third-party behavioral retargeting scripts. You may disable cookies at any time in your browser settings.
              </p>
            </section>

            {/* Section 6 */}
            <section id="third-party" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 06</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                6. Third-Party Services
              </h2>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                We work with trusted infrastructure providers for cloud hosting, database management, and transactional communications under strict confidentiality and data-processing terms.
              </p>
            </section>

            {/* Section 7 */}
            <section id="transfers" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 07</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                7. International Data Transfers
              </h2>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                As an international business, information may be transferred across borders. We implement standard contractual safeguards to guarantee adequate data security regardless of jurisdiction.
              </p>
            </section>

            {/* Section 8 */}
            <section id="sharing" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 08</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                8. Data Sharing and Disclosure
              </h2>
              <div className="p-3.5 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 text-xs sm:text-sm font-semibold text-[var(--primary)] mb-4">
                We do not sell personal information under any circumstance.
              </div>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                Information is only disclosed when legally compelled by court order, to safeguard operational integrity, or during a corporate restructuring.
              </p>
            </section>

            {/* Section 9 */}
            <section id="retention" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 09</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                9. Data Retention
              </h2>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                Personal records are kept only as long as necessary to provide service, settle billing, and satisfy regulatory record-keeping periods. Obsolete data is permanently purged.
              </p>
            </section>

            {/* Section 10 */}
            <section id="security" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 10</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                10. Data Security
              </h2>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                We maintain SSL/TLS 256-bit encryption in transit, encrypted storage at rest, and strict least-privilege administrative controls across all databases.
              </p>
            </section>

            {/* Section 11 */}
            <section id="rights" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 11</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                11. Your Privacy Rights
              </h2>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                You may at any time request a copy of your records, submit data corrections, or exercise your right to erasure by reaching out to our privacy compliance team.
              </p>
            </section>

            {/* Section 12 */}
            <section id="contact" className="p-8 sm:p-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] mb-2">
                <span>Section 12</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                12. Contact Us
              </h2>
              <address className="not-italic bg-[var(--background)] p-6 rounded-xl border border-[var(--border-color)] mt-4 block space-y-2">
                <strong className="text-[var(--foreground)] block text-base font-bold">
                  AICYRO Solutions
                </strong>
                <div className="text-sm text-[var(--foreground-muted)]">
                  <span>Email: </span>
                  <a
                    href="mailto:info@aicyro.com"
                    className="text-[var(--primary)] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>info@aicyro.com</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">
                  <span>Website: </span>
                  <a
                    href="https://aicyro.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>https://aicyro.pro</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </address>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
