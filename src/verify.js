const getError = require('./get-error')

/**
 * @typedef {import('./types').Context} Context
 * @typedef {import('./types').Config} Config
 */
/**
 * @param {Config} pluginConfig -
 * @param {Context} ctx -
 * @returns {*} -
 * @example
 * verifyConditions(pluginConfig, ctx)
 */
module.exports = (pluginConfig, ctx) => {
  if (!ctx.env.CUSTOM_ENV) {
    throw getError('CUSTOMERROR', ctx)
  }
}
