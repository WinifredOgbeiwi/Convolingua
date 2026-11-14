import SEO from '../components/SEO'
import ProgramPanels from '../components/home/ProgramPanels'
import AboutSection from '../components/home/AboutSection'
import ContactSection from '../components/home/ContactSection'
import { getPageSeo } from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function HomePage() {
  const { t } = useTranslation()
  const seo = getPageSeo('home', t)

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <ProgramPanels />
      <AboutSection />
      <ContactSection />
    </>
  )
}
