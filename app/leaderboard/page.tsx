import PageHeader from "@/app/components/PageHeader";
import { LEADERBOARD } from "@/config/clan";
import { Trophy, Flame, Star, Shield, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { getStatusColor } from "@/app/components/utils";

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
                   {LEADERBOARD[1].avatar ? (
                     <img src={LEADERBOARD[1].avatar} alt={LEADERBOARD[1].displayName} className="w-full h-full object-cover" />
                   ) : (
                     <div className="text-2xl font-bold font-heading text-gray-300">{LEADERBOARD[1].displayName.charAt(0)}</div>
                   )}
                </div>
                <div className="font-heading font-bold text-white text-lg">{LEADERBOARD[1].displayName}</div>
                <div className="text-gray-300 font-bold uppercase text-sm tracking-widest">{LEADERBOARD[1].stage}</div>
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
                  {LEADERBOARD[0].avatar ? (
                    <img src={LEADERBOARD[0].avatar} alt={LEADERBOARD[0].displayName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-3xl font-bold font-heading text-white">{LEADERBOARD[0].displayName.charAt(0)}</div>
                  )}
                </div>
                <div className="font-heading font-bold text-white text-xl">{LEADERBOARD[0].displayName}</div>
                <div className="text-white font-bold uppercase text-sm tracking-widest">{LEADERBOARD[0].stage}</div>
                <div className="w-32 h-40 bg-gradient-to-t from-white/20 to-white/5 border border-white/30 mt-4 rounded-t-lg flex justify-center pt-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span className="font-heading font-bold text-5xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">1</span>
                </div>
              </div>
            )}
            
            {/* Rank 3 */}
            {LEADERBOARD.length > 2 && (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-gray-400 mb-4 overflow-hidden bg-ryukai-dark flex items-center justify-center">
                  {LEADERBOARD[2].avatar ? (
                    <img src={LEADERBOARD[2].avatar} alt={LEADERBOARD[2].displayName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-2xl font-bold font-heading text-gray-400">{LEADERBOARD[2].displayName.charAt(0)}</div>
                  )}
                </div>
                <div className="font-heading font-bold text-white text-lg">{LEADERBOARD[2].displayName}</div>
                <div className="text-gray-400 font-bold uppercase text-sm tracking-widest">{LEADERBOARD[2].stage}</div>
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
              <div className="col-span-6">Player</div>
              <div className="col-span-2 text-center">Title</div>
              <div className="col-span-3 text-right">Stage</div>
            </div>

            {/* Entries */}
            {LEADERBOARD.map((entry, index) => (
              <motion.div 
                key={entry.rank}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={`https://discord.com/users/${entry.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel hover:bg-ryukai-card transition-colors duration-300 p-4 rounded-lg flex flex-col md:grid md:grid-cols-12 gap-4 items-center group relative overflow-hidden block"
                >
                {/* Background highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <div className={`col-span-1 font-heading font-bold text-3xl w-full md:w-auto text-center ${getRankColor(entry.rank)}`}>
                  #{entry.rank}
                </div>
                
                <div className="col-span-6 flex items-center gap-4 w-full relative">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-ryukai-dark border border-ryukai-border flex items-center justify-center font-heading font-bold text-white overflow-hidden group-hover:border-white transition-colors duration-300">
                      {entry.avatar ? (
                        <img src={entry.avatar} alt={entry.displayName} className="w-full h-full object-cover" />
                      ) : (
                        entry.displayName.charAt(0)
                      )}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[1.5px] border-ryukai-dark ${getStatusColor(entry.status)} z-10`} />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-xl text-white tracking-wide flex items-center gap-2">
                      {entry.displayName} 
                      <span className="text-sm text-gray-500 font-body lowercase group-hover:text-gray-300 transition-colors">@{entry.username}</span>
                    </span>
                    {entry.customStatus && (
                      <span className="text-xs text-gray-400 font-body flex items-center gap-1 mt-0.5">
                        <MessageSquare size={10} /> {entry.customStatus}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="col-span-2 flex items-center justify-center w-full">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-ryukai-dark/50 border border-ryukai-border group-hover:border-white/30 transition-colors">
                    {getBadgeIcon(entry.badge)}
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-300">{entry.badge || "Member"}</span>
                  </div>
                </div>
                
                <div className="col-span-3 flex flex-col md:block items-center w-full md:text-right">
                  <span className="md:hidden text-xs text-gray-500 font-heading uppercase mb-1">Stage</span>
                  <span className="font-heading font-bold text-white text-lg uppercase tracking-widest">{entry.stage}</span>
                </div>
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
