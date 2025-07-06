/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as motion from "motion/react-m"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive select-none cursor-pointer capitalize",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-xs hover:opacity-90 active:opacity-80 hover:shadow-lg transition-all duration-200",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-primary text-primary bg-background shadow-xs hover:bg-primary hover:text-white hover:border-primary transition-all duration-200",
        secondary:
          "bg-muted text-foreground shadow-xs hover:bg-neutral-200 active:bg-neutral-300 border border-border",
        ghost:
          "hover:bg-accent/10 hover:text-primary transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline",
        accent:
          "bg-accent text-foreground shadow-xs hover:opacity-90 active:opacity-80 hover:shadow-lg transition-all duration-200",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3 text-[16px]",
        sm: "rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "px-5 py-3 rounded-xl text-[18px] has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  const Motion = motion.create(Comp as any)

  return (
    <Motion
      initial={{ scale: 1 }}
      whileTap={{ scale: size === 'lg' ? 1 : 0.93 }}
      transition={{ ease: [0, 1, 0, 1], delay: 0, duration: 0.03 }}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }