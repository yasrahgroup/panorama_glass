import type { HTMLAttributes, ElementType } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "sand" | "dark" | "multicolour" | "lavender";

interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  as?: ElementType;
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  default: "card",
  sand: "card-sand",
  dark: "card-dark",
  multicolour: "card-multicolour",
  lavender: "surface-lavender",
};

export function Card({ className, variant = "default", as: Component = "div", children, ...props }: CardProps) {
  const baseClass = VARIANT_CLASSES[variant];

  return (
    <Component className={cn(baseClass, className)} {...props}>
      {variant === "multicolour" ? <div className="card-content">{children}</div> : children}
    </Component>
  );
}
