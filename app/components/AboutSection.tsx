"use client";

import { motion } from "framer-motion";
import { CLAN_CONFIG } from "@/config/clan";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex-1 space-y-8"
          >
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white uppercase tracking-wider mb-2">
                Who is <span className="text-gray-400">Ryukai?</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-white box-glow" 
              />
            </div>
            
            <div className="space-y-6 font-body text-gray-300 leading-relaxed text-lg">
              <p>
                Founded on the principles of dominance, strategy, and respect, <strong className="text-white">Ryukai Clan</strong> represents the pinnacle of competitive gameplay in {CLAN_CONFIG.game}. We aren't just players; we are a synchronized unit driven by a singular goal: to rise above the rest.
              </p>
              <p>
                Our community is forged in the fires of intense competition. We value members who possess not only raw mechanical skill, but the tactical mindset and composure required to adapt and conquer in high-stakes environments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="glass-panel p-6 border-l-2 border-l-gray-400">
                <h3 className="font-heading font-bold text-xl text-white uppercase mb-2">Competitive Mindset</h3>
                <p className="text-sm text-gray-400">We train constantly, analyze our flaws, and strive for perfection in every match.</p>
              </div>
              <div className="glass-panel p-6 border-l-2 border-l-white">
                <h3 className="font-heading font-bold text-xl text-white uppercase mb-2">Community Values</h3>
                <p className="text-sm text-gray-400">Toxic behavior has no place here. We respect our allies and honor our opponents.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Image/Banner Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50, filter: "blur(10px)", scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto rounded-lg overflow-hidden glass-panel p-2">
              <div className="absolute inset-0 bg-white/5 mix-blend-overlay z-10" />
              <div className="w-full h-full bg-ryukai-dark rounded flex items-center justify-center border border-ryukai-border relative overflow-hidden">
                {/* Fallback pattern since we don't have an actual image yet */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                </div>
                
                <div className="z-20 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full border-2 border-white flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    <span className="font-heading font-bold text-5xl text-white">R</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white tracking-widest uppercase">Elite Status</h3>
                </div>
                
                {/* Decorative scanning line */}
                <motion.div 
                  animate={{ top: ['-10%', '110%'] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-white/30 shadow-[0_0_20px_rgba(255,255,255,0.5)] z-30"
                />
              </div>
            </div>
            
            {/* Decorative elements behind image */}
            <div className="absolute top-10 -right-10 w-32 h-32 border border-white/20 rounded-full -z-10 animate-[spin_10s_linear_infinite]" />
            <div className="absolute -bottom-5 -left-5 w-48 h-48 border border-white/10 rounded-full -z-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
