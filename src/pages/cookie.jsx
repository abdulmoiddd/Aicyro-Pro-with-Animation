// src/pages/cookie.jsx
import React from "react";
import Seo from "../components/Essential/Seo";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";

export default function CookiePolicy() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Seo
        title="Strict Cookie Policy | Aicyro"
        description="Learn how Aicyro strictly uses first-party cookies solely for deal personalization and core functionality without invasive third-party tracking."
      />

      {/* Subtle Grid Background */}
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

      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-6 py-24 md:py-32 w-full">
        {/* Header Container */}
        <div className="mb-10 border-b border-[var(--border-color)] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs font-semibold text-[var(--primary)] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" aria-hidden="true" />
            <span>Strict Corporate Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight text-[var(--foreground)]">
            Cookie Policy
          </h1>
          <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
            Effective Date: July 6, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="space-y-10 leading-relaxed text-[var(--foreground)] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-sm">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              1. Our Zero-Tracking Commitment
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              At AICYRO, we operate under a strict privacy-first architecture.
              Unlike conventional platforms,{" "}
              <strong className="text-[var(--foreground)] font-semibold">
                we do not use third-party advertising cookies, cross-site
                trackers, or data-harvesting scripts
              </strong>{" "}
              (such as Meta Pixels or ad retargeting networks).
            </p>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              Our website uses cookies exclusively to ensure system security and
              to customize specific AI automation deal offers based on your
              self-selected industry and business needs.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              2. How We Use Deal Personalization Cookies
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              When you opt into deal personalization via our consent banner, we
              store a secure, first-party cookie containing only non-sensitive
              workflow choices:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>
                <strong className="text-[var(--foreground)] font-semibold">Industry Sector:</strong> Adapts AI chatbot demo
                templates and live previews to your sector.
              </li>
              <li>
                <strong className="text-[var(--foreground)] font-semibold">Automation Goals:</strong> Tailors proposed package
                tiers and integration spotlights (e.g., n8n, CRM sync).
              </li>
              <li>
                <strong className="text-[var(--foreground)] font-semibold">Discount &amp; Offer Tier:</strong> Locks in promotional
                pricing customized for your business scale.
              </li>
            </ul>
            <p className="text-[var(--foreground-muted)] italic text-xs sm:text-sm">
              All personalization data stays on your local browser and is
              strictly protected with <code className="bg-[var(--border-color)]/30 px-1.5 py-0.5 rounded text-xs">SameSite=Strict</code> and{" "}
              <code className="bg-[var(--border-color)]/30 px-1.5 py-0.5 rounded text-xs">Secure</code> flags.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              3. Categories of Cookies We Maintain
            </h2>

            <h3 className="text-lg font-semibold mb-2 mt-6 text-[var(--primary)]">
              A. Essential System Cookies
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              Required for basic website functioning, user authentication
              sessions, and DDoS load balancing. These do not store personal
              profiles.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-6 text-[var(--primary)]">
              B. Deal Personalization Cookies (Opt-In Only)
            </h3>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              Stored only when you explicitly select your industry preferences
              on our banner. These expire automatically after 30 days or can be
              cleared instantly from your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              4. Your Control &amp; Revocation Rights
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              You maintain 100% control over your stored preferences. You can
              clear or disable cookies at any time through your browser's
              privacy settings without losing access to core website features.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              5. Contact Our Privacy Team
            </h2>
            <address className="not-italic bg-[var(--background)] p-6 rounded-xl border border-[var(--border-color)] mt-4">
              <strong className="text-[var(--foreground)] block mb-1 text-base font-bold">
                AICYRO Solutions
              </strong>
              <span className="text-[var(--foreground-muted)] text-sm">Email: </span>
              <a
                href="mailto:info@aicyro.com"
                className="text-[var(--primary)] hover:underline font-medium text-sm"
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
