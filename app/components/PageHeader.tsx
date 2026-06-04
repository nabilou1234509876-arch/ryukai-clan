"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden border-b border-ryukai-border">
      {/* Background elements */}
      <div className="absolute inset-0 bg-ryukai-dark z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-white/5 rounded-full blur-[100px] z-0 pointer-events-none" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-5xl md:text-6xl text-white uppercase tracking-widest mb-4"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-gray-400 uppercase tracking-[0.2em] text-sm font-semibold mb-6"
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-white mx-auto box-glow"
        />
      </div>
    </div>
  );
}
