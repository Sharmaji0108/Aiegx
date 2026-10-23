import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhyAiegx() {
  const leftFeatures = [
    {
      title: 'Robust Quality',
      description: 'Designed to support dependable operation in demanding embedded computing applications.'
    },
    {
      title: 'Platform Scalability',
      description: 'Build on flexible hardware platforms designed to support evolving product requirements.'
    },
    {
      title: 'Operating Systems',
      description: 'Explore software platforms and operating system options suited to embedded product development.'
    },
    {
      title: 'Product Lifetime',
      description: 'Build long-term embedded products with maintainable platforms and lifecycle planning.'
    }
  ];

  const rightFeatures = [
    {
      title: 'Supreme Performance',
      description: 'Explore computing platforms designed to support demanding embedded applications.'
    },
    {
      title: 'Ease of Use',
      description: 'Discover integrated hardware and software options that simplify development workflows.'
    },
    {
      title: 'Industry-Leading Support',
      description: 'Provide clear documentation, useful resources, and accessible technical assistance.'
    },
    {
      title: 'Extensive Developer Resources',
      description: 'Build with helpful technical documentation, development guides, and software resources.'
    }
  ];

  return (
    <section id="why-aiegx" className="py-24 sm:py-32 relative bg-[#101936] border-t border-white/5 scroll-mt-20">
      {/* Anchor alias for solutions links */}
      <div id="solutions" className="sr-only" />

      {/* Subtle Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-r from-[#3478F6]/15 via-[#42D9F5]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading — Centered Serif Matching Visual Reference */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Why Aiegx
          </h2>
        </div>

        {/* Three-Column Layout: 4 Features (Left) | Hardware Product Image + Learn More (Center) | 4 Features (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: 4 Feature Items */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 order-1">
            {leftFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#42D9F5] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#F5F7FC]/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Hardware Product Image & Learn More Button */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-6 lg:py-0 order-2">
            <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] mb-8">
              {/* Soft Ambient Product Under-Glow */}
              <div className="absolute inset-0 bg-[#42D9F5]/15 rounded-full blur-[50px] pointer-events-none" />
              
              <img 
                src="/images/why_aiegx_product.png" 
                alt="Aiegx Embedded Hardware Silicon Module" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Learn More Button Styled with Cyan-Blue Gradient matching dark theme */}
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] hover:from-[#38c4de] hover:to-[#2b65cf] shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: 4 Feature Items */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 order-3">
            {rightFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#42D9F5] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#F5F7FC]/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
