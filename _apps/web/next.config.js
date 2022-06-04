const withTM = require('next-transpile-modules')(['pkg.ui-react'])

module.exports = withTM({
  reactStrictMode: true,
})
