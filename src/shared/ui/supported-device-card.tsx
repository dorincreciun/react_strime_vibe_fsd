import type { ReactNode } from "react"

import { Text } from "@shared/ui/text"
import { Title } from "@shared/ui/title"
import { cn } from "@shared/utils/cn"

interface SupportedDeviceCardProps {
    icon: ReactNode
    title: string
    description: string
}
export const SupportedDeviceCard = ({ icon, title, description }: SupportedDeviceCardProps) => {
    return (
        <div
            className={cn([
                "border-black-15 border",
                "max-xl:rounded-[10px] xl:rounded-xl",
                "max-xl:p-10 max-md:p-6 xl:p-[50px]",
            ])}
        >
            <div className={"flex flex-col max-xl:gap-6 max-md:gap-5 xl:gap-[30px]"}>
                <div className="flex items-center max-xl:gap-3 max-md:gap-2.5 xl:gap-4">
                    <div
                        className={
                            "bg-black-08 border-black-12 text-red-45 border max-xl:rounded-[10px] max-xl:p-3 max-md:rounded-lg xl:rounded-xl xl:p-4"
                        }
                    >
                        {icon}
                    </div>
                    <Title size="sm">{title}</Title>
                </div>
                <Text>{description}</Text>
            </div>
        </div>
    )
}
