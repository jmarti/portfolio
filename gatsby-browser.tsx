import React from "react"
import { globalHistory } from '@reach/router';
import "@fontsource/roboto-slab"
import "@fontsource/source-sans-pro"
import "./src/styles/global.css"

import { ThemeProvider } from './src/theme.context'

export const wrapRootElement =  ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
)

export const onInitialClientRender = () => {
  /**
   * This is a workaround for a bug in Gatsby
   * See https://github.com/gatsbyjs/gatsby/issues/8357 for more details
   */
  (globalHistory as any)._onTransitionComplete();
}