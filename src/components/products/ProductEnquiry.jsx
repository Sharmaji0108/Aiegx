import React, { useState } from 'react';
import { ArrowRight, MessageSquare, X, CheckCircle2, Send } from 'lucide-react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * Contact / Enquiry CTA Section matching Aiegx ContactSection design.
 */
export default function ProductEnquiry({
  productName = 'RZ/G2L Platform',
  onRequestQuote,
  onContactTeam,
}) {
  return (
    <section
      id="product-enquiry"
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-gradient-to-b dark:from-[#0D1733] dark:via-[#101C3D] dark:to-[#0D1733] scroll-mt-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[280px] bg-gradient-to-tr from-[#3285FF]/10 via-[#2DD4F0]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[240px] bg-gradient-to-bl from-[#2DD4F0]/10 via-[#3285FF]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="section-container relative">
        <SectionHeadingContainer
          subheading="ENGINEERING CONSULTATION"
          heading={
            <>
              Looking for the Right{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                Embedded Solution?
              </span>
            </>
          }
          description={`Collaborate with our hardware and BSP engineers on evaluation kits, custom carrier design, or volume pricing for the ${productName}.`}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] shadow-xs">
          <p className="text-sm sm:text-base text-[#52627C] dark:text-[#AAB6D0] leading-relaxed max-w-2xl">
            Speak directly with our embedded engineering team regarding SMARC module selection, custom baseboard development, Yocto BSP customization, or sample hardware evaluation.
          </p>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onRequestQuote}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] hover:from-[#4be0f7] hover:to-[#4392ff] shadow-lg shadow-[#3285FF]/25 hover:shadow-[#2DD4F0]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onContactTeam}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-[#089EC2] dark:text-[#2DD4F0] bg-[#F8FAFD] dark:bg-[#101936] border border-[#C5DDF5] dark:border-[#244277] hover:border-[#089EC2] dark:hover:border-[#2DD4F0] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Our Team</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Shared Interactive Enquiry Modal consistent with ContactSection.jsx.
 */
export function ProductEnquiryModal({
  isOpen,
  onClose,
  initialType = 'Request Quote',
  productName = 'RZ/G2L SMARC SoM',
  documentName = null,
}) {
  if (!isOpen) return null;

  return (
    <EnquiryModalDialog
      key={`${initialType}-${productName}-${documentName || 'none'}`}
      onClose={onClose}
      initialType={initialType}
      productName={productName}
      documentName={documentName}
    />
  );
}

function EnquiryModalDialog({
  onClose,
  initialType,
  productName,
  documentName,
}) {
  const defaultMessage = documentName
    ? `Please send the ${documentName} for ${productName}.`
    : initialType === 'Request Evaluation'
      ? `I would like to request an evaluation kit / sample for ${productName}.`
      : `I would like pricing and lead-time details for ${productName}.`;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: initialType,
    message: defaultMessage,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-enquiry-title"
    >
      <div className="w-full max-w-lg bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] rounded-3xl p-6 sm:p-8 shadow-2xl relative text-[#14213D] dark:text-[#F8FAFC] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 dark:text-white/60 hover:text-slate-800 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close enquiry dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!formSubmitted ? (
          <>
            <div className="flex items-center gap-2 text-xs font-mono text-[#089EC2] dark:text-[#2DD4F0] mb-2 uppercase font-semibold">
              <MessageSquare className="w-4 h-4" />
              <span>{formData.inquiryType}</span>
            </div>

            <h3
              id="product-enquiry-title"
              className="text-xl sm:text-2xl font-bold tracking-tight mb-1.5 text-[#14213D] dark:text-[#F8FAFC]"
            >
              {productName}
            </h3>
            <p className="text-xs text-[#52627C] dark:text-[#AAB6D0] mb-5">
              Share your project timeline, volume expectations, or technical requirements and our embedded team will respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-sm text-[#14213D] dark:text-white focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-sm text-[#14213D] dark:text-white focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Organization name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-sm text-[#14213D] dark:text-white focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                    Enquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-sm text-[#14213D] dark:text-white focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0]"
                  >
                    <option value="Request Quote">Request Quote</option>
                    <option value="Request Evaluation">Request Evaluation Kit</option>
                    <option value="Request Document">Request Documentation</option>
                    <option value="Contact Engineering Team">Contact Engineering Team</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                  Requirements & Message *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-sm text-[#14213D] dark:text-white focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] hover:from-[#4be0f7] hover:to-[#4392ff] shadow-lg shadow-[#3285FF]/25 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#14213D] dark:text-[#F8FAFC]">
              Enquiry Received
            </h3>
            <p className="text-sm text-[#52627C] dark:text-[#AAB6D0] max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name || 'partner'}. Our engineering team has received your{' '}
              <span className="font-semibold text-[#14213D] dark:text-white">{formData.inquiryType.toLowerCase()}</span>{' '}
              for <span className="font-semibold text-[#089EC2] dark:text-[#2DD4F0]">{productName}</span> and will reach out shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
