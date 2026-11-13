// src/pages/cookie.jsx
import React from "react";
import Seo from "../components/Essential/Seo";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";

export default function CookiePolicy() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans overflow-hidden transition-colors duration-300">
      <Seo
        title="Strict Cookie Policy | Aicyro"
        description="Learn how Aicyro strictly uses first-party cookies solely for deal personalization and core functionality without invasive third-party tracking."
      />

      {/* Ambient Background FX */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] opacity-70" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--primary)] rounded-full blur-[140px] opacity-[var(--spotlight-opacity)]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[var(--accent-blue)] rounded-full blur-[120px] opacity-[var(--spotlight-opacity)]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-6 py-28 md:py-36 w-full">
        {/* Header Container */}
        <div className="mb-12 border-b border-[var(--border-color)] pb-8">
          <span className="bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 inline-block shadow-sm">
            Strict Corporate Policy
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-[var(--foreground)]">
            Cookie Policy
          </h1>
          <p className="text-[var(--foreground-muted)] font-medium text-base md:text-lg">
            Effective Date: July 6, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="space-y-10 leading-relaxed text-[var(--foreground)] bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl p-8 md:p-12 shadow-xl">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              1. Our Zero-Tracking Commitment
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              At AICYRO, we operate under a strict privacy-first architecture.
              Unlike conventional platforms,{" "}
              <strong className="text-[var(--foreground)] font-semibold">
                we do not use third-party advertising cookies, cross-site
                trackers, or data-harvesting scripts
              </strong>{" "}
              (such as Meta Pixels or ad retargeting networks).
            </p>
            <p className="text-[var(--foreground-muted)]">
              Our website uses cookies exclusively to ensure system security and
              to customize specific AI automation deal offers based on your
              self-selected industry and business needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              2. How We Use Deal Personalization Cookies
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              When you opt into deal personalization via our consent banner, we
              store a secure, first-party cookie containing only non-sensitive
              workflow choices:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)]">
              <li>
                <strong className="text-[var(--foreground)]">Industry Sector:</strong> Adapts AI chatbot demo
                templates and live previews to your sector.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Automation Goals:</strong> Tailors proposed package
                tiers and integration spotlights (e.g., n8n, CRM sync).
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Discount & Offer Tier:</strong> Locks in promotional
                pricing customized for your business scale.
              </li>
            </ul>
            <p className="text-[var(--foreground-muted)] italic text-sm">
              All personalization data stays on your local browser and is
              strictly protected with <code className="bg-[var(--border-color)]/30 px-1.5 py-0.5 rounded text-xs font-mono">SameSite=Strict</code> and{" "}
              <code className="bg-[var(--border-color)]/30 px-1.5 py-0.5 rounded text-xs font-mono">Secure</code> flags.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              3. Categories of Cookies We Maintain
            </h2>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary)]">
              A. Essential System Cookies
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3">
              Required for basic website functioning, user authentication
              sessions, and DDoS load balancing. These do not store personal
              profiles.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary)]">
              B. Deal Personalization Cookies (Opt-In Only)
            </h3>
            <p className="text-[var(--foreground-muted)]">
              Stored only when you explicitly select your industry preferences
              on our banner. These expire automatically after 30 days or can be
              cleared instantly from your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              4. Your Control & Revocation Rights
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              You maintain 100% control over your stored preferences. You can
              clear or disable cookies at any time through your browser's
              privacy settings without losing access to core website features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              5. Contact Our Privacy Team
            </h2>
            <address className="not-italic bg-[var(--background)] p-6 rounded-2xl shadow-sm border border-[var(--border-color)] mt-4">
              <strong className="text-[var(--foreground)] block mb-2 text-lg font-bold">
                AICYRO Solutions
              </strong>
              <span className="text-[var(--foreground-muted)]">Email: </span>
              <a
                href="mailto:info@aicyro.com"
                className="text-[var(--primary)] hover:underline transition-colors font-medium"
              >
                info@aicyro.com
              </a>
            </address>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
