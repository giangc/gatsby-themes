/* eslint-disable prettier/prettier */
const withDefaults = require(`./utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)

  return {
    siteMetadata: {
      siteTitle: `Crystal Technologies`,
      siteTitleAlt: `Crystal`,
      siteHeadline: `Crystal - the digital consulting studio`,
      siteUrl: `https://thecrystal.tech`,
      siteDescription: `Crystal - the digital consulting studio`,
      companyName: `Crystal technologies JST`,
      addressVn: `Level 3A, Thanh Xuan Complex, 6 Le Van Thiem Street, Thanh Xuan District, Hanoi, Vietnam`,
      addressSingapore: `11 Cavan Road #02-07, Singapore 209848`,
      contact: `contact@thecrystal.tech`,
      siteImage: `/`,
      author: `@giangnguyen`,
      basePath: options.basePath,
      projectsPath: options.projectsPath,
      pagesPath: options.pagesPath,
    },

    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.contentPath,
          path: options.contentPath,
        },
      },
      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          lessBabel: true,
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ].filter(Boolean),
  }
}
