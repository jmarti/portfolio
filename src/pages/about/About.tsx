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
  description,
  lengthSelector,
  activeItem
} from './About.module.css'
import DynamicText from '../../components/DynamicText'


const DEFAULT_BIO_LENGTH = 1
const BIO_LENGTH_TEXT_EMS = [1.5, 1.2, .9, .75]

const AboutPage = (props: PageProps) => {
  const allBios: Queries.AllBiosQuery = useStaticQuery(graphql`
    query AllBios {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/content/about/"}}
        sort: {fields: slug}
      ) {
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
          body
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

  const handleLengthSelection = (selectedLength: number) => {
    setActiveLength(selectedLength)
  }

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
                <div className={description}>
                  <DynamicText height={360}>
                    {allBios.allMdx.nodes[activeLength]?.frontmatter?.description}
                  </DynamicText>
                </div>
                <ul className={lengthSelector}>
                  {allBios.allMdx.nodes.map((node, i, arr) => (
                    <li
                      key={i}
                      className={activeLength === i ? activeItem : undefined}
                      data-helpText={i === 0 ? 'Less' : i === arr.length - 1 ? 'More' : undefined}
                    >
                      <button onClick={() => handleLengthSelection(i)}>
                        <span className="srOnly">
                          {node.frontmatter?.title} {activeLength === i && '(active)'}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </article>
    </LayoutPage>
  )
}

export default AboutPage