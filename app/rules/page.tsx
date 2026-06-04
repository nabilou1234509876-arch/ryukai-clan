import PageHeader from "@/app/components/PageHeader";
import { CLAN_RULES } from "@/config/clan";
import { Shield, Ban, Activity, Star, Users, MessageCircle, Tag, Lock } from "lucide-react";

export default function RulesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shield": return <Shield size={24} />;
      case "ban": return <Ban size={24} />;
      case "activity": return <Activity size={24} />;
      case "star": return <Star size={24} />;
      case "users": return <Users size={24} />;
      case "message-circle": return <MessageCircle size={24} />;
      case "tag": return <Tag size={24} />;
      case "lock": return <Lock size={24} />;
      default: return <Shield size={24} />;
    }
  };

  return (
    <div>
      <PageHeader title="Clan Rules" subtitle="The Ryukai Code" />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Ignorance of the rules is not an excuse. By wearing the Ryukai tag, you agree to abide by these guidelines. Violations will be met with warnings, strikes, or immediate removal depending on severity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLAN_RULES.map((rule, index) => (
              <div 
                key={rule.number}
                className="glass-panel p-8 relative overflow-hidden group hover:border-white/30 transition-all duration-300"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-ryukai-dark border border-ryukai-border flex items-center justify-center text-white group-hover:scale-110 group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
                      {getIcon(rule.icon)}
                    </div>
                    <span className="font-heading font-bold text-5xl text-white/5 select-none group-hover:text-white/10 transition-colors">
                      {rule.number}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wide mb-3">
                    {rule.title}
                  </h3>
                  
                  <p className="font-body text-sm text-gray-400 leading-relaxed mt-auto">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
