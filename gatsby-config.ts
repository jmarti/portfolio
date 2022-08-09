import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "My website",
    siteUrl: "https://www.yourdomain.tld",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "about",
        path: `${__dirname}/content/about`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "featuredProjects",
        path: `${__dirname}/content/featuredProjects`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "otherProjects",
        path: `${__dirname}/content/otherProjects`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    `gatsby-plugin-layout`,
  ],
}

export default config
