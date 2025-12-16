import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

import { Routing } from "@app/router"

import "./styles/index.css"
import { Header } from "@widgets/app-header"

const container = document.getElementById("root")

if (!container) {
    throw new Error("Root container with id 'root' not found")
}

const root = createRoot(container)

root.render(
    <BrowserRouter>
        <div className="mx-auto w-full max-w-[1920px]">
            <Header />
            <Routing />
        </div>
    </BrowserRouter>,
)
