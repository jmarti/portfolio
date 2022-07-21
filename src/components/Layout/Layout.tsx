import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { container } from './Layout.module.css'


type Props = {
  pageTitle?: string;
  children?: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {

  const data: Queries.LayoutQuery = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={container}>
      <main>
        {children}
      </main>
      </div>
    </>
  )
}

export default Layout