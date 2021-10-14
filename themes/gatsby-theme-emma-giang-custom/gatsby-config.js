module.exports = (options) => ({
  plugins: [
    {
      resolve: `@giangnguyencrystal1/gatsby-theme-emma-core-giang-custom`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
