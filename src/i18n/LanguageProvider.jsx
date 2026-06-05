import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import pl from './translations/pl.js'
import en from './translations/en.js'

const STORAGE_KEY = 'cl_locale'
const DEFAULT_LOCALE = 'pl'

const TRANSLATIONS = { pl, en }

export const LanguageContext = createContext(null)

function resolve(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

function interpolate(str, vars = {}) {
  if (typeof str !== 'string') return str
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? '')
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'pl') return saved
    } catch {
      /* ignore */
    }
    return DEFAULT_LOCALE
  })

  const setLocale = useCallback((next) => {
    if (next !== 'pl' && next !== 'en') return
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const t = useCallback(
    (key, vars) => {
      const dict = TRANSLATIONS[locale] ?? TRANSLATIONS.pl
      const value =
        resolve(dict, key) ??
        resolve(TRANSLATIONS.en, key) ??
        key
      if (typeof value !== 'string') return value
      return interpolate(value, vars)
    },
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, t, translations: TRANSLATIONS[locale] }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
