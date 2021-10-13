require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Giang Starter for Crystal - TODO`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-giang-starter`,
      options: {},
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `giang-starter - @lekoarts/gatsby-theme-giang-starter`,
        short_name: `giang-starter`,
        description: `Stub description for giang-starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
