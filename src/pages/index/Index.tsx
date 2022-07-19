import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import { useThemeContext } from '../../theme.context';

import {
  heroText,
  navLink
} from './Index.module.css'


const IndexPage = () => {
  const { loading } = useThemeContext()

  return (
    <Layout pageTitle="Home">
      <h1 className={heroText} style={{ opacity: loading ? 0 : 1}}>
        Hello, I'm <Link to="/about" className={navLink}>Jordi Martí.</Link>
        <br/>
        I am <Link to="/my-work" className={navLink}>a Front-End Developer</Link>,
        focused on <Link to="/experience" className={navLink}>leading dev teams</Link>.
      </h1>
    </Layout>
  )
}

export default IndexPage