import { Accordion } from "@shared/ui/accordion"

import { SectionHero } from "./section-hero"
import { SectionSupportedDevices } from "./section-supported-devices"

export const DefaultPage = () => {
    return (
        <main>
            <SectionHero />
            <SectionSupportedDevices />
            <Accordion.Root defaultOpen>
                <Accordion.Trigger>Ce este un accordion?</Accordion.Trigger>
                <Accordion.Content>
                    <p>
                        Un accordion este un component UI care permite afișarea/ascunderea
                        conținutului.
                    </p>
                </Accordion.Content>
            </Accordion.Root>
        </main>
    )
}
