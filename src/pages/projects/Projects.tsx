import React from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import { section, project as projectClass } from './Projects.module.css'
import LayoutPage from '../../layouts/LayoutPage'
import PageTitle from '../../components/PageTitle'
import { Card, CardContent, CardMedia, CardTitle } from '../../components/Card'


const ProjectsPage = (props: PageProps) => {
  const allFeaturedProjects: Queries.AllFeaturedProjectsQuery = useStaticQuery(graphql`
    query AllFeaturedProjects {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/content/featuredProjects/"}}
        sort: {fields: slug}
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            url
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
      <section className={section}>
        {allFeaturedProjects.allMdx.nodes.length && allFeaturedProjects.allMdx.nodes.map((project, i) => (
          <Card
            key={i}
            variant={i % 2 ? 'inverted' : undefined}
            className={projectClass}
          >
            <CardMedia
              href={project.frontmatter?.url ? project.frontmatter.url : undefined}
              title={`See ${project.frontmatter?.title} project.`}
              alt={project.frontmatter?.title || ''}
              image={project.frontmatter?.image?.childImageSharp?.gatsbyImageData as IGatsbyImageData}
            />
            <CardContent>
              <CardTitle>
                {project.frontmatter?.title}
              </CardTitle>
              <p>{project.frontmatter?.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </LayoutPage>
  )
}

export default ProjectsPage