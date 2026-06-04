import { useEffect } from 'react'
import { DEFAULT_SEO } from '../data/seo'

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
  const canonical = `${DEFAULT_SEO.siteUrl}${path}`
  const fullTitle = title || DEFAULT_SEO.title
  const desc = description || DEFAULT_SEO.description
  const kw = keywords || DEFAULT_SEO.keywords

  useEffect(() => {
    document.title = fullTitle
    setMeta('description', desc)
    setMeta('keywords', kw)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', DEFAULT_SEO.siteName, 'property')
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
