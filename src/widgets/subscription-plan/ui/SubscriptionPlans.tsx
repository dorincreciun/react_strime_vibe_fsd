import { Button, Container, Text, Title } from "@shared/ui"
import { cn } from "@shared/utils/cn"

export const SubscriptionPlans = () => {
    return (
        <Container className={"flex flex-col max-xl:gap-[60px] max-md:gap-10 xl:gap-20"}>
            <div className={"flex flex-col max-xl:gap-2.5 xl:gap-3.5"}>
                <Title as={"h1"} size={"lg"}>
                    Choose the plan that's right for you
                </Title>
                <Text>
                    Join StreamVibe and select from our flexible subscription options tailored to
                    suit your viewing preferences. Get ready for non-stop entertainment!
                </Text>
            </div>
            <div className={"grid grid-cols-3 max-xl:gap-5 xl:gap-[30px]"}>
                {Array.from({ length: 3 }).map(() => (
                    <div
                        className={cn([
                            "border-black-15 bg-black-10 border",
                            "flex flex-col max-xl:gap-10 max-md:gap-[30px] xl:gap-[50px]",

                            "max-xl:rounded-[10px] xl:rounded-xl",
                            "max-xl:p-10 max-md:p-6 xl:p-[50px]",
                        ])}
                    >
                        <div className={"flex flex-col max-xl:gap-3 max-md:gap-2.5 xl:gap-4"}>
                            <h3
                                className={
                                    "leading-[150%] font-bold tracking-[0%] text-white max-xl:text-xl max-md:text-lg xl:text-2xl"
                                }
                            >
                                Basic Plan
                            </h3>
                            <Text>
                                Enjoy an extensive library of movies and shows, featuring a range of
                                content, including recently released titles.
                            </Text>
                        </div>
                        <div>
                            <span
                                className={
                                    "leading-[73%] font-semibold text-white max-xl:text-3xl max-md:text-2xl xl:text-[40px]"
                                }
                            >
                                $9.99
                            </span>
                            <span className={"text-grey-60 text-base leading-[73%] font-medium"}>
                                /month
                            </span>
                        </div>
                        <div className={"flex items-center gap-3"}>
                            <Button variant={"secondary"} className={"bg-black-08 w-full"}>
                                Start Free Trial
                            </Button>
                            <Button className={"w-full"}>Choose Plan</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
