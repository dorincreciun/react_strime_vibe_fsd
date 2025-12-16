import { NavLink, useMatch } from "react-router"

import { HeaderMenu } from "@features/header-menu"
import { NotificationButton } from "@features/notifications"
import { SearchButton } from "@features/search"

import { ROUTES } from "@shared/const/routes"
import { Container, Logo } from "@shared/ui"
import { cn } from "@shared/utils/cn"

export const Header = () => {
    const isHomePage = useMatch(ROUTES.DEFAULT)

    return (
        <header
            className={cn([
                "left-0 z-10 w-full",

                isHomePage ? "absolute top-0" : "relative",

                "max-xl:py-6 max-md:pt-10 max-md:pb-3.5 xl:py-7.5",
            ])}
        >
            <Container className="relative flex items-center">
                {/* Left */}
                <NavLink to={ROUTES.DEFAULT}>
                    <Logo />
                </NavLink>

                {/* Center */}
                <HeaderMenu />

                {/* Right */}
                <div className="ml-auto flex items-center gap-3.5">
                    <SearchButton />
                    <NotificationButton />
                </div>
            </Container>
        </header>
    )
}
