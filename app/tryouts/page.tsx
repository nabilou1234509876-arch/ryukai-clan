import PageHeader from "@/app/components/PageHeader";
import { CLAN_CONFIG } from "@/config/clan";
import { ClipboardList, Swords, Medal, ArrowRight } from "lucide-react";

export default function TryoutsPage() {
  return (
    <div>
      <PageHeader title="Tryouts" subtitle="Prove Your Worth" />
      
      <div className="container mx-auto px-6 py-24">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xl text-gray-300 font-body leading-relaxed">
            Ryukai Clan does not accept everyone. Our selection process is rigorous and designed to find players who possess not only the mechanical skill but the tactical mindset required to fight alongside us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          
          {/* Step 1 */}
          <div className="glass-panel p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-ryukai-border group-hover:bg-white transition-colors duration-300" />
            <div className="text-6xl font-heading font-bold text-white/5 absolute -top-4 -right-2">01</div>
            
            <div className="w-14 h-14 bg-ryukai-dark border border-ryukai-border rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <ClipboardList size={28} />
            </div>
            
            <h3 className="font-heading font-bold text-2xl text-white uppercase mb-3">The Application</h3>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Join our Discord server and submit a formal application. You must meet our minimum requirements regarding age, playtime, and baseline stats before proceeding.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-panel p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-ryukai-border group-hover:bg-white transition-colors duration-300" />
            <div className="text-6xl font-heading font-bold text-white/5 absolute -top-4 -right-2">02</div>
            
            <div className="w-14 h-14 bg-ryukai-dark border border-ryukai-border rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <Swords size={28} />
            </div>
            
            <h3 className="font-heading font-bold text-2xl text-white uppercase mb-3">The Evaluation</h3>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              If accepted, you will enter a 1v1 and team combat evaluation phase against our Trial Managers. We assess mechanics, positioning, and decision making under pressure.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-panel p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-ryukai-border group-hover:bg-white transition-colors duration-300" />
            <div className="text-6xl font-heading font-bold text-white/5 absolute -top-4 -right-2">03</div>
            
            <div className="w-14 h-14 bg-ryukai-dark border border-ryukai-border rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <Medal size={28} />
            </div>
            
            <h3 className="font-heading font-bold text-2xl text-white uppercase mb-3">The Trial Phase</h3>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Candidates who pass the evaluation receive the 'Trial' role for 1-2 weeks. You will participate in clan events to prove your activity and cultural fit before gaining full membership.
            </p>
          </div>

        </div>

        {/* Requirements & Action */}
        <div className="max-w-4xl mx-auto glass-panel border border-white/30 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h2 className="font-heading font-bold text-3xl text-white uppercase mb-4">Minimum Requirements</h2>
              <ul className="space-y-3 font-body text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Must have Discord and a working microphone.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Must be active at least 4 days a week.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Willingness to learn and take constructive criticism.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>No history of exploiting or severe toxicity.</span>
                </li>
              </ul>
            </div>
            
            <div className="w-full md:w-auto">
              <a 
                href={CLAN_CONFIG.discordInvite} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-white text-black font-heading font-bold text-xl uppercase tracking-wider rounded box-glow hover:bg-gray-200 transition-all"
              >
                Apply Now <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
