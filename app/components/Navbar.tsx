"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CLAN_CONFIG } from "@/config/clan";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Overview", path: "/overview" },
  { name: "Tryouts", path: "/tryouts" },
  { name: "Leaderboard", path: "/leaderboard" },
  { name: "Rules", path: "/rules" },
  { name: "Staff", path: "/staff" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-ryukai-blue/50 flex items-center justify-center group-hover:box-glow transition-all duration-300 overflow-hidden">
            <img src={CLAN_CONFIG.logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-wider text-white uppercase">
            {CLAN_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-4 py-2 font-heading font-medium tracking-wide uppercase text-sm transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white box-glow"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href={CLAN_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white hover:bg-gray-200 text-black font-heading font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-300 hover:box-glow"
          >
            Join Discord
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-t-0 flex flex-col items-center py-6 gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading font-medium tracking-wide uppercase text-lg ${
                  pathname === link.path ? "text-white text-glow" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CLAN_CONFIG.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-white text-black font-heading font-bold uppercase tracking-wider rounded-sm box-glow"
            >
              Join Discord
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
