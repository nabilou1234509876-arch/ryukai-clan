import PageHeader from "@/app/components/PageHeader";
import { STAFF_MEMBERS } from "@/config/clan";
import { DiscIcon as Discord } from "lucide-react";

export default function StaffPage() {
  return (
    <div>
      <PageHeader title="Clan Staff" subtitle="The Leadership Structure" />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Our staff team is dedicated to maintaining the integrity, competitive edge, and positive environment of Ryukai Clan. If you have questions or concerns, reach out to the appropriate staff member via Discord.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAFF_MEMBERS.map((staff, index) => (
              <div 
                key={index}
                className="glass-panel group relative overflow-hidden"
              >
                {/* Top colored accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-ryukai-border group-hover:bg-white transition-colors duration-300 z-20" />
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="p-6 flex flex-col items-center text-center relative z-10 h-full">
                  
                  {/* Avatar */}
                  <div className="relative mb-5">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-ryukai-dark border-2 border-ryukai-border group-hover:border-white transition-colors duration-300 flex items-center justify-center">
                      {staff.avatar ? (
                        <div className="w-full h-full bg-white/10 flex items-center justify-center text-xl font-heading font-bold text-white uppercase">
                          {staff.displayName.charAt(0)}
                        </div>
                      ) : (
                        <Discord size={32} className="text-gray-600" />
                      )}
                    </div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wide mb-1">
                    {staff.displayName}
                  </h3>
                  
                  <div className="inline-flex items-center justify-center px-3 py-1 bg-white/10 border border-white/30 text-white text-xs font-bold font-heading uppercase tracking-widest rounded mb-4">
                    {staff.role}
                  </div>
                  
                  <p className="font-body text-sm text-gray-400 mb-6 flex-grow">
                    {staff.description}
                  </p>
                  
                  {/* Discord Username */}
                  <div className="w-full pt-4 border-t border-ryukai-border flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Discord size={16} />
                    <span>@{staff.username}</span>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
