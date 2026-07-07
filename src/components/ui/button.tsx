import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-body-md font-medium transition-colors duration-150 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ink-900 text-white hover:shadow-xs hover:bg-ink-700",
        secondary:
          "border border-border-subtle bg-transparent text-ink-900 hover:bg-surface-50",
        ghost:
          "bg-transparent text-accent-primary underline-offset-4 hover:underline px-0",
        onDark:
          "bg-white text-ink-900 hover:bg-surface-50",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-12 px-8 text-body-lg",
        sm: "h-9 px-4 text-body-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
