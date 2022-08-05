import React from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import { section } from './Projects.module.css'
import LayoutPage from '../../layouts/LayoutPage'
import PageTitle from '../../components/PageTitle'
import { Card, CardContent, CardMedia, CardTitle } from '../../components/Card'


const ProjectsPage = (props: PageProps) => {
  const allProjects: Queries.AllBiosQuery = useStaticQuery(graphql`
    query AllProjects {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/content/projects/"}}
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
        {allProjects.allMdx.nodes.length && allProjects.allMdx.nodes.map((project, i) => (
          <Card
            key={i}
            variant={i % 2 ? 'inverted' : undefined}
          >
            <CardMedia
              href={project.frontmatter?.url ? `//${project.frontmatter.url}` : undefined}
              title={`See ${project.frontmatter?.title} project.`}
              alt={project.frontmatter?.image_alt || ''}
              image={project.frontmatter?.image?.childImageSharp?.gatsbyImageData as IGatsbyImageData}
            />
            <CardContent>
              <CardTitle>
                {project.frontmatter?.title}
                {project.frontmatter?.url && (
                  <> // <a title={`See ${project.frontmatter?.title} project.`} target="_blank" href={`//${project.frontmatter.url}`}>
                    {project.frontmatter.url}
                  </a>
                  </>
                )}
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