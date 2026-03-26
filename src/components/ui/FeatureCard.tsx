import { ClipboardCheck, ShieldCheck, BadgeDollarSign, type LucideIcon } from "lucide-react";
import type { Feature } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  ShieldCheck,
  BadgeDollarSign,
};

const FeatureCard = ({ icon, title, description }: Feature) => {
  const Icon = iconMap[icon] ?? ClipboardCheck;

  return (
    <div className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
