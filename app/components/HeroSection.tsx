"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CLAN_CONFIG } from "@/config/clan";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(cw: number, ch: number) {
        this.x = Math.random() * cw;
        this.y = Math.random() * ch;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update(cw: number, ch: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > cw) this.x = 0;
        else if (this.x < 0) this.x = cw;
        if (this.y > ch) this.y = 0;
        else if (this.y < 0) this.y = ch;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(0, 68, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-50"
      />
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-ryukai-dark z-0 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-ryukai-blue/20 rounded-full blur-[120px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Main Logo Container */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-ryukai-blue/50 flex items-center justify-center relative bg-ryukai-dark shadow-[0_0_50px_rgba(0,68,255,0.4)]">
            <span className="font-heading font-bold text-6xl md:text-8xl text-white text-glow">R</span>
            
            {/* Spinning ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-ryukai-blue/30 border-t-ryukai-blue border-l-ryukai-blue"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-ryukai-blue/20"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-widest text-white uppercase mb-4 text-glow"
        >
          {CLAN_CONFIG.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-2xl text-ryukai-light/80 mb-10 max-w-2xl font-light tracking-wide"
        >
          {CLAN_CONFIG.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link
            href="/tryouts"
            className="group relative px-8 py-4 bg-ryukai-blue text-white font-heading font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden box-glow"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Join Clan <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          
          <a
            href={CLAN_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 glass-panel text-white font-heading font-bold text-lg uppercase tracking-wider rounded-sm hover:border-ryukai-blue/80 hover:bg-ryukai-blue/10 transition-all duration-300"
          >
            Join Discord
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest font-heading text-gray-500">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-ryukai-blue to-transparent"
        />
      </motion.div>
    </section>
  );
}
