import type { FooterNavBlockPropsBuilder } from "@widgets/app-footer/model/types"

export const footerNavigation: FooterNavBlockPropsBuilder[] = [
    {
        title: {
            label: "Home",
            href: "/",
        },
        links: [
            { label: "Categories", href: "/categories" },
            { label: "Devices", href: "/devices" },
            { label: "Pricing", href: "/pricing" },
            { label: "FAQ", href: "/faq" },
        ],
    },
    {
        title: {
            label: "Movies",
            href: "/movies",
        },
        links: [
            { label: "Genres", href: "/movies/genres" },
            { label: "Trending", href: "/movies/trending" },
            { label: "New Release", href: "/movies/new" },
            { label: "Popular", href: "/movies/popular" },
        ],
    },
    {
        title: {
            label: "Shows",
            href: "/shows",
        },
        links: [
            { label: "Genres", href: "/shows/genres" },
            { label: "Trending", href: "/shows/trending" },
            { label: "New Release", href: "/shows/new" },
            { label: "Popular", href: "/shows/popular" },
        ],
    },
    {
        title: {
            label: "Support",
            href: "/support",
        },
        links: [{ label: "Contact Us", href: "/support/contact" }],
    },
    {
        title: {
            label: "Subscription",
            href: "/subscription",
        },
        links: [
            { label: "Plans", href: "/subscription/plans" },
            { label: "Features", href: "/subscription/features" },
        ],
    },
]

export const FooterMain = () => {
    return (
        <div className={"max-xl:py-[50px] max-md:py-20 xl:py-[100px]"}>
            <div></div>
        </div>
    )
}
