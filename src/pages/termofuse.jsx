import React from "react";
import Seo from "../components/Essential/Seo";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Seo
        title="Terms of Service | Aicyro"
        description="Read the Terms of Service for Aicyro. Understand the rules and regulations governing the use of our website and services."
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
            <span>Legal &amp; Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight text-[var(--foreground)]">
            Terms of Service
          </h1>
          <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
            Effective Date: June 8, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="space-y-10 leading-relaxed text-[var(--foreground)] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-sm">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              1. Acceptance of Terms
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              Welcome to AICYRO ("Company," "we," "our," or "us"). By accessing
              or using our website, products, services, software, or related
              offerings, you agree to be bound by these Terms of Service
              ("Terms").
            </p>
            <p className="font-semibold text-[var(--primary)] text-sm sm:text-base">
              If you do not agree with these Terms, please do not use our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              2. About AICYRO
            </h2>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              AICYRO provides artificial intelligence solutions, software
              development, automation services, chatbot systems, consulting,
              customer engagement technologies, and related business services to
              clients worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              3. Use of the Website
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              You agree to use the website only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Violate any applicable laws or regulations.</li>
              <li>Attempt unauthorized access to systems or networks.</li>
              <li>Interfere with website functionality or security.</li>
              <li>Upload malicious software, viruses, or harmful code.</li>
              <li>Use the website to distribute spam or fraudulent content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              4. Intellectual Property
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              All content on this website, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Logos and brand assets</li>
              <li>Trademarks</li>
              <li>Text, copywriting, and documentation</li>
              <li>Graphics, animations, and diagrams</li>
              <li>Software and proprietary algorithms</li>
              <li>Designs and user interfaces</li>
              <li>AI solutions and proprietary methodologies</li>
            </ul>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              are owned by or licensed to AICYRO and protected by applicable
              intellectual property laws. No content may be copied, reproduced,
              distributed, or modified without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              5. Service Proposals and Agreements
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              Any proposal, quotation, statement of work, or service agreement
              provided by AICYRO constitutes a separate contractual arrangement
              and may contain additional terms.
            </p>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              In the event of a conflict between these Terms and a signed
              agreement, the signed agreement shall prevail.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              6. User Submissions
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              Information submitted through contact forms, chat systems, demo
              requests, or other communication channels may be used to respond
              to inquiries and provide services in accordance with our Privacy
              Policy.
            </p>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              You represent that any information submitted is accurate and
              lawful.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              7. Third-Party Services
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              Our website may contain links to third-party websites, platforms,
              or services.
            </p>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              AICYRO is not responsible for the content, privacy practices,
              availability, or security of third-party services. Use of
              third-party services is subject to their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              8. Disclaimer of Warranties
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              The website and services are provided on an "as is" and "as
              available" basis. To the maximum extent permitted by law, AICYRO
              disclaims all warranties, whether express or implied, including
              but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Availability or uninterrupted operation</li>
            </ul>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              We do not guarantee that the website will be error-free, secure,
              or continuously available.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              9. Limitation of Liability
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              To the fullest extent permitted by law, AICYRO shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Website usage</li>
              <li>Service interruptions</li>
              <li>Loss of profits</li>
              <li>Loss of data</li>
              <li>Business interruption</li>
            </ul>
            <p className="font-semibold text-[var(--primary)] text-sm sm:text-base">
              Our total liability shall not exceed the amount paid by the
              customer for the applicable service during the preceding twelve
              months.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              10. Indemnification
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              You agree to indemnify and hold harmless AICYRO, its employees,
              contractors, affiliates, and partners from claims, liabilities,
              damages, costs, and expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)] text-sm sm:text-base">
              <li>Violation of these Terms</li>
              <li>Misuse of the website</li>
              <li>Violation of applicable laws</li>
              <li>Infringement of third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              11. Confidentiality
            </h2>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              Any confidential information exchanged during business
              discussions, project delivery, or consulting engagements shall
              remain confidential unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              12. Termination
            </h2>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              We reserve the right to suspend or terminate access to the website
              or services at our sole discretion if these Terms are violated.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              13. Governing Law
            </h2>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              These Terms shall be governed by and interpreted in accordance
              with the laws applicable to the jurisdiction in which AICYRO is
              registered, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              14. Changes to These Terms
            </h2>
            <p className="text-[var(--foreground-muted)] mb-3 text-sm sm:text-base">
              We may update these Terms at any time.
            </p>
            <p className="text-[var(--foreground-muted)] text-sm sm:text-base">
              Continued use of the website following publication of updated
              Terms constitutes acceptance of the revised version.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--foreground)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              15. Contact Information
            </h2>
            <p className="text-[var(--foreground-muted)] mb-4 text-sm sm:text-base">
              For legal inquiries, please contact us using the information
              below:
            </p>
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
                href="https://aicyro.com"
                className="text-[var(--primary)] hover:underline font-medium text-sm"
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
