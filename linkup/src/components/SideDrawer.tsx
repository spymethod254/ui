import { motion, AnimatePresence } from "framer-motion";
import { X, Home, User as UserIcon, Users, MessageCircle, Film, LogOut, Zap } from "lucide-react";
import { Link, useLocation } from "wouter";
import { currentUser } from "@/data/mock";

export function SideDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [location] = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: UserIcon, label: "My Profile", path: "/profile" },
    { icon: Users, label: "Switch Accounts", path: "#" },
    { icon: Zap, label: "Suggestions", path: "#" },
    { icon: MessageCircle, label: "Chats", path: "/chats" },
    { icon: Film, label: "Reels", path: "/reels" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 max-w-[480px] mx-auto w-full backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[380px] bg-[#141414] z-50 flex flex-col max-w-none"
            style={{
              // Center logic for the drawer within the 480px container
              position: 'absolute',
              right: 0,
            }}
          >
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={currentUser.avatar} alt="You" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-bold text-white">{currentUser.name}</div>
                  <div className="text-xs text-gray-400">{currentUser.handle}</div>
                </div>
              </div>
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4">
              <div className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-xl p-4 mb-6 shadow-lg">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <Zap className="w-5 h-5 fill-white" />
                  Get Verified Badge
                </div>
                <div className="text-white/90 text-sm">Boost your credibility on LINKUP</div>
              </div>

              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <Link key={item.label} href={item.path} onClick={onClose}>
                    <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors cursor-pointer ${location === item.path ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${location === item.path ? 'bg-[#7C3AED]' : 'bg-[#1F1F1F]'}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-auto p-4 border-t border-white/10">
              <button className="flex items-center gap-4 p-3 w-full rounded-xl transition-colors text-red-500 hover:bg-red-500/10">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <LogOut className="w-4 h-4" />
                </div>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
