import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@acme/ui/hover-card";
import { Check, Coins, TrendingUp } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Monitor } from "lucide-react";

export function HeaderNav() {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center gap-6">
        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <a
              href="/trade/perps/BTC"
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-1 py-1"
            >
              Markets
            </a>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-[280px] p-3 bg-muted rounded-2xl"
            align="start"
            sideOffset={12}
            alignOffset={-80}
          >
            <div className="flex gap-2">
              <a
                href="/trade/perps/BTC"
                className="flex flex-col items-center justify-center p-4 bg-accent hover:bg-white/10 transition-colors rounded-xl flex-1"
              >
                <TrendingUp className="w-6 h-6 text-white mb-2" />
                <span className="text-sm font-medium text-white">Perps</span>
              </a>
              <a
                href="/trade/spot/HYPE"
                className="flex flex-col items-center justify-center p-4 bg-accent hover:bg-white/10 transition-colors rounded-xl flex-1"
              >
                <Coins className="w-6 h-6 text-white mb-2" />
                <span className="text-sm font-medium text-white">Spot</span>
              </a>
            </div>
          </HoverCardContent>
        </HoverCard>
        <a
          href="/discover/sites/latest"
          className="text-sm font-semibold text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-1 py-1"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}
