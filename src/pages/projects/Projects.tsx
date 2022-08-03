import React, { useEffect, useState } from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import LayoutPage from '../../layouts/LayoutPage'
import PageTitle from '../../components/PageTitle'

import {
  container,
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
    <LayoutPage pageTitle="Projects" pageProps={props}>
      <PageTitle>Some stuff I buit.</PageTitle>
      <article className={article}>
        <div className={container}></div>
      </article>
    </LayoutPage>
  )
}

export default ProjectsPage