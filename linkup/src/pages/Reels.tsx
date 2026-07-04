import { useState } from "react";
import { ArrowUp, ArrowDown, MessageCircle, Share2, Plus } from "lucide-react";
import { currentUser } from "@/data/mock";

export default function Reels() {
  const [likes, setLikes] = useState(12400);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="relative w-full h-[calc(100vh-68px)] bg-black overflow-hidden">
      {/* Video Placeholder */}
      <img 
        src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=600&auto=format&fit=crop" 
        alt="Reel poster" 
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Right Actions */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10">
        <div className="flex flex-col items-center gap-1">
          <button 
            className={`p-3 rounded-full bg-black/40 backdrop-blur-md ${isLiked ? 'text-[#EC4899]' : 'text-white'}`}
            onClick={() => { setIsLiked(!isLiked); setLikes(l => isLiked ? l - 1 : l + 1); }}
          >
            <ArrowUp className="w-7 h-7" />
          </button>
          <span className="text-white text-xs font-bold">{(likes / 1000).toFixed(1)}k</span>
          <button className="p-2 text-white/70 hover:text-white">
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white">
            <MessageCircle className="w-7 h-7" />
          </button>
          <span className="text-white text-xs font-bold">892</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white">
            <Share2 className="w-7 h-7" />
          </button>
          <span className="text-white text-xs font-bold">445</span>
        </div>
      </div>

      {/* Bottom Overlay Info */}
      <div className="absolute bottom-0 left-0 right-16 p-4 pb-8 z-10 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-full border border-white/20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#7C3AED] rounded-full flex items-center justify-center border border-black">
              <Plus className="w-3 h-3 text-white" />
            </div>
          </div>
          <span className="text-white font-bold">{currentUser.handle}</span>
          <button className="px-3 py-1 rounded-full border border-white/40 text-white text-xs font-medium backdrop-blur-sm">
            Follow
          </button>
        </div>
        <div className="text-white text-sm">
          Lost in the mountains today. The view is absolutely breathtaking! 🏔️✨ 
          <span className="text-[#8B5CF6] ml-1">#nature #hiking #explore</span>
        </div>
      </div>
    </div>
  );
}
