const path = require('path')
const main = require('config.storybook/src/main')

module.exports = {
  ...main,
  webpackFinal: async config => {
    main.webpackFinalScss({ include: path.resolve(__dirname, '../') })(config)
    return config
  },
}
