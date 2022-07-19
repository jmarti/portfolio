import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { motion } from "framer-motion"

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
      <motion.main
        initial={{
          opacity: 0,
          x: -200
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        exit={{
          opacity: 0,
          x: 200
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3
        }}
      >
        {children}
      </motion.main>
      </div>
    </>
  )
}

export default Layout