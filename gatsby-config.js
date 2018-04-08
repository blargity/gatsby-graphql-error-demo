const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src', 'content'),
        name: 'content',
      },
    },
    // Any JSON files should get transformed.
    `gatsby-transformer-json`,
    'gatsby-plugin-react-helmet',
  ],
}
