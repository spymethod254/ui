import { ImageIcon, Smile } from "lucide-react";
import { StoryRing } from "@/components/StoryRing";
import { PostCard } from "@/components/PostCard";
import { currentUser, users, posts } from "@/data/mock";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Stories */}
      <div className="py-4 border-b border-white/5">
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2">
          <StoryRing src={currentUser.avatar} name="Your story" active={false} showAdd={true} />
          <StoryRing src={users.alex.avatar} name="hamso_gwiji" active={true} />
          <StoryRing src={users.priya.avatar} name="priya_vibes" active={true} />
          <StoryRing src={users.dan.avatar} name="dan_tech" active={true} />
          <StoryRing src={users.sofia.avatar} name="sofia_art" active={false} />
        </div>
      </div>

      {/* Composer */}
      <div className="p-4 border-b border-white/5">
        <div className="flex gap-3 mb-3">
          <img src={currentUser.avatar} alt="You" className="w-10 h-10 rounded-full object-cover" />
          <input 
            type="text" 
            placeholder="What's on your mind?" 
            className="flex-1 bg-[#1F1F1F] rounded-full px-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
          />
        </div>
        <div className="flex items-center justify-between pl-[52px]">
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/5 text-gray-400 transition-colors">
              <ImageIcon className="w-4 h-4 text-green-500" />
              <span className="text-xs font-medium">Photo</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/5 text-gray-400 transition-colors">
              <Smile className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-medium">Emoji</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs font-medium text-gray-400 hover:text-white px-3 py-1.5">Cancel</button>
            <button className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="p-4 bg-[#0a0a0a]">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <div className="py-8 text-center text-gray-500 text-sm">
          You've caught up for now!
        </div>
      </div>
    </div>
  );
}
