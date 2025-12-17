export const ROUTES = {
    DEFAULT: "/",
    FALLBACK: "*",

    MOVIES: "/movies-shows",
    SUPPORT: "/support",
    SUBSCRIPTIONS: "/subscriptions",
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
