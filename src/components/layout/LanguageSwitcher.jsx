import { useTranslation } from '../../i18n/useTranslation'

export default function LanguageSwitcher({ className = '' }) {
  const { locale, setLocale, t } = useTranslation()

  return (
    <div
      className={`lang-switcher ${className}`.trim()}
      role="group"
      aria-label={t('lang.label')}
    >
      <button
        type="button"
        className={locale === 'pl' ? 'active' : undefined}
        onClick={() => setLocale('pl')}
        aria-pressed={locale === 'pl'}
      >
        {t('lang.pl')}
      </button>
      <button
        type="button"
        className={locale === 'en' ? 'active' : undefined}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        {t('lang.en')}
      </button>
    </div>
  )
}
