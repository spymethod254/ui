import { BadgeCheck } from "lucide-react";

export function VerifiedBadge() {
  return (
    <div className="relative inline-flex items-center justify-center bg-white rounded-full w-3.5 h-3.5 ml-1">
      <BadgeCheck className="w-4 h-4 text-blue-500 absolute" />
    </div>
  );
}
