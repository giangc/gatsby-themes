module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Giang Starter for Crystal`,
    siteTitleAlt: `Giang Starter for Crystal - @lekoarts/gatsby-theme-giang-starter`,
    siteHeadline: `Giang Starter for Crystal - Gatsby Theme from @lekoarts`,
    siteUrl: `https://giang-starter.lekoarts.de`,
    siteDescription: `Stub description for giang-starter`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-giang-starter-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
});
