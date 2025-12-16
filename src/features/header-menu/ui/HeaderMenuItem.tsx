import type { Ref } from "react"

import { NavLink, type NavLinkProps } from "react-router"

import { cn } from "@shared/utils/cn"

interface HeaderMenuItemProps extends NavLinkProps {
    children: string
    linkRef?: Ref<HTMLAnchorElement>
}

export const HeaderMenuItem = ({ children, className, linkRef, ...rest }: HeaderMenuItemProps) => {
    return (
        <NavLink
            {...rest}
            ref={linkRef}
            className={({ isActive }) =>
                cn(
                    // Base
                    "text-sm leading-6 font-medium",
                    "xl:rounded-lg xl:px-5 xl:py-3",
                    "focus-visible:shadow-[0_0_0_1px_rgba(255,25,25,0.25)]",

                    // Motion (targeted)
                    "transition-[color,background-color,box-shadow,transform] duration-200 ease-out",
                    "motion-reduce:transition-none",
                    "active:translate-y-px",

                    // State
                    isActive ? "bg-black-10 text-white" : "text-grey-75 hover:text-white",

                    className,
                )
            }
        >
            {children}
        </NavLink>
    )
}
