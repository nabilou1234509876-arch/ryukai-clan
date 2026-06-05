import PageHeader from "@/app/components/PageHeader";
import { CLAN_CONFIG } from "@/config/clan";
import { Shield, Target, Zap, Users } from "lucide-react";

export default function OverviewPage() {
  return (
    <div>
      <PageHeader title="Overview" subtitle="The Ryukai Philosophy" />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* History */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 border border-white/30 rounded flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <h2 className="font-heading font-bold text-3xl text-white uppercase tracking-wider">Clan History</h2>
            </div>
            <div className="glass-panel p-8 font-body text-gray-300 leading-relaxed space-y-4">
              <p>
                Ryukai Clan was forged by a collective of elite players who sought more than just casual gameplay. We recognized that true dominance in <strong>{CLAN_CONFIG.game}</strong> requires unparalleled teamwork, rigorous practice, and an unwavering competitive spirit.
              </p>
              <p>
                From our humble beginnings, we have risen through the ranks by consistently proving our worth in tournaments, scrimmages, and ranked matchmaking. Our history is written by the victories we secure and the legacy our members leave behind.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 border border-white/30 rounded flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="font-heading font-bold text-3xl text-white uppercase tracking-wider">Our Mission</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 border-t-2 border-t-white">
                <h3 className="font-heading font-bold text-xl text-white uppercase mb-3">Dominate the Scene</h3>
                <p className="text-gray-400 text-sm">To be recognized universally as the most formidable and skilled clan in the game. We play to win, and we prepare endlessly to ensure we do.</p>
              </div>
              <div className="glass-panel p-6 border-t-2 border-t-white">
                <h3 className="font-heading font-bold text-xl text-white uppercase mb-3">Develop Talent</h3>
                <p className="text-gray-400 text-sm">We don&apos;t just recruit the best; we build them. Our training regimens and veteran mentorship program elevate good players into great ones.</p>
              </div>
            </div>
          </section>

          {/* Requirements & Expectations */}
          {/* Expectations */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 border border-white/30 rounded flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <h2 className="font-heading font-bold text-3xl text-white uppercase tracking-wider">Expectations</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start glass-panel p-6 rounded">
                <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white uppercase">Active Participation</h4>
                  <p className="text-gray-400 text-sm mt-1">Members must be active in both the Discord server and the game. Extended unexcused absences will result in removal.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start glass-panel p-6 rounded">
                <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white uppercase">Continuous Improvement</h4>
                  <p className="text-gray-400 text-sm mt-1">Complacency is our enemy. All members are expected to actively work on improving their mechanics and game sense.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start glass-panel p-6 rounded">
                <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white uppercase">Professional Representation</h4>
                  <p className="text-gray-400 text-sm mt-1">When wearing the Ryukai tag, you represent all of us. Toxic behavior, exploiting, or unsportsmanlike conduct is strictly forbidden.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
