const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/natit/projects/personal/lwpLabsFE/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/natit/projects/personal/lwpLabsFE/src/pages/404.js"))),
  "component---src-pages-course-index-js": hot(preferDefault(require("/Users/natit/projects/personal/lwpLabsFE/src/pages/course/index.js"))),
  "component---src-pages-courses-index-js": hot(preferDefault(require("/Users/natit/projects/personal/lwpLabsFE/src/pages/courses/index.js"))),
  "component---src-pages-home-index-js": hot(preferDefault(require("/Users/natit/projects/personal/lwpLabsFE/src/pages/home/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/natit/projects/personal/lwpLabsFE/src/pages/index.js"))),
  "component---src-pages-login-index-js": hot(preferDefault(require("/Users/natit/projects/personal/lwpLabsFE/src/pages/Login/index.js"))),
  "component---src-pages-testimonials-index-js": hot(preferDefault(require("/Users/natit/projects/personal/lwpLabsFE/src/pages/testimonials/index.js")))
}

