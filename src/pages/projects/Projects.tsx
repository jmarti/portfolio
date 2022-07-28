import React, { useEffect, useState } from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import LayoutPage from '../../layouts/LayoutPage'

import {
  h1,
  article
} from './Projects.module.css'


const ProjectsPage = (props: PageProps) => {
  const allProjects: Queries.AllBiosQuery = useStaticQuery(graphql`
    query AllProjects {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/content/Projects/"}}
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

  return (
    <LayoutPage pageTitle="About" pageProps={props}>
      <h1 className={h1}>Some stuff I built.</h1>
      <article className={article}>
        
      </article>
    </LayoutPage>
  )
}

export default ProjectsPage