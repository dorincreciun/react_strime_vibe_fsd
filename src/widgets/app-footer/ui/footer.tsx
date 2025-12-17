import { FooterBottom } from "@widgets/app-footer/ui/footer-bottom"
import { FooterMain } from "@widgets/app-footer/ui/footer-main"

import { Container } from "@shared/ui"
import { cn } from "@shared/utils/cn"

import { FooterCtaBanner } from "./footer-cta-banner"

export const Footer = () => {
    return (
        <footer>
            <FooterCtaBanner />

            <div className={cn("bg-black-06 w-full")}>
                <Container>
                    <FooterMain />
                    <FooterBottom />
                </Container>
            </div>
        </footer>
    )
}
