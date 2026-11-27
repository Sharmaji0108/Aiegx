import React, { useEffect } from 'react';
import {
  ShieldCheck,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Building2,
  FileText,
  Lock,
  Eye,
  Database,
  ExternalLink,
  RefreshCw,
  Cookie,
  UserCheck
} from 'lucide-react';
import ProductBreadcrumb from '../components/products/ProductBreadcrumb';
import { navigateTo } from '../utils/navigation';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Privacy Policy | AIEGX - Embedded & Edge AI Hardware';
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <div className="w-full min-h-screen bg-[#F3F8FD] dark:bg-[#0D1733] text-[#101B32] dark:text-[#F8FAFC] transition-colors duration-300">
      
      {/* ─── HERO HEADER ────────────────────────────────────────────────── */}
      <section className="relative pt-[104px] pb-12 sm:pt-[124px] sm:pb-16 lg:pt-[136px] lg:pb-18 overflow-hidden border-b border-[#D8E5F3] dark:border-white/10 bg-gradient-to-b from-[#EAF5FF] via-[#F3F8FD] to-[#F3F8FD] dark:from-[#111F42] dark:via-[#0D1733] dark:to-[#0D1733]">
        {/* Subtle Ambient Decorative Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#1672E8]/10 dark:bg-[#1672E8]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ProductBreadcrumb items={breadcrumbItems} />

          {/* Back to Home Quick Action */}
          <button
            type="button"
            onClick={(e) => navigateTo('/', e)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#089EC2] dark:text-[#2DD4F0] hover:text-[#1672E8] dark:hover:text-cyan-300 transition-colors mb-5 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Home</span>
          </button>

          <div className="text-left">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0] mb-5 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legal &amp; Compliance</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101B32] dark:text-white leading-[1.18] mb-4">
              Privacy Policy
            </h1>

            {/* Introductory Description */}
            <p className="text-base sm:text-lg text-[#536987] dark:text-[#AAB6D0] font-normal leading-relaxed max-w-3xl mb-4">
              This Privacy Policy explains how AIEGX collects, uses, protects, and handles your personal information when you visit our website, request quotes, or communicate with our engineering and support teams.
            </p>

            {/* Last Updated Date */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#536987] dark:text-[#AAB6D0] pt-2">
              <span className="font-semibold text-[#101B32] dark:text-slate-200">Last Updated:</span>
              <time dateTime="2026-11-27">November 27, 2026</time>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POLICY CONTENT CONTAINER ───────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <article className="bg-white dark:bg-[#101A36] rounded-2xl border border-[#D8E5F3] dark:border-[#1E2E55] p-6 sm:p-10 lg:p-12 shadow-sm text-[#101B32] dark:text-slate-200 space-y-12">

          {/* SECTION 1: Introduction */}
          <section id="section-1" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                01
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                1. Introduction
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                AIEGX (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to respecting your privacy and protecting the personal information you share with us. We design, manufacture, and provide embedded hardware platforms, System-on-Modules (SOMs), Single Board Computers (SBCs), carrier boards, and edge AI engineering solutions for global developers and industrial enterprises.
              </p>
              <p>
                This Privacy Policy outlines the types of information we collect through our website, how we use and safeguard that data, and your rights concerning your personal information. By accessing or using our website, submitting an inquiry, or requesting technical documentation and quotations, you consent to the practices described in this policy.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 2: Information We Collect */}
          <section id="section-2" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                02
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                2. Information We Collect
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                We only collect information that is relevant and necessary for our business interactions with you. Information collected through our website includes:
              </p>
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl bg-[#F8FAFD] dark:bg-[#152347] border border-[#E2ECF7] dark:border-[#20325D]">
                  <h3 className="font-semibold text-sm sm:text-base text-[#101B32] dark:text-white mb-1.5 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                    Information You Voluntarily Provide
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Contact Forms &amp; Inquiries:</strong> Full name, business email address, phone number, company name, country, and project description.</li>
                    <li><strong>Quote &amp; Hardware Requests:</strong> Target hardware specifications, estimated production volume, compute requirements, thermal envelope constraints, and timeline requirements.</li>
                    <li><strong>Technical Support Communications:</strong> Technical queries, system configurations, and board support package (BSP) version details submitted during engineering consultations.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFD] dark:bg-[#152347] border border-[#E2ECF7] dark:border-[#20325D]">
                  <h3 className="font-semibold text-sm sm:text-base text-[#101B32] dark:text-white mb-1.5 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                    Website Usage &amp; Analytics Data
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Standard Technical Telemetry:</strong> IP address (anonymized/truncated where required), operating system, browser type and version, language settings, and device characteristics.</li>
                    <li><strong>Browsing Patterns:</strong> Pages visited, documentation viewed, referral URLs, time spent per section, and navigation timestamps to maintain website reliability and security.</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs sm:text-sm italic pt-1">
                Note: We do not collect sensitive personal data such as financial payment details, credit card numbers, government identification numbers, or biometric information through our website.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 3: How We Use Your Information */}
          <section id="section-3" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                03
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                3. How We Use Your Information
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                We use the information we collect solely for legitimate commercial, operational, and technical purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Responding to Enquiries:</strong> Answering product questions, feasibility queries, and engineering consultation requests.</li>
                <li><strong>Processing Quotation Requests:</strong> Generating hardware pricing quotes, delivery schedules, and technical capability evaluations.</li>
                <li><strong>Providing Technical Support:</strong> Assisting hardware engineers and developers with BSP setup, Linux driver integration, and carrier board interfacing.</li>
                <li><strong>Improving Website Functionality:</strong> Monitoring site performance, diagnostic errors, and usability to optimize technical documentation and user experience.</li>
                <li><strong>Direct Business Communications:</strong> Communicating project updates, product revision notices, and technical advisories related to hardware you have enquired about.</li>
              </ul>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 4: Cookies and Tracking Technologies */}
          <section id="section-4" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                04
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                4. Cookies and Tracking Technologies
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                Our website utilizes standard browser cookies and local storage technologies strictly for technical and operational functionality:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Essential UI Preferences:</strong> We use local storage to persist interface settings, such as your light or dark mode theme selection.</li>
                <li><strong>Navigation &amp; Session Support:</strong> Session cookies allow smooth single-page application navigation and preserve interaction states without tracking you across unrelated sites.</li>
                <li><strong>Aggregated Analytics:</strong> We may employ privacy-focused analytics to gauge page visits and system health. These tools record aggregate statistics without correlating them to identifiable personal profiles.</li>
              </ul>
              <p>
                You can configure your browser to block or alert you about cookies. Disabling cookies will not hinder your ability to browse our product catalog or contact our engineering team, though certain display preferences may reset upon reload.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 5: Information Sharing */}
          <section id="section-5" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                05
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                5. Information Sharing
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-[#17264D]/60 border border-[#089EC2]/20 dark:border-[#2DD4F0]/20 text-[#101B32] dark:text-white font-medium text-xs sm:text-sm">
                <strong>Our Commitment:</strong> AIEGX does not sell, rent, monetize, or trade your personal information with third parties, brokers, or advertisers under any circumstances.
              </div>
              <p>
                We only share personal information under the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Service Providers &amp; Infrastructure Partners:</strong> With verified vendors who provide cloud hosting, database management, and email transmission services to support website operations under strict non-disclosure obligations.</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, judicial proceeding, or regulatory authority to comply with applicable statutory obligations.</li>
                <li><strong>Protection of Rights:</strong> When necessary to enforce our agreements, investigate potential security breaches, or protect the safety, rights, and property of AIEGX, our customers, and the public.</li>
              </ul>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 6: Data Security */}
          <section id="section-6" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                06
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                6. Data Security
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                We maintain appropriate physical, electronic, and administrative safeguards to protect your personal information against accidental loss, unauthorized access, disclosure, or destruction:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Encryption:</strong> All web traffic is encrypted in transit using industry-standard Transport Layer Security (TLS/HTTPS).</li>
                <li><strong>Access Controls:</strong> Access to customer inquiries and engineering project records is restricted strictly to authorized personnel with a business need.</li>
                <li><strong>Infrastructure Integrity:</strong> Hosting environments and web application firewalls undergo routine monitoring and software updates to mitigate vulnerabilities.</li>
              </ul>
              <p>
                While we apply rigorous precautions, no method of transmission over the internet or electronic storage is completely infallible, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 7: Data Retention */}
          <section id="section-7" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                07
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                7. Data Retention
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Providing requested hardware quotes, consultations, and technical support.</li>
                <li>Maintaining ongoing commercial and engineering relationship records for active hardware deployments.</li>
                <li>Complying with applicable legal, accounting, tax, and regulatory compliance standards.</li>
              </ul>
              <p>
                Once data is no longer required for these legitimate purposes, it is securely deleted or irreversibly anonymized.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 8: Your Privacy Rights */}
          <section id="section-8" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                08
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                8. Your Privacy Rights
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                Subject to applicable data protection laws (such as the GDPR, UK GDPR, or CCPA/CPRA where applicable), you have rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Right of Access:</strong> You can request a summary or copy of the personal information we hold about you.</li>
                <li><strong>Right of Rectification:</strong> You can request correction of inaccurate, outdated, or incomplete data.</li>
                <li><strong>Right of Erasure:</strong> You can request deletion of your personal data, subject to statutory retention obligations.</li>
                <li><strong>Right to Restrict or Object:</strong> You can object to or request restrictions on certain processing activities.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing relies on your consent, you can withdraw consent at any time without affecting previous processing.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact our team via email at{' '}
                <a href="mailto:contact@aiegx.com" className="font-semibold text-[#1672E8] dark:text-[#2DD4F0] hover:underline">
                  contact@aiegx.com
                </a>
                . We will respond promptly within the timeframe required by applicable laws.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 9: Third-Party Links */}
          <section id="section-9" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                09
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                9. Third-Party Links
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                Our website may include links to external websites, documentation repositories (e.g. GitHub), semiconductor partner resources (e.g. Renesas), and social media platforms (e.g. LinkedIn, X).
              </p>
              <p>
                These third-party sites operate under independent privacy policies and terms of use. AIEGX has no control over and assumes no responsibility or liability for the content, security practices, or privacy policies of any third-party websites. We encourage you to review the privacy notices of any external site you visit.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 10: Changes to This Privacy Policy */}
          <section id="section-10" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                10
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                10. Changes to This Privacy Policy
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-3.5 pl-0 sm:pl-11">
              <p>
                AIEGX may update this Privacy Policy from time to time to reflect operational modifications, product additions, or changes in legal and regulatory frameworks.
              </p>
              <p>
                Whenever changes occur, we will post the revised version on this page and update the &quot;Last Updated&quot; date at the top. We encourage you to periodically review this page to stay informed about how we protect your personal information.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E2ECF7] dark:border-white/10" />

          {/* SECTION 11: Contact Us */}
          <section id="section-11" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EAF5FF] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                11
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101B32] dark:text-white tracking-tight">
                11. Contact Us
              </h2>
            </div>
            <div className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0] leading-relaxed space-y-4 pl-0 sm:pl-11">
              <p>
                If you have questions, comments, or requests regarding this Privacy Policy or how AIEGX handles your data, please contact us using our verified company channels:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-[#F8FAFD] dark:bg-[#152347] border border-[#E2ECF7] dark:border-[#20325D]">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#101B32] dark:text-white mb-1">
                    <Mail className="w-4 h-4 text-[#1672E8] dark:text-[#2DD4F0]" />
                    <span>Privacy &amp; Support Email</span>
                  </div>
                  <a
                    href="mailto:contact@aiegx.com"
                    className="text-xs sm:text-sm font-semibold text-[#1672E8] dark:text-[#2DD4F0] hover:underline"
                  >
                    contact@aiegx.com
                  </a>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-[#F8FAFD] dark:bg-[#152347] border border-[#E2ECF7] dark:border-[#20325D]">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#101B32] dark:text-white mb-1">
                    <Phone className="w-4 h-4 text-[#1672E8] dark:text-[#2DD4F0]" />
                    <span>Phone Inquiries</span>
                  </div>
                  <a
                    href="tel:+18005550199"
                    className="text-xs sm:text-sm font-semibold text-[#1672E8] dark:text-[#2DD4F0] hover:underline"
                  >
                    +1 (800) 555-0199
                  </a>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-[#F8FAFD] dark:bg-[#152347] border border-[#E2ECF7] dark:border-[#20325D]">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#101B32] dark:text-white mb-1">
                    <MapPin className="w-4 h-4 text-[#1672E8] dark:text-[#2DD4F0]" />
                    <span>Hardware Engineering Centers</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#536987] dark:text-[#AAB6D0]">
                    Silicon Valley &amp; Global Engineering Centers
                  </p>
                </div>

                {/* Legal Entity Placeholder */}
                <div className="p-4 rounded-xl bg-[#F8FAFD] dark:bg-[#152347] border border-[#E2ECF7] dark:border-[#20325D]">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#101B32] dark:text-white mb-1">
                    <Building2 className="w-4 h-4 text-[#1672E8] dark:text-[#2DD4F0]" />
                    <span>Corporate Entity</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#536987] dark:text-[#AAB6D0]">
                    [Legal Entity / Registered Address: AIEGX Inc. / Corporate Headquarters]
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Bottom Navigation Link */}
          <div className="pt-6 border-t border-[#E2ECF7] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={(e) => navigateTo('/', e)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#089EC2] dark:text-[#2DD4F0] bg-[#EAF5FF] dark:bg-[#17264D] hover:bg-[#D8ECFE] dark:hover:bg-[#1E3263] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home</span>
            </button>
            <p className="text-xs text-slate-500 dark:text-white/40">
              &copy; 2026 AIEGX. All rights reserved.
            </p>
          </div>

        </article>
      </main>

    </div>
  );
}
