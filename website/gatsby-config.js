const path = require("path")

module.exports = {
  siteMetadata: {
    description: "Music is everything.",
    siteUrl: "https://www.appleloopmusic.com",
    title: "Apple Loop Music",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Apple Loop Music`,
        short_name: `ALM`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          Assets: path.resolve(__dirname, "src/assets"),
          Components: path.resolve(__dirname, "src/components"),
          Lib: path.resolve(__dirname, "src/lib"),
          Pages: path.resolve(__dirname, "src/pages"),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `skyblue`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
