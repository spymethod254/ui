import { notifications } from "@/data/mock";
import { Heart, UserPlus, MessageCircle, AtSign, Film } from "lucide-react";
import { VerifiedBadge } from "@/components/VerifiedBadge";

export default function Notifications() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center"><Heart className="w-4 h-4 text-pink-500 fill-pink-500" /></div>;
      case 'follow':
        return <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"><UserPlus className="w-4 h-4 text-green-500" /></div>;
      case 'comment':
        return <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"><MessageCircle className="w-4 h-4 text-blue-500 fill-blue-500" /></div>;
      case 'mention':
        return <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center"><AtSign className="w-4 h-4 text-purple-500" /></div>;
      case 'reel_like':
        return <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center"><Film className="w-4 h-4 text-pink-500" /></div>;
      default:
        return <div className="w-8 h-8 rounded-full bg-gray-500/20 flex items-center justify-center"><Heart className="w-4 h-4 text-gray-500" /></div>;
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-full">
      <div className="p-4 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10">
        <h1 className="text-white text-xl font-bold">Notifications</h1>
      </div>
      <div className="flex flex-col p-3 gap-2">
        {notifications.map(notif => (
          <div key={notif.id} className="flex items-center gap-3 p-3 bg-[#141414] rounded-xl border border-white/5">
            {getIcon(notif.type)}
            <div className="relative">
              <img src={notif.user.avatar} alt={notif.user.name} className="w-10 h-10 rounded-full object-cover" />
              {notif.user.verified && (
                <div className="absolute -bottom-1 -right-1">
                  <VerifiedBadge />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-300">
                <span className="text-white font-bold mr-1">{notif.user.name}</span>
                {notif.action}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{notif.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
