import type { HTMLAttributes } from "react"

import { cn } from "@shared/utils/cn"

export const Container = ({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("mx-auto max-w-[1657px] px-4 xl:px-8 2xl:px-12", className)} {...rest}>
            {children}
        </div>
    )
}
