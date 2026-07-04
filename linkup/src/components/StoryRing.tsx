export function StoryRing({
  src,
  name,
  active = true,
  size = "md",
  showAdd = false
}: {
  src: string;
  name?: string;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  showAdd?: boolean;
}) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  const innerSizes = {
    sm: "w-9 h-9",
    md: "w-[60px] h-[60px]",
    lg: "w-[76px] h-[76px]"
  };

  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div 
        className={`relative rounded-full flex items-center justify-center p-[2px] ${sizes[size]} ${active ? 'bg-gradient-to-br from-[#7C3AED] to-[#EC4899]' : 'bg-gray-800'}`}
      >
        <div className={`rounded-full overflow-hidden bg-background ${innerSizes[size]}`}>
          <img src={src} alt={name || "Story avatar"} className="w-full h-full object-cover" />
        </div>
        {showAdd && (
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#7C3AED] rounded-full flex items-center justify-center border-2 border-background">
            <span className="text-white text-xs font-bold leading-none">+</span>
          </div>
        )}
      </div>
      {name && <span className="text-xs text-white max-w-[64px] truncate">{name}</span>}
    </div>
  );
}
