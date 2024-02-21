import { cn } from "./utils/cn";

interface HeroProps {
  title: string;
  backgroundImage: string;
  sectionClassName?: React.BaseHTMLAttributes<HTMLDivElement>["className"];
  containerClassName?: React.BaseHTMLAttributes<HTMLDivElement>["className"];
}

export function Hero({
  title,
  backgroundImage,
  sectionClassName: className,
  containerClassName,
}: HeroProps) {
  return (
    <section
      className={cn(
        "text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mulish font-bold",
        "bg-no-repeat bg-cover relative",
        "after:bg-[#1C1E1F66] after:inset-0 after:content-[''] after:absolute z-0",
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={cn(
          "container mx-auto px-4 flex items-center justify-center min-h-[446px] relative z-[1]",
          containerClassName
        )}
      > 
        <h2>{title}</h2> 
        
      </div>
    </section>
  );
}

