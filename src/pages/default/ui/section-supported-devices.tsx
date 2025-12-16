import { Container, SupportedDeviceCard, Text, Title } from "@shared/ui"

const items = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
            </svg>
        ),
        title: "Smartphones",
        description:
            "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
                />
            </svg>
        ),
        title: "Tablet",
        description:
            "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                />
            </svg>
        ),
        title: "Smart TV",
        description:
            "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
]

export const SectionSupportedDevices = () => {
    return (
        <Container className={"flex flex-col max-xl:gap-[60px] max-md:gap-10 xl:gap-20"}>
            <div className={"flex flex-col max-xl:gap-2.5 xl:gap-3.5"}>
                <Title as="h2" size={"md"}>
                    We Provide you streaming experience across various devices.
                </Title>
                <Text>
                    With StreamVibe, you can enjoy your favorite movies and TV shows anytime,
                    anywhere. Our platform is designed to be compatible with a wide range of
                    devices, ensuring that you never miss a moment of entertainment.
                </Text>
            </div>
            <div className={"grid grid-cols-3 max-xl:gap-5 xl:gap-[30px]"}>
                {items.map((item) => (
                    <SupportedDeviceCard
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </Container>
    )
}
