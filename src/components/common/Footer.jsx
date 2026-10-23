import React, { useState } from 'react';
import Logo from './Logo';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';


export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0b1226] border-t border-white/10 text-white pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#42D9F5]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Branding & Multi-column links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info & Newsletter (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Logo className="mb-4" />

              <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
                Aiegx designs and manufactures ultra-low-power neural silicon, rugged industrial edge gateways, and real-time embedded software for autonomous systems.
              </p>
            </div>

            {/* Newsletter Input */}
            <div>
              <span className="text-xs font-mono uppercase text-[#42D9F5] tracking-wider block mb-2 font-semibold">
                Subscribe to Silicon Dispatch
              </span>
              <p className="text-xs text-white/60 mb-3">
                Monthly technical benchmarks, silicon errata notes, and SDK releases.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed! Check your inbox for technical briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@enterprise.ai"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#17264D] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#42D9F5]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl font-semibold text-xs text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] hover:opacity-90 transition-opacity flex items-center gap-1.5 font-mono"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Join</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Column 1: Hardware Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#42D9F5] font-bold">
              Hardware
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#products" className="hover:text-[#42D9F5] transition-colors">NeuroCore X1 Module</a></li>
              <li><a href="#products" className="hover:text-[#42D9F5] transition-colors">Synapse Gateway Pro</a></li>
              <li><a href="#products" className="hover:text-[#42D9F5] transition-colors">OmniVision Sensor Pod</a></li>
              <li><a href="#products" className="hover:text-[#42D9F5] transition-colors">QuantumEdge Dev Board</a></li>
              <li><a href="#products" className="hover:text-[#42D9F5] transition-colors">Evaluation Accessories</a></li>
              <li><a href="#products" className="hover:text-[#42D9F5] transition-colors">Custom ASIC Inquiries</a></li>
            </ul>
          </div>

          {/* Links Column 2: Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#42D9F5] font-bold">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#solutions" className="hover:text-[#42D9F5] transition-colors">Autonomous Robotics</a></li>
              <li><a href="#solutions" className="hover:text-[#42D9F5] transition-colors">Embedded Computer Vision</a></li>
              <li><a href="#solutions" className="hover:text-[#42D9F5] transition-colors">Predictive Telemetry</a></li>
              <li><a href="#solutions" className="hover:text-[#42D9F5] transition-colors">Zero-Trust Fleet OTA</a></li>
              <li><a href="#solutions" className="hover:text-[#42D9F5] transition-colors">Sub-Watt Micro-Compute</a></li>
              <li><a href="#applications" className="hover:text-[#42D9F5] transition-colors">Industrial Case Studies</a></li>
            </ul>
          </div>

          {/* Links Column 3: Developers & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#42D9F5] font-bold">
              Developers & Legal
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#developers" className="hover:text-[#42D9F5] transition-colors">Aiegx Python / C++ SDK</a></li>
              <li><a href="#developers" className="hover:text-[#42D9F5] transition-colors">Quantized Model Zoo</a></li>
              <li><a href="#developers" className="hover:text-[#42D9F5] transition-colors">ROS 2 Humble / Iron Drivers</a></li>
              <li><a href="#developers" className="hover:text-[#42D9F5] transition-colors">Hardware Errata & Specs</a></li>
              <li><a href="#why-aiegx" className="hover:text-[#42D9F5] transition-colors">Security Whitepaper</a></li>
              <li><a href="#why-aiegx" className="hover:text-[#42D9F5] transition-colors">ISO 9001 / IEC 62443 Compliance</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Compliance & Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
            <span>&copy; {new Date().getFullYear()} Aiegx Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <a href="#why-aiegx" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="hidden sm:inline">&bull;</span>
            <a href="#why-aiegx" className="hover:text-white transition-colors">Terms of Hardware Procurement</a>
            <span className="hidden sm:inline">&bull;</span>
            <a href="#why-aiegx" className="hover:text-white transition-colors">Supply Chain Statement</a>
          </div>

          {/* Certifications and Social Icons */}
          <div className="flex items-center gap-4">
            {/* Cert Pills */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/60 border border-white/10 px-3 py-1 rounded-full bg-[#17264D]/50 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#42D9F5]" />
              <span>ISO 9001 &bull; CE &bull; FCC &bull; RoHS</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 text-white/60">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg hover:text-[#42D9F5] hover:bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg hover:text-[#42D9F5] hover:bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg hover:text-[#42D9F5] hover:bg-white/5 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
