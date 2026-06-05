"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CLAN_CONFIG } from "@/config/clan";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

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
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
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
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-50"
      />
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-ryukai-dark z-0 opacity-70" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-white rounded-full blur-[120px] z-0 pointer-events-none" 
      />

      {/* Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Main Logo Container */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/20 flex items-center justify-center relative bg-black shadow-[0_0_60px_rgba(255,255,255,0.15)] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500 z-0" />
            <img 
              src={CLAN_CONFIG.logo} 
              alt="Ryukai Logo" 
              className="w-full h-full object-contain relative z-10 p-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
            />
            
            {/* Spinning ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-white/10 border-t-white/30 border-l-white/30"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-white/10"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            className="group relative px-8 py-4 bg-white text-black font-heading font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden box-glow"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Join Clan <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          
          <a
            href={CLAN_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 glass-panel text-white font-heading font-bold text-lg uppercase tracking-wider rounded-sm hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Join Discord
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest font-heading text-gray-500">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
}
