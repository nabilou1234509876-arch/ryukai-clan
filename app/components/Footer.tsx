import Link from "next/link";
import { CLAN_CONFIG } from "@/config/clan";
import { DiscIcon as Discord, Gamepad2, PlaySquare, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ryukai-border bg-ryukai-dark/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-ryukai-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-ryukai-blue/20 border border-ryukai-blue/50 flex items-center justify-center">
                <span className="font-heading font-bold text-lg text-white">R</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-wider text-white uppercase">
                {CLAN_CONFIG.name}
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm font-body text-sm leading-relaxed">
              {CLAN_CONFIG.tagline} A premier competitive clan in {CLAN_CONFIG.game}. Striving for excellence, respect, and dominance.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={CLAN_CONFIG.socialLinks.discord} className="text-gray-400 hover:text-ryukai-blue transition-colors" target="_blank" rel="noreferrer">
                <Discord size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ryukai-blue transition-colors">
                <PlaySquare size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ryukai-blue transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ryukai-blue transition-colors">
                <Gamepad2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/overview" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/tryouts" className="hover:text-white transition-colors">Tryouts</Link></li>
              <li><Link href="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link></li>
              <li><Link href="/rules" className="hover:text-white transition-colors">Rules</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm">Connect</h4>
            <p className="text-sm text-gray-400 mb-4">
              Join our community to participate in tryouts and events.
            </p>
            <a
              href={CLAN_CONFIG.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-ryukai-blue/10 border border-ryukai-blue/50 text-ryukai-blue hover:bg-ryukai-blue hover:text-white font-heading font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-300"
            >
              Discord Server
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ryukai-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-body">
          <p>© {currentYear} {CLAN_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
