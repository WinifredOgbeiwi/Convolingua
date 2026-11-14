import { useTranslation } from '../../i18n/useTranslation'

// English first: it is the default language.
const LOCALES = ['en', 'pl']

export default function LanguageSwitcher({ className = '' }) {
  const { locale, setLocale, t } = useTranslation()

  return (
    <div
      className={`lang-switcher ${className}`.trim()}
      role="group"
      aria-label={t('lang.label')}
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className={locale === code ? 'active' : undefined}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {t(`lang.${code}`)}
        </button>
      ))}
    </div>
  )
}
