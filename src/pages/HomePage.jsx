import SEO from '../components/SEO'
import Hero from '../components/sections/Hero'
import LearningPillars from '../components/sections/LearningPillars'
import CorporateTraining from '../components/sections/CorporateTraining'
import FeatureGrid from '../components/sections/FeatureGrid'
import Testimonials from '../components/sections/Testimonials'
import CTABand from '../components/sections/CTABand'
import { PAGE_SEO } from '../data/seo'
import { HOME_COURSES_PREVIEW } from '../data/courses'

export default function HomePage() {
  const seo = PAGE_SEO.home
  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <Hero />
      <LearningPillars />
      <CorporateTraining />
      <FeatureGrid
        courses={HOME_COURSES_PREVIEW}
        showViewAll
        title="Popular programs for professionals"
      />
      <Testimonials />
      <CTABand />
    </>
  )
}
