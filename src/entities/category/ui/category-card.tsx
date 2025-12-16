import { Link } from "react-router"

import type { Category } from "@entities/category"

import { cn } from "@shared/utils/cn"

interface CategoryCardProps {
    category: Category
    className?: string
}

export const CategoryCard = ({ category, className }: CategoryCardProps) => {
    return (
        <div
            className={cn([
                "group relative flex flex-col items-center",
                "max-xl:p-6 max-md:p-5 xl:p-7.5",
                "border-black-15 bg-black-10 border max-xl:rounded-[10px] xl:rounded-xl",

                "transition-all duration-200 ease-out",
                "hover:border-black-25 hover:bg-black-12 hover:-translate-y-0.5",
                "focus-within:border-black-25 focus-within:bg-black-12 focus-within:-translate-y-0.5",

                "motion-reduce:transition-none",
                className,
            ])}
        >
            <Link
                to={category.slug}
                aria-label={category.name}
                className={cn([
                    "absolute inset-0 z-10 max-xl:rounded-[10px] xl:rounded-xl",

                    "focus-visible:outline-none",
                    "focus-visible:ring-red-55/40 focus-visible:ring-2",
                    "focus-visible:ring-offset-black-08 focus-visible:ring-offset-2",
                ])}
            />

            <img
                src={category.imageUrl}
                alt={category.imageAlt}
                className={cn([
                    "pointer-events-none w-full",
                    "transition-transform duration-200 ease-out",
                    "group-hover:scale-[1.02]",
                    "motion-reduce:transition-none",
                ])}
            />

            <div className="pointer-events-none mt-3 flex w-full items-center justify-between gap-4">
                <h2 className="max-xl:text-md leading-[150%] font-semibold text-white max-md:text-sm xl:text-lg">
                    {category.name}
                </h2>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={cn([
                        "size-6 text-white",
                        "transition-transform duration-200 ease-out",
                        "group-hover:translate-x-1",
                        "motion-reduce:transition-none",
                    ])}
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                </svg>
            </div>
        </div>
    )
}
