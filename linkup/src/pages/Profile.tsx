import { Grid, Bookmark, MapPin, Link as LinkIcon, Edit2 } from "lucide-react";
import { currentUser } from "@/data/mock";

export default function Profile() {
  return (
    <div className="bg-[#0a0a0a] min-h-full pb-[68px]">
      {/* Banner */}
      <div className="h-32 w-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899]" />
      
      {/* Profile Info */}
      <div className="px-4 relative">
        <div className="flex justify-between items-end -mt-12 mb-4">
          <div className="relative">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              className="w-24 h-24 rounded-full border-4 border-[#0a0a0a] object-cover bg-zinc-900" 
            />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0a]" />
          </div>
          <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors mb-2">
            <Edit2 className="w-4 h-4" />
            Edit Profile
          </button>
        </div>

        <div className="mb-4">
          <h1 className="text-2xl font-bold text-white">{currentUser.name}</h1>
          <p className="text-gray-400">{currentUser.handle}</p>
        </div>

        <p className="text-white text-sm mb-4">Living life to the fullest 🚀</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Nairobi, Kenya
          </div>
          <div className="flex items-center gap-1">
            <LinkIcon className="w-4 h-4" />
            <a href="#" className="text-[#8B5CF6] hover:underline">linkup.app/you</a>
          </div>
        </div>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">6</span>
            <span className="text-gray-400 text-xs">Posts</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">1.4k</span>
            <span className="text-gray-400 text-xs">Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">380</span>
            <span className="text-gray-400 text-xs">Following</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        <button className="flex-1 flex items-center justify-center py-4 border-b-2 border-[#7C3AED] text-[#8B5CF6]">
          <Grid className="w-5 h-5" />
        </button>
        <button className="flex-1 flex items-center justify-center py-4 text-gray-500 hover:text-gray-300">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-zinc-900">
            <img src={`https://picsum.photos/seed/youpost${i}/300/300`} alt={`Post ${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
