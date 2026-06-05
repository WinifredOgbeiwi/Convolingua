import { useEffect } from 'react'
import { SITE_URL } from '../config/site.js'
import { useTranslation } from '../i18n/useTranslation'
import { getDefaultSeo } from '../i18n/getPageSeo'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function SEO({ title, description, path = '/', keywords }) {
  const { t } = useTranslation()
  const defaults = getDefaultSeo(t)
  const canonical = `${SITE_URL}${path}`
  const fullTitle = title || defaults.title
  const desc = description || defaults.description
  const kw = keywords || defaults.keywords

  useEffect(() => {
    document.title = fullTitle
    setMeta('description', desc)
    setMeta('keywords', kw)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', defaults.siteName, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }, [fullTitle, desc, kw, canonical])

  return null
}
