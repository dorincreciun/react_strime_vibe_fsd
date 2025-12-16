import { forwardRef, type ButtonHTMLAttributes } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/utils/cn"

export const buttonCva = cva(
    [
        // Base layout
        "inline-flex items-center justify-center gap-1",
        "rounded-[10px] align-middle select-none",
        "relative overflow-hidden",

        // Typography
        "text-lg font-semibold leading-6",

        // Interaction
        "cursor-pointer",

        // Optional: a subtle inner ring for crisp edges
        "focus-visible:shadow-[0_0_0_1px_rgba(255,25,25,0.25)]",

        // Motion
        "transition-all duration-200 ease-out",
        "motion-reduce:transition-none",
        "active:translate-y-px",

        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:active:translate-y-0",
    ],
    {
        variants: {
            variant: {
                primary: "bg-red-45 border border-red-45 text-white",
                secondary: "bg-black-10 border border-black-12 text-white",
                ghost: "text-white",
            },
            size: {
                md: "h-14",
                xl: "h-16",
            },
            onlyIcon: {
                true: "px-0 aspect-square",
                false: "px-6",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            onlyIcon: false,
        },
    },
)

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">
type ButtonVariants = VariantProps<typeof buttonCva>

export type ButtonProps = NativeButtonProps & ButtonVariants

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, onlyIcon, className, type = "button", ...rest }, ref) => {
        return (
            <button
                ref={ref}
                type={type}
                className={cn(buttonCva({ variant, size, onlyIcon }), className)}
                {...rest}
            />
        )
    },
)

Button.displayName = "Button"
