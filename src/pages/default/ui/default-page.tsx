import { Button, Container, SupportedDeviceCard, Text, Title } from "@shared/ui"

const items = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="36"
                fill="none"
                viewBox="0 0 20 36"
            >
                <g clipPath="url(#clip0_184_844)">
                    <foreignObject width="43.655" height="60.006" x="-12.005" y="-11.997">
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            clipPath="url(#bgblur_1_184_844_clip_path)"
                            style={{ backdropFilter: "blur(6px)", height: "100%", width: "100%" }}
                        />
                    </foreignObject>

                    <path
                        fill="#E60000"
                        stroke="#E60000"
                        d="M15.692.51v.002c2.012.01 3.45 1.443 3.45 3.434v.001c.01 9.376.01 18.741 0 28.117v.001c0 1.995-1.44 3.435-3.435 3.435h-.002q-5.817.017-11.634 0c-1.103 0-1.982-.36-2.585-.96-.602-.598-.97-1.477-.974-2.59C.489 27.297.5 22.656.5 18c0-4.645-.011-9.298 0-13.94v-.002c0-1.714.846-2.902 2.32-3.38l.003-.001A3.6 3.6 0 0 1 3.935.512h.001C7.86.5 11.781.499 15.692.51ZM9.826 28.98c-1.192 0-2.156.95-2.142 2.135a2.15 2.15 0 0 0 2.171 2.113 2.11 2.11 0 0 0 2.069-1.904l.01-.215c.012-1.21-.91-2.13-2.108-2.13ZM7.513 2.77c-.372.007-.733.098-1.011.328-.292.24-.427.582-.436.949-.008.36.1.715.367.981.263.264.625.382 1.014.383v.001c1.579.023 3.146.023 4.725 0h.003c.784-.016 1.45-.58 1.41-1.379-.017-.37-.176-.7-.457-.932-.276-.226-.632-.33-1.008-.33z"
                        data-figma-bg-blur-radius="12"
                    />
                </g>

                <defs>
                    <clipPath id="bgblur_1_184_844_clip_path" transform="translate(12.005 11.997)">
                        <path d="M15.692.51v.002c2.012.01 3.45 1.443 3.45 3.434v.001c.01 9.376.01 18.741 0 28.117v.001c0 1.995-1.44 3.435-3.435 3.435h-.002q-5.817.017-11.634 0c-1.103 0-1.982-.36-2.585-.96-.602-.598-.97-1.477-.974-2.59C.489 27.297.5 22.656.5 18c0-4.645-.011-9.298 0-13.94v-.002c0-1.714.846-2.902 2.32-3.38l.003-.001A3.6 3.6 0 0 1 3.935.512h.001C7.86.5 11.781.499 15.692.51M9.826 28.98c-1.192 0-2.156.95-2.142 2.135a2.15 2.15 0 0 0 2.171 2.113 2.11 2.11 0 0 0 2.069-1.904l.01-.215c.012-1.21-.91-2.13-2.108-2.13M7.513 2.77c-.372.007-.733.098-1.011.328-.292.24-.427.582-.436.949-.008.36.1.715.367.981.263.264.625.382 1.014.383v.001c1.579.023 3.146.023 4.725 0h.003c.784-.016 1.45-.58 1.41-1.379-.017-.37-.176-.7-.457-.932-.276-.226-.632-.33-1.008-.33z" />
                    </clipPath>
                    <clipPath id="clip0_184_844">
                        <path fill="#fff" d="M0 0h19.642v36H0z" />
                    </clipPath>
                </defs>
            </svg>
        ),
        title: "Smartphones",
        description:
            "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },

    {
        icon: (
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_184_888)">
                    <foreignObject x="-5.59998" y="-10.4" width="51.4526" height="60">
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                backdropFilter: "blur(6px)",
                                clipPath: "url(#bgblur_1_184_888_clip_path)",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </foreignObject>

                    <path
                        data-figma-bg-blur-radius="12"
                        d="M16.5055 33.8373H23.736V30.8354H16.5055V33.8373ZM6.91174 34.101C6.9005 29.2658 6.90002 24.4193 6.90002 19.5834V5.13125C6.90005 4.10776 7.19438 3.36537 7.67932 2.8793C8.16414 2.39352 8.90346 2.1 9.92053 2.1H30.3326C31.3498 2.10002 32.0891 2.3934 32.5739 2.8793C33.0588 3.36537 33.3531 4.10776 33.3531 5.13125V34.102C33.3531 35.0993 33.0581 35.8353 32.5739 36.3207C32.0898 36.8059 31.3569 37.1 30.3658 37.1H9.89807C8.90835 37.1 8.17568 36.8036 7.69104 36.3168C7.20608 35.8296 6.91174 35.0931 6.91174 34.102V34.101Z"
                        fill="#E60000"
                        stroke="#E60000"
                    />
                </g>

                <defs>
                    <clipPath id="bgblur_1_184_888_clip_path" transform="translate(5.59998 10.4)">
                        <path d="M16.5055 33.8373H23.736V30.8354H16.5055V33.8373ZM6.91174 34.101C6.9005 29.2658 6.90002 24.4193 6.90002 19.5834V5.13125C6.90005 4.10776 7.19438 3.36537 7.67932 2.8793C8.16414 2.39352 8.90346 2.1 9.92053 2.1H30.3326C31.3498 2.10002 32.0891 2.3934 32.5739 2.8793C33.0588 3.36537 33.3531 4.10776 33.3531 5.13125V34.102C33.3531 35.0993 33.0581 35.8353 32.5739 36.3207C32.0898 36.8059 31.3569 37.1 30.3658 37.1H9.89807C8.90835 37.1 8.17568 36.8036 7.69104 36.3168C7.20608 35.8296 6.91174 35.0931 6.91174 34.102V34.101Z" />
                    </clipPath>

                    <clipPath id="clip0_184_888">
                        <rect
                            width="27.4527"
                            height="36"
                            fill="white"
                            transform="translate(6.40002 1.6)"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        title: "Tablet",
        description:
            "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },

    {
        icon: (
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_184_891)">
                    <foreignObject x="-9.21118" y="-5.2" width="58.6223" height="49.604">
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                backdropFilter: "blur(6px)",
                                clipPath: "url(#bgblur_1_184_891_clip_path)",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </foreignObject>

                    <g data-figma-bg-blur-radius="12">
                        <mask id="path-1-inside-1_184_891" fill="white">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.80008 23.3457V23.8257C14.3743 23.8257 25.8705 23.8257 37.4112 23.8146V23.3345V8.31836C37.4112 7.26891 36.9425 6.8 35.871 6.8H4.34034C3.25769 6.8 2.80008 7.26891 2.80008 8.32953V23.3457ZM19.0569 18.2975C18.5904 18.5674 18.1205 18.8392 17.6446 19.1144V12.5497C18.8526 13.2533 20.0424 13.9389 21.2459 14.6323C21.9328 15.028 22.6241 15.4263 23.3257 15.832C21.8791 16.6649 20.4833 17.4724 19.0569 18.2975ZM32.0104 29.8188C31.9001 29.5482 31.7871 29.2712 31.6742 28.9837H31.675C33.1815 28.9837 34.5987 28.9837 35.9937 28.9725C36.7526 28.9614 37.333 28.5371 37.3665 27.8561C37.4051 27.2079 37.3956 26.5543 37.3862 25.8954C37.3819 25.6011 37.3777 25.3057 37.3777 25.0092H2.78882V27.376C2.78882 28.5036 3.25759 28.9725 4.37372 28.9725H8.51456C8.16865 29.8431 7.84506 30.6468 7.52147 31.4504L7.5212 31.451C7.38727 31.8083 7.33146 32.1655 7.77791 32.333C8.2132 32.5005 8.42527 32.2102 8.57037 31.8529C8.66844 31.6109 8.76844 31.3699 8.86838 31.129C9.10965 30.5474 9.35064 29.9665 9.56372 29.3744C9.68649 29.0507 9.85391 28.9725 10.1776 28.9725C16.7962 28.9837 23.4149 28.9837 30.0335 28.9725C30.3795 28.9725 30.5246 29.0842 30.6362 29.3968C30.8894 30.0689 31.1596 30.7241 31.432 31.3845C31.4718 31.481 31.5116 31.5775 31.5515 31.6743C31.5794 31.7357 31.6045 31.7943 31.6296 31.8529C31.6547 31.9116 31.6798 31.9702 31.7077 32.0316C31.8528 32.3553 32.1542 32.5116 32.422 32.3218C32.6006 32.199 32.7569 31.8083 32.6899 31.6073C32.4964 31.0112 32.26 30.4312 32.0104 29.8188ZM24.3189 27.2085H20.0777C19.6093 27.2085 19.1397 27.2073 18.6697 27.2061C17.7284 27.2036 16.7855 27.2011 15.8475 27.2085C15.468 27.2085 15.0997 27.1639 15.0886 26.6838C15.0774 26.1926 15.4457 26.0921 15.8587 26.0921H24.3301C24.7319 26.0921 25.1114 26.1814 25.1114 26.6727C25.1114 27.1862 24.7096 27.2085 24.3189 27.2085Z"
                            />
                        </mask>

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.80008 23.3457V23.8257C14.3743 23.8257 25.8705 23.8257 37.4112 23.8146V23.3345V8.31836C37.4112 7.26891 36.9425 6.8 35.871 6.8H4.34034C3.25769 6.8 2.80008 7.26891 2.80008 8.32953V23.3457ZM19.0569 18.2975C18.5904 18.5674 18.1205 18.8392 17.6446 19.1144V12.5497C18.8526 13.2533 20.0424 13.9389 21.2459 14.6323C21.9328 15.028 22.6241 15.4263 23.3257 15.832C21.8791 16.6649 20.4833 17.4724 19.0569 18.2975ZM32.0104 29.8188C31.9001 29.5482 31.7871 29.2712 31.6742 28.9837H31.675C33.1815 28.9837 34.5987 28.9837 35.9937 28.9725C36.7526 28.9614 37.333 28.5371 37.3665 27.8561C37.4051 27.2079 37.3956 26.5543 37.3862 25.8954C37.3819 25.6011 37.3777 25.3057 37.3777 25.0092H2.78882V27.376C2.78882 28.5036 3.25759 28.9725 4.37372 28.9725H8.51456C8.16865 29.8431 7.84506 30.6468 7.52147 31.4504L7.5212 31.451C7.38727 31.8083 7.33146 32.1655 7.77791 32.333C8.2132 32.5005 8.42527 32.2102 8.57037 31.8529C8.66844 31.6109 8.76844 31.3699 8.86838 31.129C9.10965 30.5474 9.35064 29.9665 9.56372 29.3744C9.68649 29.0507 9.85391 28.9725 10.1776 28.9725C16.7962 28.9837 23.4149 28.9837 30.0335 28.9725C30.3795 28.9725 30.5246 29.0842 30.6362 29.3968C30.8894 30.0689 31.1596 30.7241 31.432 31.3845C31.4718 31.481 31.5116 31.5775 31.5515 31.6743C31.5794 31.7357 31.6045 31.7943 31.6296 31.8529C31.6547 31.9116 31.6798 31.9702 31.7077 32.0316C31.8528 32.3553 32.1542 32.5116 32.422 32.3218C32.6006 32.199 32.7569 31.8083 32.6899 31.6073C32.4964 31.0112 32.26 30.4312 32.0104 29.8188ZM24.3189 27.2085H20.0777C19.6093 27.2085 19.1397 27.2073 18.6697 27.2061C17.7284 27.2036 16.7855 27.2011 15.8475 27.2085C15.468 27.2085 15.0997 27.1639 15.0886 26.6838C15.0774 26.1926 15.4457 26.0921 15.8587 26.0921H24.3301C24.7319 26.0921 25.1114 26.1814 25.1114 26.6727C25.1114 27.1862 24.7096 27.2085 24.3189 27.2085Z"
                            fill="#E60000"
                        />

                        <path
                            d="M2.80008 23.8257H1.80008V24.8257H2.80008V23.8257ZM37.4112 23.8146L37.4122 24.8146L38.4112 24.8136V23.8146H37.4112Z"
                            fill="#E60000"
                            mask="url(#path-1-inside-1_184_891)"
                        />
                    </g>
                </g>

                <defs>
                    <clipPath id="bgblur_1_184_891_clip_path" transform="translate(9.21118 5.2)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.80008 23.3457V23.8257C14.3743 23.8257 25.8705 23.8257 37.4112 23.8146V23.3345V8.31836C37.4112 7.26891 36.9425 6.8 35.871 6.8H4.34034C3.25769 6.8 2.80008 7.26891 2.80008 8.32953V23.3457Z"
                        />
                    </clipPath>

                    <clipPath id="clip0_184_891">
                        <rect
                            width="34.6"
                            height="25.6"
                            fill="white"
                            transform="translate(2.80005 6.8)"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        title: "Smart TV",
        description:
            "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
]

export const DefaultPage = () => {
    return (
        <main>
            {/* Hero */}
            <div>
                <img className="block w-full object-cover" src="/home-hero.jpg" alt="" />

                <div className="relative -top-16 flex flex-col items-center justify-center">
                    <Title as="h1" size="xl">
                        The Best Streaming Experience
                    </Title>

                    <Text className="mt-3.5 mb-12.5 max-w-[1096px] text-center">
                        StreamVibe is the best streaming experience for watching your favorite
                        movies and shows on demand, anytime, anywhere. With StreamVibe, you can
                        enjoy a wide variety of content, including the latest blockbusters, classic
                        movies, popular TV shows, and more. You can also create your own watchlists,
                        so you can easily find the content you want to watch.
                    </Text>

                    <Button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Start Watching Now
                    </Button>
                </div>
            </div>

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
        </main>
    )
}
