import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useThemeContext } from '../../theme.context';

import {
  container,
  heroText,
  navLink
} from './Layout.module.css'


type Props = {
  pageTitle?: string;
  children?: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {

  const { loading } = useThemeContext()
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
      <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <div>
          <h1 className={heroText} style={{ opacity: loading ? 0 : 1}}>
            Hello, I'm <Link to="/about" className={navLink}>Jordi Martí.</Link>
            <br/>
            I am <Link to="/my-work" className={navLink}>a Front-End Developer</Link>,
            focused on <Link to="/experience" className={navLink}>leading dev teams</Link>.
          </h1>
        </div>
        {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        */}
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout