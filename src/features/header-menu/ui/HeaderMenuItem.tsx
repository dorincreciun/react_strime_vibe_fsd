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
                    /* Font */
                    "leading-[150%] font-medium max-xl:text-sm xl:text-lg",

                    /* Layout */
                    "rounded-lg max-xl:px-5 max-xl:py-3 xl:px-6 xl:py-3.5",

                    "focus-visible:shadow-[0_0_0_1px_rgba(255,25,25,0.25)]",

                    /* Motion */
                    "transition-[color,background-color,box-shadow,transform] duration-200 ease-out",
                    "motion-reduce:transition-none",
                    "active:translate-y-px",

                    /* State */
                    isActive ? "bg-black-10 text-white" : "text-grey-75 hover:text-white",

                    className,
                )
            }
        >
            {children}
        </NavLink>
    )
}
