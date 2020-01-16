module.exports = {
  siteName: 'error.gr',
  siteDescription: 'Μια άλλη ματιά στην τεχνολογία (και όχι μόνο)',

  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
  },

  plugins: [

    // Wordpress parser
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.GRIDSOME_WORDPRESSURL, // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    },

    // Google Analytics
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-487374-1'
      }
    },

    // RSS Feed generator
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'WordPressPost',
        feedOptions: {
          title: 'error.gr',
          feed_url: 'https://error.gr/rss.xml',
          site_url: 'https://error.gr'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.content,
          url: 'https://error.gr' + node.path,
          author: 'rocean',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }
  ]
}
