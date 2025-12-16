import { SectionHero } from "./section-hero"
import { SectionSupportedDevices } from "./section-supported-devices"

export const DefaultPage = () => {
    return (
        <main>
            <SectionHero />
            <SectionSupportedDevices />
        </main>
    )
}
