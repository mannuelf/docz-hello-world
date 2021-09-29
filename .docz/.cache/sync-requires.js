

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": (preferDefault(require("/Users/noro-mfe/workspace/docz-site/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": (preferDefault(require("/Users/noro-mfe/workspace/docz-site/README.md"))),
  "component---src-pages-404-js": (preferDefault(require("/Users/noro-mfe/workspace/docz-site/.docz/src/pages/404.js")))
}

