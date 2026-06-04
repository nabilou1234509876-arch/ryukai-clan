"use client";

import { motion } from "framer-motion";
import { CLAN_CONFIG } from "@/config/clan";
import { DiscIcon as Discord, Users, Radio } from "lucide-react";
import { useEffect, useState } from "react";

export default function DiscordWidget() {
  // We're mocking the Discord API response for now since we need a Server ID and token for real data
  const [data, setData] = useState({
    memberCount: 0,
    presenceCount: 0,
    name: CLAN_CONFIG.name,
  });

  useEffect(() => {
    // In a real app, you would fetch from your API route here:
    // fetch(`/api/discord?id=${CLAN_CONFIG.discordServerId}`)
    
    // Simulating data load
    setTimeout(() => {
      setData({
        memberCount: CLAN_CONFIG.stats.members,
        presenceCount: CLAN_CONFIG.stats.activePlayers,
        name: CLAN_CONFIG.name,
      });
    }, 500);
  }, []);

  return (
    <section className="py-20 bg-ryukai-dark relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl overflow-hidden border-ryukai-blue/30 shadow-[0_0_30px_rgba(0,68,255,0.1)] relative"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left side info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#5865F2] flex items-center justify-center shadow-lg">
                  <Discord size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-3xl text-white tracking-wide uppercase">
                    Join The Server
                  </h3>
                  <p className="text-[#5865F2] font-semibold text-sm tracking-widest uppercase">
                    Official Discord
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 font-body max-w-sm">
                Connect with the community, get the latest announcements, and start your journey towards becoming a member.
              </p>
            </div>
            
            {/* Right side stats & button */}
            <div className="flex flex-col items-center gap-6 w-full md:w-auto">
              <div className="flex gap-8 w-full justify-center bg-black/40 py-4 px-6 rounded-lg border border-white/5">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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
                className="w-full text-center px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-heading font-bold text-lg uppercase tracking-wider rounded transition-colors duration-300 shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:shadow-[0_0_30px_rgba(88,101,242,0.6)]"
              >
                Connect Now
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
