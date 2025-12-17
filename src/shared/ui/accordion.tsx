import {
    type ButtonHTMLAttributes,
    type HTMLAttributes,
    type ReactNode,
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
} from "react"

import { cn } from "@shared/utils/cn"

interface AccordionContextProps {
    isOpen: boolean
    toggle: () => void
    open?: boolean
    onOpenChange?: (open: boolean) => void
    contentId: string
}

const AccordionContext = createContext<AccordionContextProps | null>(null)

const useAccordion = () => {
    const ctx = useContext(AccordionContext)
    if (!ctx) {
        throw new Error("Accordion components must be used within <Accordion.Root>")
    }
    return ctx
}

interface AccordionRootProps {
    children: ReactNode
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
    /** Opțional: id custom pentru accesibilitate */
    id?: string
}

const AccordionRoot = ({
    children,
    defaultOpen = false,
    open: controlledOpen,
    onOpenChange,
    id,
}: AccordionRootProps) => {
    const generatedId = useRef(`accordion-${Math.random().toString(36).substr(2, 9)}`)
    const contentId = id ?? generatedId.current

    const [internalOpen, setInternalOpen] = useState(defaultOpen)

    const isControlled = controlledOpen !== undefined
    const isOpen = isControlled ? !!controlledOpen : internalOpen

    const toggle = () => {
        if (!isControlled) {
            setInternalOpen((prev) => !prev)
        }
        onOpenChange?.(!isOpen)
    }

    return (
        <AccordionContext.Provider
            value={{ isOpen, toggle, open: controlledOpen, onOpenChange, contentId }}
        >
            {children}
        </AccordionContext.Provider>
    )
}

interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const AccordionTrigger = ({ children, className, ...rest }: AccordionTriggerProps) => {
    const { toggle, isOpen, contentId } = useAccordion()

    return (
        <button
            onClick={toggle}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className={cn(
                "flex w-full items-center justify-between text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                className,
            )}
            {...rest}
        >
            {children}
            {/* Opțional: iconiță chevron – poți înlocui cu SVG-ul tău */}
            <svg
                className={cn(
                    "ml-2 h-4 w-4 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180",
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </button>
    )
}

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

const AccordionContent = ({ children, className, ...rest }: AccordionContentProps) => {
    const { isOpen, contentId } = useAccordion()
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number | undefined>(0)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0)
        }
    }, [isOpen, children])

    return (
        <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
            aria-hidden={!isOpen}
        >
            <div
                id={contentId}
                role="region"
                ref={contentRef}
                className={cn(
                    "pt-2 pb-4 transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0",
                    className,
                )}
                {...rest}
            >
                {children}
            </div>
        </div>
    )
}

export const Accordion = {
    Root: AccordionRoot,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
}
