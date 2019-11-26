const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
let percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on('task', percyHealthCheck)
  addMatchImageSnapshotPlugin(on, config)
}
