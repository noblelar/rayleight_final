import { cn } from "@/components/utils/cn";

interface TwoColumnSplitProps {
  left: React.ReactNode;
  className?: string;
  right: React.ReactNode;
}

/**
 * Todo?
 * Use children instead of left and right props
 */
export function TwoColumnSplit(props: TwoColumnSplitProps) {
  return (
    <div
      className={cn(
        "grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-10",
        props.className
      )}
    >
      {props.left}
      {props.right}
    </div>
  );
}
