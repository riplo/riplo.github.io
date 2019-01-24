module.exports = {
  siteMetadata: {
    title: `Riplo`,
    description: `Student run freelance web development shop.`,
    author: `Cameron Cabo <cameroncabo@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `riplo`,
        short_name: `riplo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/riplo-icon.png`, // This path is relative to the root of the site. TODO
      },
    },
  ],
}
