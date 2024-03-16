import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Loader2 size={40} className="animate-spin" />
      </div>
    </div>
  );
}
