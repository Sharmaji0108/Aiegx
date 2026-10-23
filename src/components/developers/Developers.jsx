import React from 'react';
import { 
  Train, 
  Bus, 
  Cctv, 
  Building2, 
  Shield 
} from 'lucide-react';

/**
 * Industries We Serve Component
 * Replaces the previous SDK & Model Compilation section.
 * Displays five core industries in a single horizontal row on desktop:
 * 1. Railways
 * 2. Public Transportation
 * 3. Security & Surveillance
 * 4. Smart City
 * 5. Defense
 */
export default function Developers() {
  const industries = [
    {
      id: 'railways',
      name: 'Railways',
      icon: Train,
      tagline: 'Rolling Stock & Signalling',
      description: 'Next-generation rolling stock control, wayside signalling, predictive track telemetry & onboard passenger information systems.'
    },
    {
      id: 'public-transportation',
      name: 'Public Transportation',
      icon: Bus,
      tagline: 'Fleet & Transit Telematics',
      description: 'Connected fleet telematics, automated fare collection, bus transit monitoring & real-time passenger infotainment displays.'
    },
    {
      id: 'security-surveillance',
      name: 'Security & Surveillance',
      icon: Cctv,
      tagline: 'Edge AI Video Analytics',
      description: 'High-resolution edge video analytics, perimeter intrusion detection, automated optical monitoring & secure access control.'
    },
    {
      id: 'smart-city',
      name: 'Smart City',
      icon: Building2,
      tagline: 'Municipal IoT & Traffic',
      description: 'Intelligent traffic management, municipal IoT sensor grids, smart street lighting & real-time environmental monitoring.'
    },
    {
      id: 'defense',
      name: 'Defense',
      icon: Shield,
      tagline: 'Tactical Edge & Avionics',
      description: 'Ruggedized mission-critical avionics, GPS-denied navigation, secure tactical communications & tactical edge computing.'
    }
  ];

  return (
    <section 
      id="industries" 
      className="py-20 sm:py-28 lg:py-32 relative bg-gradient-to-b from-[#EBF2FC]/70 via-[#F4F8FD] to-[#E5EEFA]/60 dark:bg-[#101936] dark:bg-none border-t border-slate-200/60 dark:border-white/5 scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Anchor alias for backwards-compatible developer links */}
      <div id="developers" className="sr-only" />

      {/* Subtle Ambient Background Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-cyan-400/10 to-transparent dark:from-[#3478F6]/15 dark:via-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-cyan-400/15 via-blue-400/10 to-transparent dark:from-[#42D9F5]/10 dark:via-[#3478F6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading — Centered Horizontally at Top */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Industries <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">We Serve</span>
          </h2>
        </div>

        {/* 5 Industry Cards in a Single Horizontal Row on Desktop */}
        {/* Responsive: 5 cols on lg, 2 or 3 cols on tablet, 1 col or 2 cols on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#17264D]/85 border border-blue-200/80 dark:border-white/10 hover:border-blue-500/70 dark:hover:border-[#42D9F5]/70 p-6 sm:p-7 flex flex-col justify-between items-center text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/15 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Industry Icon Container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50/80 dark:bg-[#101936] text-blue-600 dark:text-[#42D9F5] border border-blue-100 dark:border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#42D9F5] group-hover:to-[#3478F6] group-hover:text-white dark:group-hover:text-[#101936] group-hover:border-transparent group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Industry Label / Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#42D9F5] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  {/* Short Tagline / Category */}
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-[#42D9F5] font-semibold mt-1 block">
                    {item.tagline}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#F5F7FC]/70 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-6 pt-4 w-full border-t border-slate-100 dark:border-white/5 flex items-center justify-center">
                  <div className="w-8 h-1 rounded-full bg-blue-500/20 dark:bg-cyan-400/20 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#42D9F5] group-hover:to-[#3478F6] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
