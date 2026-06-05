import SEO from '../components/SEO'
import Hero from '../components/sections/Hero'
import LearningPillars from '../components/sections/LearningPillars'
import CorporateTraining from '../components/sections/CorporateTraining'
import FeatureGrid from '../components/sections/FeatureGrid'
import Testimonials from '../components/sections/Testimonials'
import CTABand from '../components/sections/CTABand'
import { getLocalizedCourses } from '../i18n/localizeCourses'
import { getPageSeo } from '../i18n/getPageSeo'
import { useTranslation } from '../i18n/useTranslation'
export default function HomePage() {
  const { t } = useTranslation()
  const seo = getPageSeo('home', t)
  const courses = getLocalizedCourses(t).slice(0, 3)

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <Hero />
      <LearningPillars />
      <CorporateTraining />
      <FeatureGrid
        courses={courses}
        showViewAll
        title={t('courses.homeTitle')}
      />
      <Testimonials />
      <CTABand />
    </>
  )
}
