const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'My Doc',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/noro-mfe/workspace/docz-site/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'My Doc',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/noro-mfe/workspace/docz-site',
          templates:
            '/Users/noro-mfe/workspace/docz-site/node_modules/docz-core/dist/templates',
          docz: '/Users/noro-mfe/workspace/docz-site/.docz',
          cache: '/Users/noro-mfe/workspace/docz-site/.docz/.cache',
          app: '/Users/noro-mfe/workspace/docz-site/.docz/app',
          appPackageJson: '/Users/noro-mfe/workspace/docz-site/package.json',
          appTsConfig: '/Users/noro-mfe/workspace/docz-site/tsconfig.json',
          gatsbyConfig: '/Users/noro-mfe/workspace/docz-site/gatsby-config.js',
          gatsbyBrowser:
            '/Users/noro-mfe/workspace/docz-site/gatsby-browser.js',
          gatsbyNode: '/Users/noro-mfe/workspace/docz-site/gatsby-node.js',
          gatsbySSR: '/Users/noro-mfe/workspace/docz-site/gatsby-ssr.js',
          importsJs: '/Users/noro-mfe/workspace/docz-site/.docz/app/imports.js',
          rootJs: '/Users/noro-mfe/workspace/docz-site/.docz/app/root.jsx',
          indexJs: '/Users/noro-mfe/workspace/docz-site/.docz/app/index.jsx',
          indexHtml: '/Users/noro-mfe/workspace/docz-site/.docz/app/index.html',
          db: '/Users/noro-mfe/workspace/docz-site/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
