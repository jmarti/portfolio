import React, { createContext, ReactNode, useContext, useState } from 'react'

type LayoutMainProviderProps = {
  children: ReactNode;
}

type LayoutMainContextValues = {
  pageTitle?: String,
  setPageTitle: Function
}

export const LayoutMainContext = createContext({} as LayoutMainContextValues)

export const LayoutMainProvider = (props: LayoutMainProviderProps) => {
  const { children } = props

  const { pageTitle: pageTitleDefault } = useLayoutMainContext()
  const [pageTitle, setPageTitle] = useState(pageTitleDefault)
  
  return (
    <LayoutMainContext.Provider value={{
      pageTitle,
      setPageTitle
    }}>
      {children}
    </LayoutMainContext.Provider>
  )
}

export const useLayoutMainContext = () => useContext(LayoutMainContext)