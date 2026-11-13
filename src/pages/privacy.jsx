import React from "react";
import Seo from "../components/Essential/Seo";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans overflow-hidden transition-colors duration-300">
      <Seo
        title="Privacy Policy | Aicyro"
        description="Read our Privacy Policy to understand how Aicyro collects, uses, and protects your personal information."
      />

      {/* Ambient Background FX */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] opacity-70" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--primary)] rounded-full blur-[140px] opacity-[var(--spotlight-opacity)]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[var(--accent-blue)] rounded-full blur-[120px] opacity-[var(--spotlight-opacity)]" />
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-6 py-28 md:py-36 w-full">
        {/* Header */}
        <div className="mb-12 border-b border-[var(--border-color)] pb-8">
          <span className="bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 inline-block shadow-sm">
            Legal & Security
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-[var(--foreground)]">
            Privacy Policy
          </h1>
          <p className="text-[var(--foreground-muted)] font-medium text-base md:text-lg">
            Effective Date: June 8, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="space-y-10 leading-relaxed text-[var(--foreground)] bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl p-8 md:p-12 shadow-xl">
          <section>
            <p className="text-[var(--foreground-muted)] text-base md:text-lg">
              Welcome to AICYRO ("Company," "we," "our," or "us"). We respect
              your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website and use our services.
            </p>
            <p className="mt-4 font-semibold text-[var(--primary)] text-base md:text-lg">
              By accessing or using our website, you agree to the terms of this
              Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              1. About Us
            </h2>
            <p className="text-[var(--foreground-muted)]">
              AICYRO is an international technology company providing AI-powered
              business solutions, automation services, customer engagement
              systems, chatbot solutions, software development, and related
              consulting services to clients worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              2. Information We Collect
            </h2>
            <p className="text-[var(--foreground-muted)] mb-4">
              We may collect the following categories of information:
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary)]">
              Personal Information
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3">
              When you submit a form, request a demo, contact us, or interact
              with our services, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--foreground-muted)]">
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

            <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary)]">
              Technical Information
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--foreground-muted)]">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Website usage data</li>
              <li>Referring website information</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary)]">
              Communication Data
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3">
              We may store records of communications between you and AICYRO,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
              <li>Email correspondence</li>
              <li>Contact form submissions</li>
              <li>Chat conversations</li>
              <li>Customer support interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              3. How We Use Your Information
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
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
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              4. Legal Basis for Processing
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              Where applicable under GDPR and other privacy laws, we process
              personal data based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Legitimate business interests</li>
              <li>Compliance with legal obligations</li>
              <li>Protection of vital interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              Our website may use cookies, analytics tools, and similar
              technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)]">
              <li>Understand website usage</li>
              <li>Improve website performance</li>
              <li>Measure marketing effectiveness</li>
              <li>Enhance user experience</li>
            </ul>
            <p className="text-[var(--foreground-muted)]">
              You may disable cookies through your browser settings; however,
              some website features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              6. Third-Party Services
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              We may use trusted third-party service providers for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)]">
              <li>Website hosting</li>
              <li>Analytics</li>
              <li>CRM systems</li>
              <li>Marketing automation</li>
              <li>Customer support</li>
              <li>Cloud infrastructure</li>
            </ul>
            <p className="text-[var(--foreground-muted)]">
              These providers may process information on our behalf under
              contractual obligations designed to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              7. International Data Transfers
            </h2>
            <p className="text-[var(--foreground-muted)] mb-4">
              As an international business, your information may be transferred
              to, stored, and processed in countries outside your jurisdiction.
            </p>
            <p className="text-[var(--foreground-muted)]">
              We implement reasonable safeguards and contractual protections to
              ensure that transferred data receives an appropriate level of
              protection in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              8. Data Sharing and Disclosure
            </h2>
            <p className="font-semibold text-[var(--primary)] mb-4">
              We do not sell personal information.
            </p>
            <p className="text-[var(--foreground-muted)] mb-3">We may share information:</p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
              <li>With service providers supporting our operations</li>
              <li>With affiliated entities and business partners</li>
              <li>When required by law or governmental authority</li>
              <li>To protect our rights, security, and property</li>
              <li>During a merger, acquisition, or business restructuring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              9. Data Retention
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              We retain personal information only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)]">
              <li>Fulfill the purposes outlined in this Policy</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
            <p className="text-[var(--foreground-muted)]">
              When information is no longer required, it will be securely
              deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              10. Data Security
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              We implement commercially reasonable technical, administrative,
              and organizational measures designed to protect personal
              information against unauthorized access, loss, misuse, or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              11. Your Privacy Rights
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              Depending on your jurisdiction, you may have rights to access,
              correct, or request deletion of your personal information, or withdraw consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              12. Contact Us
            </h2>
            <address className="not-italic bg-[var(--background)] p-6 rounded-2xl shadow-sm border border-[var(--border-color)] mb-6">
              <strong className="text-[var(--foreground)] block mb-2 text-lg font-bold">
                AICYRO
              </strong>
              <span className="text-[var(--foreground-muted)]">Email: </span>
              <a
                href="mailto:info@aicyro.com"
                className="text-[var(--primary)] hover:underline transition-colors font-medium"
              >
                info@aicyro.com
              </a>
              <br />
              <span className="text-[var(--foreground-muted)]">Website: </span>
              <a
                href="https://aicyro.pro"
                className="text-[var(--primary)] hover:underline transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://aicyro.pro
              </a>
            </address>
          </section>

          <div className="pt-6 border-t border-[var(--border-color)]">
            <p className="text-sm text-[var(--foreground-muted)] italic text-center">
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
