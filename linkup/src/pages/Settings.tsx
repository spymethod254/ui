import { ChevronRight, Moon, Sun, Monitor, Bell, Shield, Key, Trash2 } from "lucide-react";

export default function Settings() {
  return (
    <div className="bg-[#0a0a0a] min-h-full">
      <div className="p-4 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center gap-3">
        <h1 className="text-white text-xl font-bold">Settings</h1>
      </div>

      <div className="p-4 flex flex-col gap-6">
        
        {/* Appearance */}
        <section>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Appearance</h2>
          <div className="bg-[#141414] rounded-xl border border-white/5 p-1 flex gap-1">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-gray-400 hover:text-white transition-colors">
              <Sun className="w-4 h-4" />
              <span className="text-sm font-medium">Light</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-gray-400 hover:text-white transition-colors">
              <Moon className="w-4 h-4" />
              <span className="text-sm font-medium">Dark</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#2A2A2A] border border-[#7C3AED] text-white shadow-sm transition-colors">
              <Monitor className="w-4 h-4" />
              <span className="text-sm font-medium">System</span>
            </button>
          </div>
        </section>

        {/* Verification CTA */}
        <section>
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-xl p-4 flex items-center justify-between shadow-lg cursor-pointer">
            <div>
              <div className="text-white font-bold mb-0.5">Get Verified Badge</div>
              <div className="text-white/80 text-sm">Boost your credibility</div>
            </div>
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
        </section>

        {/* General */}
        <section>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">General</h2>
          <div className="bg-[#141414] rounded-xl border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="text-white font-medium">Push Notifications</span>
              </div>
              <div className="w-12 h-6 bg-[#7C3AED] rounded-full p-1 flex justify-end cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <span className="text-white font-medium">Privacy</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-gray-400" />
                <span className="text-white font-medium">Security</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Account</h2>
          <div className="bg-[#141414] rounded-xl border border-white/5 overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-white font-medium">Deactivate account</span>
            </div>
            <div className="flex items-center gap-3 p-4 cursor-pointer hover:bg-red-500/10 transition-colors">
              <Trash2 className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-medium">Delete account permanently</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
