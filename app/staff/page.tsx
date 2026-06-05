import PageHeader from "@/app/components/PageHeader";
import { STAFF_MEMBERS } from "@/config/clan";
import { DiscIcon as Discord, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { getStatusColor } from "@/app/components/utils";

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
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <a 
                  href={`https://discord.com/users/${staff.id}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-panel group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-300 block"
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
                        <img src={staff.avatar} alt={staff.displayName} className="w-full h-full object-cover" />
                      ) : (
                        <Discord size={32} className="text-gray-600" />
                      )}
                    </div>
                    {/* Status Dot */}
                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-ryukai-dark rounded-full flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full ${getStatusColor(staff.status)} border border-ryukai-dark`} />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wide mb-1 flex items-center gap-2">
                    {staff.displayName}
                  </h3>
                  
                  {staff.customStatus && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
                      <MessageSquare size={12} />
                      <span>{staff.customStatus}</span>
                    </div>
                  )}
                  
                  <div className="inline-flex items-center justify-center px-3 py-1 bg-white/10 border border-white/30 text-white text-xs font-bold font-heading uppercase tracking-widest rounded mb-4">
                    {staff.role}
                  </div>
                  
                  <p className="font-body text-sm text-gray-400 mb-6 flex-grow group-hover:text-gray-300 transition-colors">
                    {staff.description}
                  </p>
                  
                  {/* Discord Username */}
                  <div className="w-full pt-4 border-t border-ryukai-border flex items-center justify-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors duration-300">
                    <Discord size={16} />
                    <span>@{staff.username}</span>
                  </div>
                  
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
