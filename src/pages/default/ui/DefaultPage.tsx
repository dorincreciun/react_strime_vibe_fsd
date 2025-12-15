import { Button, Text, Title } from "@shared/ui"

export const DefaultPage = () => {
    return (
        <main>
            <div>
                <img src="/home-hero.jpg" alt="" />
            </div>
            <div className={"relative -top-16 flex flex-col items-center justify-center"}>
                <Title as={"h1"} size={"xl"}>
                    The Best Streaming Experience
                </Title>
                <Text className={"mt-3.5 mb-12.5 max-w-[1096px] text-center"}>
                    StreamVibe is the best streaming experience for watching your favorite movies
                    and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide
                    variety of content, including the latest blockbusters, classic movies, popular
                    TV shows, and more. You can also create your own watchlists, so you can easily
                    find the content you want to watch.
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
        </main>
    )
}
