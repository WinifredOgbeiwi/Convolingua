/**
 * Site URL — switch dev / production by commenting ONE line below.
 *
 * Local testing:
 *   const SITE_ENV = 'development'
 *   // const SITE_ENV = 'production'
 *
 * Deploy (Vercel):
 *   // const SITE_ENV = 'development'
 *   const SITE_ENV = 'production'
 */

// const SITE_ENV = 'development'
const SITE_ENV = 'production'

const ENV_CONFIG = {
  development: {
    siteUrl: 'http://localhost:5173',
  },
  production: {
    siteUrl: 'https://convolingua20.vercel.app',
  },
}

const active = ENV_CONFIG[SITE_ENV] ?? ENV_CONFIG.production

/** Public site origin, no trailing slash */
export const SITE_URL = active.siteUrl.replace(/\/$/, '')

/** Contact / booking page (used in assessment emails) */
export const BOOKING_URL = `${SITE_URL}/contact`

/** Full URL for a path, e.g. absoluteUrl('/courses') */
export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export { SITE_ENV }
