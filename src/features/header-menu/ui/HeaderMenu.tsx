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
                "xl:bg-black-06 xl:max-w-max xl:rounded-lg xl:p-2",
                "xl:flex xl:items-center xl:justify-center xl:gap-2",
                "xl:absolute xl:top-1/2 xl:left-1/2",
                "xl:-translate-x-1/2 xl:-translate-y-1/2",
                "xl:focus-within:outline-none",
                "xl:focus-within:ring-black-12 xl:focus-within:ring-2",
                "xl:focus-within:ring-offset-black-06 xl:focus-within:ring-offset-2",
                "xl:transition-shadow xl:duration-150 xl:ease-out",
                "xl:motion-reduce:transition-none",
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
