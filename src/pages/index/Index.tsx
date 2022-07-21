import React from 'react'
import { Link, PageProps } from 'gatsby'

import { useThemeContext } from '../../theme.context';
import { heroText, navLink } from './Index.module.css'
import LayoutPage from '../../layouts/LayoutPage';

const IndexPage = (props: PageProps) => {
  const { loading } = useThemeContext()
  return (
    <LayoutPage pageTitle="Homepage" pageProps={props}>
      <h1 className={heroText} style={{ opacity: loading ? 0 : 1}}>
        Hello, I'm <Link to="/about" className={navLink}>Jordi Martí.</Link>
        <br/>
        I am <Link to="/my-work" className={navLink}>a Front-End Developer</Link>,
        focused on <Link to="/experience" className={navLink}>leading dev teams</Link>.
      </h1>
    </LayoutPage>
  )
}

export default IndexPage