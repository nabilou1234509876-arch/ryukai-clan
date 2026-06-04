import PageHeader from "@/app/components/PageHeader";
import { GALLERY_ITEMS } from "@/config/clan";
import { Image as ImageIcon, Play } from "lucide-react";

export default function GalleryPage() {
  return (
    <div>
      <PageHeader title="Gallery" subtitle="Moments of Dominance" />
      
      <div className="container mx-auto px-6 py-24">
        
        {GALLERY_ITEMS.length === 0 ? (
          <div className="text-center py-20 text-gray-400 font-body">
            No gallery items found. Add some in config/clan.ts.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {GALLERY_ITEMS.map((item, index) => (
              <div 
                key={index}
                className="group relative rounded-lg overflow-hidden aspect-video bg-ryukai-dark border border-ryukai-border hover:border-ryukai-blue/50 transition-all duration-300"
              >
                {/* Fallback image placeholder since we don't have real assets yet */}
                <div className="absolute inset-0 bg-ryukai-blue/5 group-hover:bg-ryukai-blue/10 transition-colors" />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === "video" ? (
                        <div className="bg-red-500/20 text-red-500 p-1.5 rounded backdrop-blur">
                          <Play size={14} fill="currentColor" />
                        </div>
                      ) : (
                        <div className="bg-ryukai-blue/20 text-ryukai-blue p-1.5 rounded backdrop-blur">
                          <ImageIcon size={14} />
                        </div>
                      )}
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-300">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Center play button for videos */}
                {item.type === "video" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ryukai-blue/20 backdrop-blur-sm border border-ryukai-blue/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,68,255,0.4)]">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
