import React from "react";
import Seo from "../components/Essential/Seo";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Seo
        title="Privacy Policy | Aicyro"
        description="Read our Privacy Policy to understand how Aicyro collects, uses, and protects your personal information."
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

      {/* Main Content */}
      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-6 py-24 md:py-32 w-full">
        {/* Header */}
        <div className="mb-10 border-b border-[var(--border-color)] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs font-semibold text-[var(--primary)] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" aria-hidden="true" />
            <span>Legal &amp; Security</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight text-[var(--foreground)]">
            Privacy Policy
          </h1>
          <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
            Effective Date: June 8, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="space-y-10 leading-relaxed text-[var(--foreground)] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-sm">
          <section>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              Welcome to AICYRO ("Company," "we," "our," or "us"). We respect
              your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website and use our services.
            </p>
            <p className="mt-4 font-semibold text-[var(--primary)] text-sm sm:text-base">
              By accessing or using our website, you agree to the terms of this
              Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              1. About Us
            </h2>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              AICYRO is an international technology company providing AI-powered
              business solutions, automation services, customer engagement
              systems, chatbot solutions, software development, and related
              consulting services to clients worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              2. Information We Collect
            </h2>
            <p className="text-[var(--foreground-muted)] mb-4 text-sm sm:text-base">
              We may collect the following categories of information:
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-6 text-[var(--primary)]">
              Personal Information
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              When you submit a form, request a demo, contact us, or interact
              with our services, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Business information</li>
              <li>
                Any information voluntarily provided in messages or inquiries
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-6 text-[var(--primary)]">
              Technical Information
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Website usage data</li>
              <li>Referring website information</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-6 text-[var(--primary)]">
              Communication Data
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              We may store records of communications between you and AICYRO,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Email correspondence</li>
              <li>Contact form submissions</li>
              <li>Chat conversations</li>
              <li>Customer support interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              3. How We Use Your Information
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Schedule consultations and demos</li>
              <li>Deliver requested information</li>
              <li>Communicate regarding our products and services</li>
              <li>Improve website functionality and user experience</li>
              <li>Analyze website performance and visitor behavior</li>
              <li>Prevent fraud, abuse, or unauthorized activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              4. Legal Basis for Processing
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              Where applicable under GDPR and other privacy laws, we process
              personal data based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Legitimate business interests</li>
              <li>Compliance with legal obligations</li>
              <li>Protection of vital interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              Our website may use cookies, analytics tools, and similar
              technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Understand website usage</li>
              <li>Improve website performance</li>
              <li>Measure marketing effectiveness</li>
              <li>Enhance user experience</li>
            </ul>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              You may disable cookies through your browser settings; however,
              some website features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              6. Third-Party Services
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              We may use trusted third-party service providers for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Website hosting</li>
              <li>Analytics</li>
              <li>CRM systems</li>
              <li>Marketing automation</li>
              <li>Customer support</li>
              <li>Cloud infrastructure</li>
            </ul>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              These providers may process information on our behalf under
              contractual obligations designed to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              7. International Data Transfers
            </h2>
            <p className="text-[var(--foreground-muted)] mb-4 text-sm sm:text-base">
              As an international business, your information may be transferred
              to, stored, and processed in countries outside your jurisdiction.
            </p>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              We implement reasonable safeguards and contractual protections to
              ensure that transferred data receives an appropriate level of
              protection in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              8. Data Sharing and Disclosure
            </h2>
            <p className="font-semibold text-[var(--primary)] mb-4 text-sm sm:text-base">
              We do not sell personal information.
            </p>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">We may share information:</p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>With service providers supporting our operations</li>
              <li>With affiliated entities and business partners</li>
              <li>When required by law or governmental authority</li>
              <li>To protect our rights, security, and property</li>
              <li>During a merger, acquisition, or business restructuring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              9. Data Retention
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              We retain personal information only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Fulfill the purposes outlined in this Policy</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              When information is no longer required, it will be securely
              deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              10. Data Security
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              We implement commercially reasonable technical, administrative,
              and organizational measures designed to protect personal
              information against unauthorized access, loss, misuse, or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              11. Your Privacy Rights
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              Depending on your jurisdiction, you may have rights to access,
              correct, or request deletion of your personal information, or withdraw consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              12. Contact Us
            </h2>
            <address className="not-italic bg-[var(--background)] p-6 rounded-xl border border-[var(--border-color)] mb-6">
              <strong className="text-[var(--foreground)] block mb-1 text-base font-bold">
                AICYRO
              </strong>
              <span className="text-[var(--foreground-muted)] text-sm">Email: </span>
              <a
                href="mailto:info@aicyro.com"
                className="text-[var(--primary)] hover:underline font-medium text-sm"
              >
                info@aicyro.com
              </a>
              <br />
              <span className="text-[var(--foreground-muted)] text-sm">Website: </span>
              <a
                href="https://aicyro.pro"
                className="text-[var(--primary)] hover:underline font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://aicyro.pro
              </a>
            </address>
          </section>

          <div className="pt-6 border-t border-[var(--border-color)]">
            <p className="text-xs sm:text-sm text-[var(--foreground-muted)] italic text-center">
              By using our website and services, you acknowledge that you have
              read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
