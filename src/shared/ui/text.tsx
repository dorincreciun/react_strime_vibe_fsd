import type { HTMLAttributes, ReactNode } from "react"

import { cn } from "@shared/utils/cn"

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
}

export const Text = ({ children, className, ...rest }: TextProps) => {
    return (
        <p
            className={cn(
                "text-grey-60 leading-[150%] font-normal max-xl:text-base max-md:text-sm xl:text-lg",
                className,
            )}
            {...rest}
        >
            {children}
        </p>
    )
}
