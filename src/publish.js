/**
 * @typedef {import('./types').Context} Context
 * @typedef {import('./types').Config} Config
 */
/**
 * @param {Config} pluginConfig -
 * @param {Context} ctx -
 * @returns {*} -
 * @example
 * publish(pluginConfig, ctx)
 */
module.exports = (pluginConfig, ctx) => {
  ctx.logger.log('Deploy')
}
