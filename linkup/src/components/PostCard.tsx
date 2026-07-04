import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import type { Post } from "@/data/mock";
import { VerifiedBadge } from "@/components/VerifiedBadge";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-[#141414] rounded-xl overflow-hidden mb-4">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full object-cover" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#141414]" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-bold text-white text-sm">{post.user.name}</span>
              {post.user.verified && <VerifiedBadge />}
            </div>
            <div className="text-xs text-gray-400">
              {post.timestamp} · {post.user.handle}
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-white text-sm whitespace-pre-wrap">
          {post.content}
        </p>
        {post.hashtags && post.hashtags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {post.hashtags.map(tag => (
              <span key={tag} className="text-[#8B5CF6] text-sm hover:underline cursor-pointer">{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* Image */}
      {post.image && (
        <div className="w-full aspect-[4/3] bg-zinc-900">
          <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Reactions Row */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1">
            <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs">❤️</span>
            <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs">🔥</span>
            <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs">😍</span>
          </div>
          <span className="text-gray-400 text-xs ml-1">{(post.likes / 1000).toFixed(1)}k</span>
        </div>
        <div className="text-gray-400 text-xs flex gap-3">
          <span>{post.comments} Comments</span>
          <span>{post.shares} Shares</span>
        </div>
      </div>

      {/* Actions */}
      <div className="px-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1.5 p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">Like</span>
          </button>
          <button className="flex items-center gap-1.5 p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Comment</span>
          </button>
          <button className="flex items-center gap-1.5 p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Send className="w-5 h-5" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
