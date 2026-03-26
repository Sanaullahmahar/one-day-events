import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

const SectionHeading = ({ children, className, subtitle }: SectionHeadingProps) => (
  <div className={cn("ui-section-heading", className)}>
    <h2 className="ui-h2">{children}</h2>
    {subtitle && <p className="ui-body mx-auto mt-4 max-w-2xl">{subtitle}</p>}
  </div>
);

export default SectionHeading;
