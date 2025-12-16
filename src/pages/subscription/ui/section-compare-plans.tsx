import { Container, Text, Title } from "@shared/ui"

export const SectionComparePlans = () => {
    return (
        <Container className={"flex flex-col max-xl:gap-[60px] max-md:gap-10 xl:gap-20"}>
            <div className={"flex flex-col max-xl:gap-2.5 xl:gap-3.5"}>
                <Title as={"h1"} size={"lg"}>
                    Compare our plans and find the right one for you
                </Title>
                <Text>
                    StreamVibe offers three different plans to fit your needs: Basic, Standard, and
                    Premium. Compare the features of each plan and choose the one that's right for
                    you.
                </Text>
            </div>
        </Container>
    )
}
