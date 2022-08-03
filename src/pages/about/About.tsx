import React, { useEffect, useState } from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import LayoutPage from '../../layouts/LayoutPage'

import {
  activeItem,
  article,
  card,
  container,
  description,
  image,
  left,
  lengthSelector,
  right,
} from './About.module.css'
import DynamicText from '../../components/DynamicText'
import PageTitle from '../../components/PageTitle'
import Card from '../../components/Card'


const DEFAULT_BIO_LENGTH = 0

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
            image_alt
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
      <PageTitle>That's me.</PageTitle>
      <article className={article}>
        <div className={container}>
          {allBios.allMdx.nodes[activeLength]?.frontmatter?.image?.childImageSharp?.gatsbyImageData && (
            <>
              <div className={left}>
                  <GatsbyImage
                    alt={allBios.allMdx.nodes[activeLength]?.frontmatter?.image_alt || ''}
                    image={allBios.allMdx.nodes[activeLength]?.frontmatter?.image?.childImageSharp?.gatsbyImageData as IGatsbyImageData}
                    className={image}
                  />                
              </div>
              <div className={right}>
                <Card className={card}>
                  <div className={description}>
                    <DynamicText height={300}>
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
                </Card>
              </div>
            </>
          )}
        </div>
      </article>
    </LayoutPage>
  )
}

export default AboutPage