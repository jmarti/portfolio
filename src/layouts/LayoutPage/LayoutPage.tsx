import { PageProps } from 'gatsby';
import React, { useEffect } from 'react'
import ArrowLink from '../../components/ArrowLink';
import { useLayoutMainContext } from '../LayoutMain/LayoutMain.context';
import { arrowLink, page } from './LayoutPage.module.css';

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
    <>
      <div data-uri={pageProps.uri} className={page}>
        {pageProps.uri !== '/' && <ArrowLink className={arrowLink} />}
        {children}
      </div>
    </>
  )
}

export default LayoutPage