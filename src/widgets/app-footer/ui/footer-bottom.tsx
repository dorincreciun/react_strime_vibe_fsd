import { cn } from "@shared/utils/cn"

export const FooterBottom = () => {
    return (
        <div
            className={cn([
                // layout
                "flex items-center justify-between",

                // border
                "border-black-15 border-t",

                // spacing
                "max-xl:pt-5 max-xl:pb-10",
                "max-md:pb-5",
                "xl:pt-6 xl:pb-[50px]",
            ])}
        >
            <span
                className={cn([
                    "text-grey-60 leading-[150%] font-normal",
                    "max-xl:text-sm xl:text-lg",
                ])}
            >
                @2023 streamvib, All Rights Reserved
            </span>

            <ul
                className={cn([
                    // layout
                    "flex items-center max-md:gap-5 md:gap-10",

                    // divider
                    "divide-black-15 divide-x",

                    // li typography
                    "[&>li]:text-grey-60",
                    "[&>li]:font-normal",
                    "[&>li]:leading-[150%]",
                    "[&>li]:max-xl:text-sm",
                    "[&>li]:xl:text-lg",

                    // spacing before divider
                    "[&>li:not(:last-child)]:pr-10",
                ])}
            >
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
    )
}
