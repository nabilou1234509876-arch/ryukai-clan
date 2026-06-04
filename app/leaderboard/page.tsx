import PageHeader from "@/app/components/PageHeader";
import { LEADERBOARD } from "@/config/clan";
import Image from "next/image";
import { Trophy, Flame, Star, Shield } from "lucide-react";

export default function LeaderboardPage() {
  const getBadgeIcon = (badge?: string) => {
    switch (badge) {
      case "Champion": return <Trophy size={16} className="text-white" />;
      case "Elite": return <Flame size={16} className="text-gray-300" />;
      case "Rising Star": return <Star size={16} className="text-gray-400" />;
      default: return <Shield size={16} className="text-gray-500" />;
    }
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]";
    if (rank === 2) return "text-gray-300 drop-shadow-[0_0_8px_rgba(209,213,219,0.5)]";
    if (rank === 3) return "text-gray-400 drop-shadow-[0_0_8px_rgba(156,163,175,0.5)]";
    return "text-ryukai-light";
  };

  return (
    <div>
      <PageHeader title="Leaderboard" subtitle="The Elite Rankings" />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          
          {/* Top 3 Podium (Optional, simple layout here) */}
          <div className="hidden md:flex justify-center items-end gap-6 mb-16 h-64">
            {/* Rank 2 */}
            {LEADERBOARD.length > 1 && (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-gray-300 mb-4 overflow-hidden bg-ryukai-dark flex items-center justify-center">
                   <div className="text-2xl font-bold font-heading text-gray-300">{LEADERBOARD[1].username.charAt(0)}</div>
                </div>
                <div className="font-heading font-bold text-white text-lg">{LEADERBOARD[1].username}</div>
                <div className="text-ryukai-blue font-bold">{LEADERBOARD[1].points} PTS</div>
                <div className="w-24 h-32 bg-gradient-to-t from-gray-300/20 to-gray-300/5 border border-gray-300/30 mt-4 rounded-t-lg flex justify-center pt-4">
                  <span className="font-heading font-bold text-4xl text-gray-300">2</span>
                </div>
              </div>
            )}
            
            {/* Rank 1 */}
            {LEADERBOARD.length > 0 && (
              <div className="flex flex-col items-center -translate-y-8">
                <Trophy size={32} className="text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                <div className="w-24 h-24 rounded-full border-4 border-white mb-4 overflow-hidden bg-ryukai-dark shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center">
                  <div className="text-3xl font-bold font-heading text-white">{LEADERBOARD[0].username.charAt(0)}</div>
                </div>
                <div className="font-heading font-bold text-white text-xl">{LEADERBOARD[0].username}</div>
                <div className="text-white font-bold">{LEADERBOARD[0].points} PTS</div>
                <div className="w-32 h-40 bg-gradient-to-t from-white/20 to-white/5 border border-white/30 mt-4 rounded-t-lg flex justify-center pt-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span className="font-heading font-bold text-5xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">1</span>
                </div>
              </div>
            )}
            
            {/* Rank 3 */}
            {LEADERBOARD.length > 2 && (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-gray-400 mb-4 overflow-hidden bg-ryukai-dark flex items-center justify-center">
                  <div className="text-2xl font-bold font-heading text-gray-400">{LEADERBOARD[2].username.charAt(0)}</div>
                </div>
                <div className="font-heading font-bold text-white text-lg">{LEADERBOARD[2].username}</div>
                <div className="text-gray-400 font-bold">{LEADERBOARD[2].points} PTS</div>
                <div className="w-24 h-24 bg-gradient-to-t from-gray-400/20 to-gray-400/5 border border-gray-400/30 mt-4 rounded-t-lg flex justify-center pt-4">
                  <span className="font-heading font-bold text-4xl text-gray-400">3</span>
                </div>
              </div>
            )}
          </div>

          {/* List */}
          <div className="space-y-3">
            {/* Header row */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-ryukai-border text-sm font-heading font-bold text-gray-500 uppercase tracking-widest">
              <div className="col-span-1 text-center">Rank</div>
              <div className="col-span-5">Player</div>
              <div className="col-span-2 text-center">Title</div>
              <div className="col-span-2 text-right">Wins</div>
              <div className="col-span-2 text-right">Points</div>
            </div>

            {/* Entries */}
            {LEADERBOARD.map((entry) => (
              <div 
                key={entry.rank}
                className="glass-panel hover:bg-ryukai-card transition-colors duration-300 p-4 rounded-lg flex flex-col md:grid md:grid-cols-12 gap-4 items-center group relative overflow-hidden"
              >
                {/* Background highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-ryukai-blue/0 via-ryukai-blue/5 to-ryukai-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <div className={`col-span-1 font-heading font-bold text-3xl w-full md:w-auto text-center ${getRankColor(entry.rank)}`}>
                  #{entry.rank}
                </div>
                
                <div className="col-span-5 flex items-center gap-4 w-full">
                  <div className="w-12 h-12 rounded-full bg-ryukai-dark border border-ryukai-border flex items-center justify-center font-heading font-bold text-white">
                    {entry.username.charAt(0)}
                  </div>
                  <span className="font-heading font-bold text-xl text-white tracking-wide">{entry.username}</span>
                </div>
                
                <div className="col-span-2 flex items-center justify-center w-full">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-ryukai-dark/50 border border-ryukai-border">
                    {getBadgeIcon(entry.badge)}
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-300">{entry.badge || "Member"}</span>
                  </div>
                </div>
                
                <div className="col-span-2 flex flex-col md:block items-center w-full md:text-right">
                  <span className="md:hidden text-xs text-gray-500 font-heading uppercase mb-1">Wins</span>
                  <span className="font-body text-gray-300">{entry.wins.toLocaleString()}</span>
                </div>
                
                <div className="col-span-2 flex flex-col md:block items-center w-full md:text-right">
                  <span className="md:hidden text-xs text-gray-500 font-heading uppercase mb-1">Points</span>
                  <span className="font-heading font-bold text-white text-xl">{entry.points.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
