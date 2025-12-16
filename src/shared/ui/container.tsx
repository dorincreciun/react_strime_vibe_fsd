import type { HTMLAttributes } from "react"

import { cn } from "@shared/utils/cn"

export const Container = ({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1657px] max-xl:px-8 max-md:px-4 xl:px-12",
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    )
}
