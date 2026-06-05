import SEO from '../components/SEO'
import Hero from '../components/sections/Hero'
import LearningPillars from '../components/sections/LearningPillars'
import WhyUs from '../components/sections/WhyUs'
import CorporateTraining from '../components/sections/CorporateTraining'
import FeatureGrid from '../components/sections/FeatureGrid'
import Testimonials from '../components/sections/Testimonials'
import CTABand from '../components/sections/CTABand'
import {
  getLocalizedCourses,
  getPageSeo,
  HOME_COURSES_PREVIEW_COUNT,
} from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function HomePage() {
  const { t } = useTranslation()
  const seo = getPageSeo('home', t)
  const courses = getLocalizedCourses(t).slice(0, HOME_COURSES_PREVIEW_COUNT)

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <Hero />
      <LearningPillars />
      <WhyUs />
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
