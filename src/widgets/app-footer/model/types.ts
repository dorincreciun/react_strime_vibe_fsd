interface FooterNavLinkBuilder {
    label: string
    href: string
}

export interface FooterNavBlockPropsBuilder {
    title: FooterNavLinkBuilder
    links: FooterNavLinkBuilder[]
}
