import { Button, Container, Text, Title } from "@shared/ui"

export const FooterCtaBanner = () => {
    return (
        <Container className="max-xl:my-[120px] max-md:my-20 xl:my-[150px]">
            <div className="border-black-15 relative flex min-h-80 items-center overflow-hidden rounded-xl border">
                <img
                    className={"absolute inset-0 h-full object-cover"}
                    src="/footer-image.jpg"
                    alt="Footer Banner"
                />
                <div
                    className={
                        "relative z-10 flex flex-1 items-center max-xl:flex-col max-xl:justify-center max-xl:gap-[50px] max-xl:px-[60px] max-md:px-[30px] xl:justify-between xl:gap-10 xl:px-20"
                    }
                >
                    <div className={"flex flex-col max-xl:gap-2.5 xl:gap-3.5"}>
                        <Title as={"h1"} size={"lg"} className={"max-xl:text-center"}>
                            Start your free trial today!
                        </Title>
                        <Text className={"max-xl:text-center"}>
                            This is a clear and concise call to action that encourages users to sign
                            up for a free trial of StreamVibe.
                        </Text>
                    </div>
                    <Button className={"whitespace-nowrap"}>Start a Free Trail</Button>
                </div>
            </div>
        </Container>
    )
}
