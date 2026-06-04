import SEO from '../components/SEO'
import PageHero from '../components/sections/PageHero'
import FeatureGrid from '../components/sections/FeatureGrid'
import Pricing from '../components/sections/Pricing'
import CTABand from '../components/sections/CTABand'
import { PAGE_SEO } from '../data/seo'
import { COURSES } from '../data/courses'
import { IMAGES } from '../utilities'

export default function CoursesPage() {
  const seo = PAGE_SEO.courses
  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <PageHero
        label="Courses"
        title="Programs that fit your schedule and ambitions"
        description="From business communication to exam prep—each course blends live coaching, structured practice, and measurable milestones."
        image={IMAGES.AllCourses}
      />
      <FeatureGrid
        id="courses-list"
        courses={COURSES}
        label="All programs"
        title="Choose the path that matches your goals"
        description="Flexible formats for individuals and teams. Every program includes live sessions and progress tracking."
      />
      <Pricing />
      <CTABand />
    </>
  )
}
