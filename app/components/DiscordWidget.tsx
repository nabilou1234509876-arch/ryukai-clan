"use client";

import { motion } from "framer-motion";
import { CLAN_CONFIG } from "@/config/clan";
import { DiscIcon as Discord, Users, Radio } from "lucide-react";
import { useEffect, useState } from "react";

export default function DiscordWidget() {
  const [data, setData] = useState({
    memberCount: CLAN_CONFIG.stats.members,
    presenceCount: CLAN_CONFIG.stats.activePlayers,
    name: CLAN_CONFIG.name,
  });

  return (
    <section className="py-20 bg-ryukai-dark relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="glass-panel rounded-2xl overflow-hidden border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] relative"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left side info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-ryukai-dark border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] overflow-hidden">
                  <img src={CLAN_CONFIG.discordIcon} alt={CLAN_CONFIG.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-3xl text-white tracking-wide uppercase">
                    {data.name}
                  </h3>
                  <p className="text-gray-400 font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
                    <Discord size={14} /> Official Discord
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 font-body max-w-sm">
                Connect with the community, get the latest announcements, and start your journey towards becoming a member.
              </p>
            </div>
            
            {/* Right side stats & button */}
            <div className="flex flex-col items-center gap-6 w-full md:w-auto">
              <div className="flex gap-8 w-full justify-center bg-black/60 py-4 px-6 rounded-lg border border-white/10">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse box-glow" />
                    <span className="font-heading uppercase tracking-widest text-xs">Online</span>
                  </div>
                  <span className="font-body font-bold text-2xl text-white">{data.presenceCount}</span>
                </div>
                
                <div className="w-px h-12 bg-white/10" />
                
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users size={12} />
                    <span className="font-heading uppercase tracking-widest text-xs">Members</span>
                  </div>
                  <span className="font-body font-bold text-2xl text-white">{data.memberCount}</span>
                </div>
              </div>
              
              <a
                href={CLAN_CONFIG.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full text-center px-8 py-4 bg-white text-black font-heading font-bold text-lg uppercase tracking-wider rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] overflow-hidden"
              >
                <span className="relative z-10">Connect Now</span>
                <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
