import type { HTMLAttributes, ReactNode } from "react"

import { cn } from "@shared/utils/cn"

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
}

export const Text = ({ children, className, ...rest }: TextProps) => {
    return (
        <p className={cn("text-grey-60 text-lg leading-[150%] font-normal", className)} {...rest}>
            {children}
        </p>
    )
}
