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
      className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-[#EBF2FC]/80 via-[#F4F8FD] to-[#E5EEFA]/70 dark:bg-[#101936] dark:bg-none border-t border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Ambient Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-400/15 via-cyan-400/10 to-transparent dark:from-[#3478F6]/15 dark:via-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[250px] bg-gradient-to-bl from-cyan-400/15 via-blue-400/10 to-transparent dark:from-[#42D9F5]/10 dark:via-[#3478F6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Horizontal Layout on Desktop, Vertical Stack on Mobile */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Heading & Description */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
              Let's Build Your <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">Next Product</span>
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-[#F5F7FC]/70 leading-relaxed">
              Talk to our engineers for your hardware, solution, or custom development requirements.
            </p>
          </div>

          {/* Right Column: Contact Us Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-700 dark:text-[#101936] dark:bg-gradient-to-r dark:from-[#42D9F5] dark:to-[#3478F6] dark:hover:from-[#38c4de] dark:hover:to-[#2b65cf] shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white dark:bg-[#17264D] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-slate-900 dark:text-white">
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:text-white/60 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close contact dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-[#42D9F5] mb-2 uppercase font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  <span>Engineering Inquiry</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  Speak with Our Engineering Team
                </h3>
                <p className="text-xs text-slate-600 dark:text-white/60 mb-6">
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#101936] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-xs focus:outline-none focus:border-blue-500 dark:focus:border-[#42D9F5]"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#101936] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-xs focus:outline-none focus:border-blue-500 dark:focus:border-[#42D9F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      Project Requirement
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#101936] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-blue-500 dark:focus:border-[#42D9F5]"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#101936] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-xs focus:outline-none focus:border-blue-500 dark:focus:border-[#42D9F5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 dark:text-[#101936] dark:bg-gradient-to-r dark:from-[#42D9F5] dark:to-[#3478F6] hover:opacity-95 shadow-md shadow-blue-500/20 dark:shadow-cyan-500/25 transition-all font-mono flex items-center justify-center gap-2 cursor-pointer"
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
