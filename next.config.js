const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
module.exports = withTypescript(
  withLess({
    exportPathMap: async function(defaultPathMap) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/error.html': { page: '/_error' }
      };
    }
  })
)
