const newsletterFeed = require('./src/utils/newsletterFeed')

module.exports = options => {
  const {
    feed = true,
    feedTitle = 'Minimal Blog - @lekoarts/gatsby-theme-minimal-blog'
  } = options

  return {
    siteMetadata: {
      siteTitle: 'Jesiel Viana',
      siteTitleAlt: 'Jesiel Viana',
      siteHeadline: 'Jesiel Viana',
      siteUrl: 'https://jesielviana.com',
      siteDescription:
        'Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.',
      siteLanguage: 'pt-Br',
      siteImage: '/banner.jpg',
      author: '@jesielviana'
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /assets/
          }
        }
      },
      {
        resolve: '@lekoarts/gatsby-theme-minimal-blog-core',
        options
      },
      feed && {
        resolve: 'gatsby-plugin-feed',
        options: newsletterFeed(feedTitle)
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-typescript',
      'gatsby-plugin-catch-links',
      'gatsby-plugin-theme-ui'
    ].filter(Boolean)
  }
}
