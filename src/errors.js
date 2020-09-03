/**
 * @typedef {import('./types').Context} Context
 * @typedef {import('./types').SemanticReleaseError} SemanticReleaseError
 */

const pkg = require('../package.json')

const [homepage] = pkg.homepage.split('#')
/* eslint-disable no-unused-vars */
/**
 * @param {string} file -
 * @returns {string} -
 * @example
 * const link = linkify(href)
 */
const linkify = file => `${homepage}/blob/master/${file}`
/* eslint-enable no-unused-vars */

module.exports = new Map([
  [
    'CUSTOMERROR',
    /**
     * @param {Context} ctx -
     * @returns {SemanticReleaseError} -
     */
    ctx => ({
      message: 'A custom message.',
      details: 'A custom description.'
    })
  ]
])
