import { ROUTES } from "@shared/const/routes"
import { useRovingFocus } from "@shared/lib/keyboard"
import { cn } from "@shared/utils/cn"

import { HeaderMenuItem } from "./HeaderMenuItem"

export const HeaderMenu = () => {
    const { register, onKeyDown } = useRovingFocus<HTMLAnchorElement>({
        orientation: "horizontal",
        loop: true,
    })

    return (
        <nav
            aria-label="Main navigation"
            onKeyDown={onKeyDown}
            className={cn([
                // layout (base)
                "flex items-center justify-center",
                "bg-black-06",

                // size + spacing + shape (responsive)
                "max-xl:h-[61px] max-xl:gap-2 max-xl:rounded-[10px] max-xl:px-2",
                "xl:h-[75px] xl:gap-2.5 xl:rounded-xl xl:px-2.5",

                // positioning
                "absolute top-1/2 left-1/2",

                // transform
                "-translate-x-1/2 -translate-y-1/2",

                // focus / accessibility
                "focus-within:outline-none",
                "focus-within:ring-black-12 focus-within:ring-2",
                "focus-within:ring-offset-black-06 focus-within:ring-offset-2",

                // motion / transition
                "transition-shadow duration-150 ease-out",
                "motion-reduce:transition-none",
            ])}
        >
            <HeaderMenuItem linkRef={register} to={ROUTES.DEFAULT}>
                Home
            </HeaderMenuItem>

            <HeaderMenuItem linkRef={register} to="/movies">
                Movies & Shows
            </HeaderMenuItem>

            <HeaderMenuItem linkRef={register} to="/support">
                Support
            </HeaderMenuItem>

            <HeaderMenuItem linkRef={register} to="/subscriptions">
                Subscriptions
            </HeaderMenuItem>
        </nav>
    )
}
