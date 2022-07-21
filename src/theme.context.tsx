import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Loading from './components/Loading';

type ThemeProviderProps = {
  children: ReactNode;
}

type ThemeContextValues = {
  loading: Boolean,
  setLoading?: Function
}

export const ThemeContext = createContext({ loading: true } as ThemeContextValues)

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props

  const { loading: loadingDefault } = useThemeContext()

  const [loading, setLoading] = useState(loadingDefault)

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
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)