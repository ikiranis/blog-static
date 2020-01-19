module.exports = {
  siteName: process.env.GRIDSOME_SITE_NAME,
  // siteDescription: process.env.GRIDSOME_SITE_DESCRIPTION,
  siteUrl: process.env.GRIDSOME_SITE_URL,

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
        id: process.env.GRIDSOME_GOOGLE_ANALYTICS_ID
      }
    },

    // RSS Feed generator
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'WordPressPost',
        feedOptions: {
          title: process.env.GRIDSOME_SITE_NAME,
          feed_url: process.env.GRIDSOME_SITE_URL + '/rss.xml',
          site_url: process.env.GRIDSOME_SITE_URL
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.content,
          url: process.env.GRIDSOME_SITE_URL + node.path,
          author: process.env.GRIDSOME_SITE_NAME,
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },

    // Sitemap plugin
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/*': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    }

  ]
}
