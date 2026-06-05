import { SITE_URL } from '../config/site.js'

const PATHS = {
  home: '/',
  about: '/about',
  courses: '/courses',
  contact: '/contact',
  assessment: '/assessment',
}

/** @param {(key: string) => string} t */
export function getPageSeo(page, t) {
  return {
    title: t(`seo.pages.${page}.title`),
    description: t(`seo.pages.${page}.description`),
    path: PATHS[page] ?? '/',
  }
}

/** @param {(key: string) => string} t */
export function getDefaultSeo(t) {
  return {
    siteName: 'ConvoLingua',
    siteUrl: SITE_URL,
    title: t('seo.default.title'),
    description: t('seo.default.description'),
    keywords: t('seo.default.keywords'),
    image: '/og-image.jpg',
  }
}
