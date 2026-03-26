import { Heart, Briefcase, CalendarDays, Users, type LucideIcon } from "lucide-react";
import type { Partner } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Briefcase,
  CalendarDays,
  Users,
};

const PartnerCard = ({
  icon,
  title,
  iconBg = "bg-primary",
  iconColor = "text-primary-foreground",
  iconRing = "ring-[#D7E8F7]",
}: Partner) => {
  const Icon = iconMap[icon] ?? Users;

  return (
    <a
      href="#"
      className="group relative mt-8 flex min-h-[210px] flex-col items-center justify-center rounded-[22px] border border-slate-100 bg-white px-6 pb-8 pt-8 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-100 hover:shadow-[0_22px_50px_rgba(59,130,246,0.14)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 rounded-t-[22px] bg-gradient-to-b from-slate-50/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-col items-center gap-4 text-center">
        <div
          className={cn(
            "flex h-[84px] w-[84px] items-center justify-center rounded-[26px] shadow-[0_10px_24px_rgba(15,23,42,0.08)] ring-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)]",
            iconBg,
            iconRing,
          )}
        >
          <Icon className={cn("h-9 w-9", iconColor)} strokeWidth={2.1} />
        </div>

        <span className="text-center text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.025em] text-[#1E356B] transition-colors duration-300 group-hover:text-[#1447A6]">
          {title}
        </span>

        <span className="inline-flex items-center text-sm font-semibold text-[#41A5F5] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Learn More
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="ml-2 h-4 w-4"
          >
            <path
              d="M4.5 10H15.5M15.5 10L10.75 5.25M15.5 10L10.75 14.75"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
};

export default PartnerCard;
