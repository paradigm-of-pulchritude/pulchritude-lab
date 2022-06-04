const { injectAxe, checkA11y } = require('axe-playwright')

module.exports = {
  async preRender(page) {
    await injectAxe(page)
  },
  async postRender(page) {
    await checkA11y(page, '#root', {
      detailedReport: true,
      includedImpacts: ['minor', 'moderate', 'serious', 'critical'],
      axeOptions: {},
      detailedReportOptions: {
        html: true,
      },
    })
  },
}
