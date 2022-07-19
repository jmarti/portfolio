import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Loading from './components/Loading';

type ThemeProviderProps = {
  children: ReactNode;
}

type themeContextValues = {
  loading: Boolean,
  setLoading?: Function
}

export const ThemeContext = createContext({ loading: false } as themeContextValues)

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      return
    }
    
    setTimeout(() => setLoading(false), 2500)
  }, [loading])
  
  return (
    <ThemeContext.Provider value={{
      loading,
      setLoading
    }}>
      {loading && <Loading />}
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)