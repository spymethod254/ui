import { chats } from "@/data/mock";
import { CheckCheck } from "lucide-react";

export default function Chats() {
  return (
    <div className="bg-[#0a0a0a] min-h-full">
      <div className="p-4 border-b border-white/10">
        <h1 className="text-white text-xl font-bold">Messages</h1>
      </div>
      <div className="flex flex-col">
        {chats.map(chat => (
          <div key={chat.id} className="flex items-center gap-3 p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
            <div className="relative">
              <img src={chat.user.avatar} alt={chat.user.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0a0a]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-white font-bold truncate">{chat.user.name}</span>
                <span className="text-gray-500 text-xs shrink-0 ml-2">{chat.timestamp}</span>
              </div>
              <div className="flex items-center gap-1">
                {chat.unreadCount === 0 && <CheckCheck className="w-4 h-4 text-[#8B5CF6] shrink-0" />}
                <span className={`truncate text-sm ${chat.unreadCount > 0 ? 'text-white font-medium' : 'text-gray-400'}`}>
                  {chat.lastMessage}
                </span>
              </div>
            </div>
            {chat.unreadCount > 0 && (
              <div className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">{chat.unreadCount}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
