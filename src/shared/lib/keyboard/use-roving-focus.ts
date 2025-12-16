import { useCallback, useRef } from "react"

type Orientation = "horizontal" | "vertical" | "both"

interface UseRovingFocusOptions {
    orientation?: Orientation
    loop?: boolean
}

export const useRovingFocus = <T extends HTMLElement>({
    orientation = "horizontal",
    loop = true,
}: UseRovingFocusOptions = {}) => {
    const itemsRef = useRef<T[]>([])
    const activeIndexRef = useRef(0)

    const register = useCallback((el: T | null) => {
        if (!el) return

        if (itemsRef.current.includes(el)) return

        itemsRef.current.push(el)

        if (itemsRef.current.length === 1) {
            el.tabIndex = 0
        } else {
            el.tabIndex = -1
        }
    }, [])

    const focusAt = useCallback((nextIndex: number) => {
        const items = itemsRef.current
        if (!items.length) return

        const prev = items[activeIndexRef.current]
        const next = items[nextIndex]

        if (!next) return

        if (prev) prev.tabIndex = -1
        next.tabIndex = 0

        activeIndexRef.current = nextIndex
        next.focus()
    }, [])

    const onKeyDown: React.KeyboardEventHandler<HTMLElement> = useCallback(
        (event) => {
            const items = itemsRef.current
            if (!items.length) return

            const max = items.length - 1
            let nextIndex = activeIndexRef.current
            const key = event.key

            const isH = orientation === "horizontal"
            const isV = orientation === "vertical"
            const isB = orientation === "both"

            const allowLeftRight = isH || isB
            const allowUpDown = isV || isB

            switch (key) {
                case "ArrowRight":
                    if (!allowLeftRight) return
                    nextIndex += 1
                    break
                case "ArrowLeft":
                    if (!allowLeftRight) return
                    nextIndex -= 1
                    break
                case "ArrowDown":
                    if (!allowUpDown) return
                    nextIndex += 1
                    break
                case "ArrowUp":
                    if (!allowUpDown) return
                    nextIndex -= 1
                    break
                case "Home":
                    nextIndex = 0
                    break
                case "End":
                    nextIndex = max
                    break
                default:
                    return
            }

            event.preventDefault()

            if (loop) {
                if (nextIndex > max) nextIndex = 0
                if (nextIndex < 0) nextIndex = max
            } else {
                nextIndex = Math.max(0, Math.min(max, nextIndex))
            }

            focusAt(nextIndex)
        },
        [focusAt, loop, orientation],
    )

    return { register, onKeyDown }
}
