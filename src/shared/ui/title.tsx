import type { HTMLAttributes, ReactNode } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/utils/cn"

type TitleAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export const titleCva = cva("", {
    variants: {
        size: {
            xs: "text-[18px] leading-[150%] font-medium text-white xl:text-[20px] 2xl:text-[22px]",
            sm: "text-[18px] leading-[150%] font-semibold text-white xl:text-[20px] 2xl:text-[24px]",
            md: "text-[24px] leading-[150%] font-bold text-white xl:text-[28px] 2xl:text-[38px]",
            lg: "text-[24px] leading-[150%] font-bold text-white xl:text-[28px] 2xl:text-[48px]",
            xl: "text-[28px] leading-[150%] font-bold text-white xl:text-[48px] 2xl:text-[58px]",
        },
    },
})

interface TitleProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleCva> {
    as?: TitleAs
    children: ReactNode
}

export const Title = ({ as = "h2", size, children, className, ...rest }: TitleProps) => {
    const Component = as

    return (
        <Component className={cn(titleCva({ size }), className)} {...rest}>
            {children}
        </Component>
    )
}
