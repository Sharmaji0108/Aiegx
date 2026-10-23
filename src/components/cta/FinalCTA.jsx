import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  MessageSquare, 
  CheckCircle,
  X
} from 'lucide-react';

export default function FinalCTA() {
  const [consultModal, setConsultModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section className="py-24 sm:py-32 relative bg-[#101936] overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#3478F6]/20 via-[#42D9F5]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#17264D]/90 via-[#101936] to-[#17264D]/80 border border-[#42D9F5]/40 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          {/* Subtle Cyber Grid Accent */}
          <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101936] border border-white/10 text-xs font-mono text-[#42D9F5] uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Accelerate Your Product Roadmap
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Ready to Deploy <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">Intelligent Edge Hardware?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F5F7FC]/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Order evaluation kits with instant shipment, or collaborate with our silicon architects to customize edge intelligence for your autonomous system.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-12">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] hover:from-[#38c4de] hover:to-[#2b65cf] shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Order Developer Kit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setConsultModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#42D9F5]" />
                <span>Schedule Architecture Consultation</span>
              </button>
            </div>

            {/* Enterprise Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-xs text-white/60 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#42D9F5]" />
                <span>30-Day Eval Guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#42D9F5]" />
                <span>Dedicated FAE Engineer</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#42D9F5]" />
                <span>Mutual NDA Protected</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#42D9F5]" />
                <span>Global Express Logistics</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Consultation Request Modal */}
      {consultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-[#17264D] border border-[#42D9F5]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white">
            <button
              onClick={() => { setConsultModal(false); setFormSubmitted(false); }}
              className="absolute top-5 right-5 p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <>
                <div className="flex items-center gap-2 text-xs font-mono text-[#42D9F5] mb-2 uppercase font-semibold">
                  <Cpu className="w-4 h-4" />
                  <span>Technical Consultation Request</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Speak with an Aiegx Silicon Architect</h3>
                <p className="text-xs text-white/60 mb-6">Discuss neural model quantization, power budgets, and custom carrier board specifications.</p>

                <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Full Name & Title</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Alex Vance, Principal Robotics Engineer"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#101936] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#42D9F5]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex.vance@robotics-fleet.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#101936] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#42D9F5]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Deployment Application</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl bg-[#101936] border border-white/10 text-white text-xs focus:outline-none focus:border-[#42D9F5]"
                    >
                      <option>Autonomous Mobile Robots (AMR)</option>
                      <option>Industrial Computer Vision & Inspection</option>
                      <option>Medical Diagnostic Instruments</option>
                      <option>Critical Infrastructure & Power Grid</option>
                      <option>Aerospace / Defense Telemetry</option>
                      <option>Custom Embedded Silicon / OEM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Target Volume & Architecture Requirements</label>
                    <textarea
                      rows="3"
                      placeholder="Describe target inferencing models (e.g. YOLO, Transformers), latency requirements, and expected device quantity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#101936] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#42D9F5]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] hover:opacity-95 shadow-md shadow-cyan-500/25 transition-opacity font-mono"
                  >
                    Submit Technical Briefing Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Request Transmitted Successfully</h3>
                <p className="text-xs text-white/70 max-w-sm mx-auto mb-6">
                  An Aiegx Field Application Engineer (FAE) has been assigned to your briefing. You will receive an invitation within 4 business hours.
                </p>
                <button
                  onClick={() => { setConsultModal(false); setFormSubmitted(false); }}
                  className="px-6 py-2 rounded-xl text-xs font-semibold text-white bg-[#101936] hover:bg-[#101936]/80 border border-white/10"
                >
                  Return to Website
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
