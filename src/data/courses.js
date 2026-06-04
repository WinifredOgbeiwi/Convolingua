import { IMAGES } from '../utilities'

export const COURSES = [
  {
    slug: 'business-english',
    title: 'Business English',
    description:
      'Emails, reports, negotiations, and stakeholder communication tailored to your industry.',
    image: IMAGES.Business,
  },
  {
    slug: 'corporate-training',
    title: 'Corporate Training',
    description:
      'Scalable programs for teams with custom KPIs, admin dashboards, and dedicated success managers.',
    image: IMAGES.Corporate,
  },
  {
    slug: 'professional-fluency',
    title: 'Professional Fluency',
    description:
      'Build confidence for meetings, presentations, and leadership conversations in international settings.',
    image: IMAGES.Professional,
  },
  {
    slug: 'general-english',
    title: 'General English',
    description:
      'Structured progression from intermediate to advanced with live practice and measurable milestones.',
    image: IMAGES.General,
  },
  {
    slug: 'exam-preparation',
    title: 'Exam Preparation',
    description:
      'Targeted coaching for IELTS, Cambridge, and other certifications with mock tests and expert feedback.',
    image: IMAGES.Exam,
  },
  {
    slug: 'executive-coaching',
    title: 'Executive Coaching',
    description:
      'One-on-one sessions for C-suite and senior leaders who need discretion, flexibility, and fast results.',
    image: IMAGES.General2,
  },
]

export const HOME_COURSES_PREVIEW = COURSES.slice(0, 3)
