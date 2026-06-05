import SEO from '../components/SEO'
import PageHero from '../components/sections/PageHero'
import FeatureGrid from '../components/sections/FeatureGrid'
import Pricing from '../components/sections/Pricing'
import CTABand from '../components/sections/CTABand'
import {
  getLocalizedCourses,
  getPageImage,
  getPageSeo,
} from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function CoursesPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('courses', t)
  const courses = getLocalizedCourses(t)

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <PageHero
        label={t('coursesPage.heroLabel')}
        title={t('coursesPage.heroTitle')}
        description={t('coursesPage.heroDesc')}
        image={getPageImage('courses')}
      />
      <FeatureGrid
        id="courses-list"
        courses={courses}
        label={t('courses.pageLabel')}
        title={t('courses.pageTitle')}
        description={t('courses.pageDesc')}
      />
      <Pricing />
      <CTABand />
    </>
  )
}
