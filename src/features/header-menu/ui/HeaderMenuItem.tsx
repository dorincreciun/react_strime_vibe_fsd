import { NavLink, type NavLinkProps } from "react-router"

import { cn } from "@shared/utils/cn"

interface HeaderMenuItemProps extends NavLinkProps {
    children: string
}

export const HeaderMenuItem = ({ children, className, ...rest }: HeaderMenuItemProps) => {
    return (
        <NavLink
            {...rest}
            className={({ isActive }) =>
                cn(
                    // Base
                    "text-sm leading-6 font-medium",
                    "xl:rounded-lg xl:px-5 xl:py-3",

                    // Focus ring (IDENTIC cu Button)
                    "outline-none",
                    "focus-visible:ring-red-55/40 focus-visible:ring-2",
                    "focus-visible:ring-offset-black-08 focus-visible:ring-offset-2",
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
