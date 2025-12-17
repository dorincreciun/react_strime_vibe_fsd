import { Link } from "react-router"

import type { FooterNavBlockPropsBuilder } from "@widgets/app-footer/model/types"

export const FooterNavBlock = ({ title, links }: FooterNavBlockPropsBuilder) => {
    return (
        <div className={"flex flex-col max-xl:gap-5 max-md:gap-4 xl:gap-6"}>
            <Link
                to={title.href}
                className={
                    "leading-[150%] font-semibold text-white max-xl:text-lg max-md:text-base xl:text-xl"
                }
            >
                {title.label}
            </Link>
            <ul className={"flex flex-col max-xl:gap-2.5 max-md:gap-2 xl:gap-3.5"}>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            to={`?section=${link.href}`}
                            className={
                                "text-grey-60 leading-[150%] font-normal max-xl:text-base max-md:text-sm xl:text-lg"
                            }
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
