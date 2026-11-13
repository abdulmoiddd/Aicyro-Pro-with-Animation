import React from "react";
import Seo from "../components/Essential/Seo";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans overflow-hidden transition-colors duration-300">
      <Seo
        title="Terms of Service | Aicyro"
        description="Read the Terms of Service for Aicyro. Understand the rules and regulations governing the use of our website and services."
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
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-[var(--foreground)]">
            Terms of Service
          </h1>
          <p className="text-[var(--foreground-muted)] font-medium text-base md:text-lg">
            Effective Date: June 8, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="space-y-10 leading-relaxed text-[var(--foreground)] bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl p-8 md:p-12 shadow-xl">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              1. Acceptance of Terms
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-base md:text-lg">
              Welcome to AICYRO ("Company," "we," "our," or "us"). By accessing
              or using our website, products, services, software, or related
              offerings, you agree to be bound by these Terms of Service
              ("Terms").
            </p>
            <p className="font-semibold text-[var(--primary)] text-base md:text-lg">
              If you do not agree with these Terms, please do not use our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              2. About AICYRO
            </h2>
            <p className="text-[var(--foreground-muted)]">
              AICYRO provides artificial intelligence solutions, software
              development, automation services, chatbot systems, consulting,
              customer engagement technologies, and related business services to
              clients worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              3. Use of the Website
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              You agree to use the website only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
              <li>Violate any applicable laws or regulations.</li>
              <li>Attempt unauthorized access to systems or networks.</li>
              <li>Interfere with website functionality or security.</li>
              <li>Upload malicious software, viruses, or harmful code.</li>
              <li>Use the website to distribute spam or fraudulent content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              4. Intellectual Property
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              All content on this website, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)]">
              <li>Logos and brand assets</li>
              <li>Trademarks</li>
              <li>Text, copywriting, and documentation</li>
              <li>Graphics, animations, and diagrams</li>
              <li>Software and proprietary algorithms</li>
              <li>Designs and user interfaces</li>
              <li>AI solutions and proprietary methodologies</li>
            </ul>
            <p className="text-[var(--foreground-muted)]">
              are owned by or licensed to AICYRO and protected by applicable
              intellectual property laws. No content may be copied, reproduced,
              distributed, or modified without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              5. Service Proposals and Agreements
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              Any proposal, quotation, statement of work, or service agreement
              provided by AICYRO constitutes a separate contractual arrangement
              and may contain additional terms.
            </p>
            <p className="text-[var(--foreground-muted)]">
              In the event of a conflict between these Terms and a signed
              agreement, the signed agreement shall prevail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              6. User Submissions
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              Information submitted through contact forms, chat systems, demo
              requests, or other communication channels may be used to respond
              to inquiries and provide services in accordance with our Privacy
              Policy.
            </p>
            <p className="text-[var(--foreground-muted)]">
              You represent that any information submitted is accurate and
              lawful.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              7. Third-Party Services
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              Our website may contain links to third-party websites, platforms,
              or services.
            </p>
            <p className="text-[var(--foreground-muted)]">
              AICYRO is not responsible for the content, privacy practices,
              availability, or security of third-party services. Use of
              third-party services is subject to their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              8. Disclaimer of Warranties
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              The website and services are provided on an "as is" and "as
              available" basis. To the maximum extent permitted by law, AICYRO
              disclaims all warranties, whether express or implied, including
              but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)]">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Availability or uninterrupted operation</li>
            </ul>
            <p className="text-[var(--foreground-muted)]">
              We do not guarantee that the website will be error-free, secure,
              or continuously available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              9. Limitation of Liability
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              To the fullest extent permitted by law, AICYRO shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)]">
              <li>Website usage</li>
              <li>Service interruptions</li>
              <li>Loss of profits</li>
              <li>Loss of data</li>
              <li>Business interruption</li>
            </ul>
            <p className="font-semibold text-[var(--primary)]">
              Our total liability shall not exceed the amount paid by the
              customer for the applicable service during the preceding twelve
              months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              10. Indemnification
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              You agree to indemnify and hold harmless AICYRO, its employees,
              contractors, affiliates, and partners from claims, liabilities,
              damages, costs, and expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
              <li>Violation of these Terms</li>
              <li>Misuse of the website</li>
              <li>Violation of applicable laws</li>
              <li>Infringement of third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              11. Confidentiality
            </h2>
            <p className="text-[var(--foreground-muted)]">
              Any confidential information exchanged during business
              discussions, project delivery, or consulting engagements shall
              remain confidential unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              12. Termination
            </h2>
            <p className="text-[var(--foreground-muted)]">
              We reserve the right to suspend or terminate access to the website
              or services at our sole discretion if these Terms are violated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              13. Governing Law
            </h2>
            <p className="text-[var(--foreground-muted)]">
              These Terms shall be governed by and interpreted in accordance
              with the laws applicable to the jurisdiction in which AICYRO is
              registered, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              14. Changes to These Terms
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3">
              We may update these Terms at any time.
            </p>
            <p className="text-[var(--foreground-muted)]">
              Continued use of the website following publication of updated
              Terms constitutes acceptance of the revised version.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              15. Contact Information
            </h2>
            <p className="text-[var(--foreground-muted)] mb-6">
              For legal inquiries, please contact us using the information
              below:
            </p>
            <address className="not-italic bg-[var(--background)]/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-[var(--border-color)] mb-6">
              <strong className="text-[var(--foreground)] block mb-2 text-lg">
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
                href="https://aicyro.com"
                className="text-[var(--primary)] hover:underline transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://aicyro.com
              </a>
            </address>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
