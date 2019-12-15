module.exports = {
  siteName: 'error.gr',
  siteDescription: 'Μια άλλη ματιά στην τεχνολογία (και όχι μόνο)',

  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://error.gr', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
