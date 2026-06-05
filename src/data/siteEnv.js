/**
 * Site URL only — kept separate so vite.config.js can import without loading image assets.
 * Re-exported from siteContent.js for app use.
 */

// const SITE_ENV = 'development'
const SITE_ENV = 'production'

const ENV_CONFIG = {
  development: { siteUrl: 'http://localhost:5173' },
  production: { siteUrl: 'https://convolingua20.vercel.app' },
}

const activeEnv = ENV_CONFIG[SITE_ENV] ?? ENV_CONFIG.production

export const SITE_URL = activeEnv.siteUrl.replace(/\/$/, '')
export const BOOKING_URL = `${SITE_URL}/contact`
export { SITE_ENV }

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
