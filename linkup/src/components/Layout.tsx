import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home, Film, MessageCircle, Bell, Menu, Settings } from "lucide-react";
import { SideDrawer } from "@/components/SideDrawer";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const hideNav = location === "/reels";

  return (
    <div className="min-h-screen bg-black w-full flex justify-center">
      <div className="w-full max-w-[480px] bg-[#0a0a0a] min-h-screen relative flex flex-col overflow-hidden shadow-2xl border-x border-white/5">
        
        {/* Header - Not shown on Reels */}
        {!hideNav && (
          <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 px-4 h-14 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-[#8B5CF6] font-bold text-xl tracking-tight">LINKUP</span>
            </div>
            
            <div className="flex items-center gap-1">
              {location === '/profile' && (
                 <Link href="/settings">
                   <div className="p-2 text-gray-300 hover:text-white cursor-pointer rounded-full hover:bg-white/10 transition-colors">
                     <Settings className="w-6 h-6" />
                   </div>
                 </Link>
              )}
              <Link href="/notifications">
                <div className="relative p-2 text-gray-300 hover:text-white cursor-pointer rounded-full hover:bg-white/10 transition-colors">
                  <Bell className="w-6 h-6" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#EC4899] rounded-full border-2 border-[#0a0a0a]"></div>
                </div>
              </Link>
              <button 
                onClick={() => setDrawerOpen(true)}
                className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </header>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 overflow-y-auto ${!hideNav ? 'pb-[68px]' : ''}`}>
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 right-0 h-[68px] bg-[#111] border-t border-white/10 z-40 flex items-center justify-around px-2 pb-safe">
          <Link href="/">
            <div className={`flex flex-col items-center justify-center w-16 h-12 rounded-xl transition-colors cursor-pointer ${location === '/' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'}`}>
              <Home className={`w-6 h-6 mb-1 ${location === '/' ? 'fill-current' : ''}`} />
              <span className="text-[10px] font-medium">Home</span>
            </div>
          </Link>
          <Link href="/reels">
            <div className={`flex flex-col items-center justify-center w-16 h-12 rounded-xl transition-colors cursor-pointer ${location === '/reels' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'}`}>
              <Film className={`w-6 h-6 mb-1 ${location === '/reels' ? 'fill-current' : ''}`} />
              <span className="text-[10px] font-medium">Reels</span>
            </div>
          </Link>
          <Link href="/chats">
            <div className={`flex flex-col items-center justify-center w-16 h-12 rounded-xl transition-colors cursor-pointer ${location === '/chats' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'}`}>
              <MessageCircle className={`w-6 h-6 mb-1 ${location === '/chats' ? 'fill-current' : ''}`} />
              <span className="text-[10px] font-medium">Chats</span>
            </div>
          </Link>
        </nav>

        {/* Relative container wrapper for SideDrawer */}
        <div className="absolute inset-0 pointer-events-none z-50">
          <div className="pointer-events-auto w-full h-full">
            <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
          </div>
        </div>

      </div>
    </div>
  );
}
