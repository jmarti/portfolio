import React from "react"
import "@fontsource/roboto-slab"
import "@fontsource/source-sans-pro"
import { ReactNode } from "react"
import "./src/styles/global.css"

import { ThemeProvider } from './src/theme.context'
import { AnimatePresence } from "framer-motion"

export const wrapRootElement =  ({ element }: { element: ReactNode }) => (
    <>
        <ThemeProvider>
            <AnimatePresence exitBeforeEnter>
                {element}
            </AnimatePresence>
        </ThemeProvider>
    </>
)
