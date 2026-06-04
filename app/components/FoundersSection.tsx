"use client";

import { motion } from "framer-motion";
import { FOUNDERS } from "@/config/clan";
import Image from "next/image";
import { DiscIcon as Discord, ExternalLink } from "lucide-react";

export default function FoundersSection() {
  return (
    <section className="py-24 relative z-10 bg-black/20 border-t border-ryukai-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl md:text-5xl text-white uppercase tracking-wider mb-4"
          >
            The <span className="text-ryukai-blue">Founders</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-ryukai-blue box-glow mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FOUNDERS.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel group relative overflow-hidden p-1 rounded-lg"
            >
              {/* Card border gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-ryukai-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-ryukai-dark/80 p-6 h-full rounded flex flex-col items-center relative z-10 border border-white/5 group-hover:border-ryukai-blue/30 transition-colors duration-300">
                
                {/* Avatar */}
                <div className="relative w-28 h-28 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-ryukai-blue/30 group-hover:border-ryukai-blue scale-[1.1] transition-all duration-300 group-hover:scale-100" />
                  <div className="w-full h-full rounded-full overflow-hidden bg-ryukai-dark border border-ryukai-border flex items-center justify-center relative">
                    <Discord size={40} className="text-gray-600 absolute" />
                    
                    {founder.avatar && (
                      <img 
                        src={founder.avatar} 
                        alt={founder.displayName} 
                        className="w-full h-full object-cover relative z-10"
                      />
                    )}
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-ryukai-dark rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-ryukai-blue rounded-full box-glow" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-1 mb-6">
                  <h3 className="font-heading font-bold text-2xl text-white uppercase tracking-wide">
                    {founder.displayName}
                  </h3>
                  <p className="text-ryukai-blue font-heading uppercase tracking-widest text-sm font-semibold">
                    {founder.role || "Founder"}
                  </p>
                  <p className="text-gray-500 font-body text-sm mt-2">
                    @{founder.username}
                  </p>
                </div>

                {/* Profile Link */}
                <div className="mt-auto w-full pt-4 border-t border-ryukai-border">
                  <a
                    href={founder.discordProfileUrl || `https://discord.com/users/${founder.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <Discord size={16} />
                    <span>View Profile</span>
                    <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
