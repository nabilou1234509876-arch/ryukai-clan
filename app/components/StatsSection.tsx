"use client";

import { motion } from "framer-motion";
import { Users, Trophy, Activity, Target } from "lucide-react";
import { CLAN_CONFIG } from "@/config/clan";
import { useEffect, useState } from "react";

import React from "react";

// Simple counter animation hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
}

function StatCard({ icon: Icon, value, label, delay }: { icon: React.ElementType, value: number, label: string, delay: number }) {
  const count = useCounter(value);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="glass-panel p-6 flex flex-col items-center justify-center text-center group hover:border-white/30 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      
      <div className="w-16 h-16 rounded-full bg-ryukai-dark border border-ryukai-border flex items-center justify-center mb-4 group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 relative z-10">
        <Icon className="text-white" size={28} />
      </div>
      
      <div className="font-heading font-bold text-4xl text-white mb-2 relative z-10">
        {count}{label === "Clan Rank" ? "" : "+"}
      </div>
      
      <div className="font-body text-sm text-gray-400 uppercase tracking-widest relative z-10">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard icon={Users} value={CLAN_CONFIG.stats.members} label="Members" delay={0.1} />
          <StatCard icon={Trophy} value={CLAN_CONFIG.stats.wins} label="Wins" delay={0.2} />
          <StatCard icon={Activity} value={CLAN_CONFIG.stats.activePlayers} label="Active Players" delay={0.3} />
          <StatCard icon={Target} value={CLAN_CONFIG.stats.clanRank} label="Clan Rank" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
