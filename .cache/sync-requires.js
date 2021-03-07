const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/404.js"))),
  "component---src-pages-archives-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/archives.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/elements.js"))),
  "component---src-pages-games-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/games.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/index.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/landing.js"))),
  "component---src-pages-resources-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/resources.js"))),
  "component---src-pages-upcoming-js": hot(preferDefault(require("/home/rickm/Data/Proj/scs/website-update/src/pages/upcoming.js")))
}

