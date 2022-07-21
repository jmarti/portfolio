import { PageProps } from 'gatsby';
import React, { useEffect } from 'react'
import { useLayoutMainContext } from '../LayoutMain/LayoutMain.context';

type Props = {
  pageTitle?: string;
  children?: React.ReactNode;
  pageProps: PageProps
}

const LayoutPage = ({ pageTitle, children, pageProps }: Props) => {

  const { setPageTitle } = useLayoutMainContext()

  useEffect(() => {
    setPageTitle(pageTitle)
  }, [])
  
  return (
    <div data-uri={pageProps.uri}>
      {children}
    </div>
  )
}

export default LayoutPage