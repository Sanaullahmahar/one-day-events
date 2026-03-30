import { Heart, Briefcase, CalendarDays, Users, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { Partner } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = { Heart, Briefcase, CalendarDays, Users };

const PartnerCard = ({ icon, title, href = "#", iconBg = "bg-primary", iconColor = "text-primary-foreground", iconRing = "ring-accent" }: Partner) => {
  const Icon = iconMap[icon] ?? Users;
  return (
    <Link
      to={href}
      className="group relative mt-8 flex min-h-[210px] flex-col items-center justify-center rounded-[22px] border border-border/50 bg-card px-6 pb-8 pt-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="relative flex flex-col items-center gap-4 text-center">
        <div className={cn("flex h-[84px] w-[84px] items-center justify-center rounded-[26px] shadow-md ring-4 transition-all duration-300 group-hover:scale-105", iconBg, iconRing)}>
          <Icon className={cn("h-9 w-9", iconColor)} strokeWidth={2.1} />
        </div>
        <span className="text-center text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.025em] text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </span>
        <span className="inline-flex items-center text-sm font-semibold text-secondary opacity-0 transition-all duration-300 group-hover:opacity-100">
          Learn More →
        </span>
      </div>
    </Link>
  );
};

export default PartnerCard;
