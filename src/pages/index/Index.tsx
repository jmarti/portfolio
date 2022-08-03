import React from 'react'
import { Link, PageProps } from 'gatsby'

import { useThemeContext } from '../../theme.context';
import { heroText, navLink } from './Index.module.css'
import LayoutPage from '../../layouts/LayoutPage';
import PageTitle from '../../components/PageTitle';

const IndexPage = (props: PageProps) => {
  const { loading } = useThemeContext()
  return (
    <LayoutPage pageTitle="Homepage" pageProps={props}>
      <PageTitle>Hi.</PageTitle>
      <h2 className={heroText} style={{ opacity: loading ? 0 : 1}}>
        I'm <Link to="/about" className={navLink}>Jordi Martí,</Link>
        <br/>
        a <Link to="/projects" className={navLink}>Front-End Developer</Link>,
        focused on <Link to="/career" className={navLink}>leading dev teams</Link>.
      </h2>
    </LayoutPage>
  )
}

export default IndexPage