import React, { useEffect, useState } from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import LayoutPage from '../../layouts/LayoutPage'

import {
  h1,
  article,
  container,
  left,
  right,
  description
} from './About.module.css'


const DEFAULT_BIO_LENGTH = 1

const AboutPage = (props: PageProps) => {
  const allBios: Queries.AllBiosQuery = useStaticQuery(graphql`
    query AllBios {
      allMdx(filter: {fileAbsolutePath: {regex: "/content/about/"}}) {
        nodes {
          id
          frontmatter {
            title
            description
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const [activeLength, setActiveLength] = useState(0)

  useEffect(() => {
    setActiveLength(
      allBios.allMdx.nodes.length - 1 < DEFAULT_BIO_LENGTH ? allBios.allMdx.nodes.length - 1 : DEFAULT_BIO_LENGTH
    )
  }, [])

  return (
    <LayoutPage pageTitle="About" pageProps={props}>
      <h1 className={h1}>That's me</h1>
      <article className={article}>
        <div className={container}>
          {allBios.allMdx.nodes[activeLength]?.frontmatter?.image?.childImageSharp?.gatsbyImageData && (
            <>
              <div className={left}>
                <GatsbyImage
                  alt=""
                  image={allBios.allMdx.nodes[activeLength]?.frontmatter?.image?.childImageSharp?.gatsbyImageData as IGatsbyImageData}
                  />
              </div>
              <div className={right}>
                <p className={description}>{allBios.allMdx.nodes[activeLength]?.frontmatter?.description}</p>
              </div>
            </>
          )}
        </div>
      </article>
      {allBios.allMdx.nodes[activeLength]?.frontmatter?.title}
    </LayoutPage>
  )
}

export default AboutPage