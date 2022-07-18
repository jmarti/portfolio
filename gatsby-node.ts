import { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type LayoutQuery {
      site: Site!
    }
    type Site {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
    }
    
    type BlogPageQuery {
      allMdx: AllMdx!
    }
    type AllMdx {
      nodes: [MdxNode!]!
    }
    type MdxNode {
      id: String!
      slug: String!
      frontmatter: MdxBlogPageFrontmatter!
      body: String!
      parent: File @fileByRelativePath
    }
    type MdxBlogPageFrontmatter {
      title: String!
    }

    type BlogPostQuery {
      mdx: MdxBlogPost!
    }
    type MdxBlogPost {
      frontmatter: MdxBlogPostFrontMatter!
      body: String!
    }
    type MdxBlogPostFrontMatter {
      title: String!
      date: String!
      hero_image: File!
      hero_image_alt: String!
      hero_image_credit_link: String!
      hero_image_credit_text: String!
    }
  `

  createTypes(typeDefs)
}