import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  X, 
  CheckCircle2,
  Send 
} from 'lucide-react';

/**
 * ContactSection Component
 * Positioned immediately after "Our Engineering Capabilities" and before the footer.
 * Features a clean horizontal layout on desktop with the heading and description on the left
 * and the "Contact Us →" button on the right.
 * Responsive: Stacks vertically on mobile.
 */
export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Hardware Design (SoM / SBC / Carrier)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Hardware Design (SoM / SBC / Carrier)',
        message: ''
      });
    }, 300);
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 lg:py-24 relative bg-[#F5F8FC] dark:bg-gradient-to-b dark:from-[#0D1733] dark:via-[#101C3D] dark:to-[#0D1733] scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Ambient Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-[#3285FF]/10 via-[#2DD4F0]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[250px] bg-gradient-to-bl from-[#2DD4F0]/10 via-[#3285FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Section Content Wrapper */}
      <div className="section-container relative">
        {/* Section Heading Banner */}
        <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1733] tracking-tight leading-[1.18]">
            Let's Build Your <span className="bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(13,23,51,0.30)]">Next Product</span>
          </h2>
        </div>

        {/* Action Row: Description & Contact Us Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] shadow-xs">
          <p className="text-base sm:text-lg text-[#52627C] dark:text-[#AAB6D0] leading-relaxed max-w-2xl">
            Talk to our engineers about your hardware, solution, or custom development requirements.
          </p>
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] hover:from-[#4be0f7] hover:to-[#4392ff] shadow-lg shadow-[#3285FF]/25 hover:shadow-[#2DD4F0]/35 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
              aria-label="Contact Us to build your next product"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Contact & Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] rounded-3xl p-6 sm:p-8 shadow-2xl relative text-[#14213D] dark:text-[#F8FAFC]">
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 text-slate-400 dark:text-white/60 hover:text-slate-800 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close contact dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <>
                <div className="flex items-center gap-2 text-xs font-mono text-[#089EC2] dark:text-[#2DD4F0] mb-2 uppercase font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  <span>Engineering Inquiry</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-2 text-[#14213D] dark:text-[#F8FAFC]">
                  Speak with Our Engineering Team
                </h3>
                <p className="text-xs text-[#52627C] dark:text-[#AAB6D0] mb-6">
                  Share your hardware, BSP, camera pipeline, or edge AI specifications with our technical team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#EDF2F7] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-xs focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex.vance@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#EDF2F7] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-xs focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      Project Requirement
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#EDF2F7] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0]"
                    >
                      <option value="Hardware Design (SoM / SBC / Carrier)">Hardware Design (SoM / SBC / Carrier)</option>
                      <option value="Linux / Yocto BSP & Driver Development">Linux / Yocto BSP & Driver Development</option>
                      <option value="Camera & Multimedia Integration">Camera & Multimedia Integration</option>
                      <option value="Edge AI Application Development">Edge AI Application Development</option>
                      <option value="Complete Turnkey Solution">Complete Turnkey Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      Project Details & Requirements (Optional)
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your hardware architecture, target timeline, or interfaces required..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#EDF2F7] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-xs focus:outline-none focus:border-[#089EC2] dark:focus:border-[#2DD4F0]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] hover:opacity-95 shadow-md shadow-[#2DD4F0]/25 transition-all font-mono flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Technical Inquiry</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  Inquiry Received
                </h3>
                <p className="text-xs text-slate-600 dark:text-white/70 max-w-sm mx-auto mb-6">
                  Thank you for reaching out. An Aiegx engineering specialist has received your requirements and will follow up with you directly.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-[#101936] dark:hover:bg-[#101936]/80 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
