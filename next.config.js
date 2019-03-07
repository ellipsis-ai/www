const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = withTypescript(
  withLess({
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      if (dev) {
        return defaultPathMap;
      }
      // This will copy robots.txt from your project root into the out directory
      await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'))
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/error.html': { page: '/_error' }
      };
    }
  })
)
