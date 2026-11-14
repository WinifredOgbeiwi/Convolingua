/**
 * ConvoLingua — single source of truth for site data, routes, images, and link config.
 * Copy lives in i18n translations; this file holds structure, URLs, assets, and resolvers.
 */

import Professional from '../assets/professionals.jpg'
import Corporate from '../assets/corporate.jpg'
import General from '../assets/general.jpg'
import Teacher from '../assets/teacher.jpg'
import Skyscrapper from '../assets/skyscrapers.jpg'
import About from '../assets/about.jpg'
import Prices from '../assets/prices.jpg'
import ContactImg from '../assets/contact.jpg'
import Business from '../assets/business.jpg'
import AllCourses from '../assets/allCourses.jpg'
import General2 from '../assets/general2.jpg'
import Exam from '../assets/exam.jpg'
import Child from '../assets/child.jpg'
import Logo from '../assets/logo.png'
import Piotr from '../assets/piotr.jpg'
import Zuzzana from '../assets/zuzzana.jpg'
import HomeAdults from '../assets/home/adults.jpg'
import HomeKids from '../assets/home/kids.jpg'
import HomeAbout from '../assets/home/about.jpg'
import RoboticsKids from '../assets/robotics/kids-robotics.jpg'
import RoboticsBuild from '../assets/robotics/kids-build.jpg'
import RoboticsLaptop from '../assets/robotics/kids-laptop.jpg'
import KidsReading from '../assets/kids/reading.jpg'
import KidsPlay from '../assets/kids/play.jpg'
import KidsStory from '../assets/kids/story.jpg'
import KidsMascot from '../assets/kids/mascot.png'

import {
  HiClock,
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineLightBulb,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlinePuzzle,
  HiOutlineSparkles,
  HiOutlineMusicNote,
  HiOutlineBookOpen,
  HiOutlineChatAlt2,
  HiOutlineHeart,
  HiOutlineAnnotation,
} from 'react-icons/hi'
import { FaChalkboardTeacher, FaRegClock, FaDollarSign } from 'react-icons/fa'
import { IoChatbubblesOutline } from 'react-icons/io5'

import {
  SITE_URL,
  BOOKING_URL,
  SITE_ENV,
  absoluteUrl,
} from './siteEnv.js'

export { SITE_URL, BOOKING_URL, SITE_ENV, absoluteUrl }

export const SITE_NAME = 'ConvoLingua'

// ─── Images ──────────────────────────────────────────────────────────────────
export const IMAGES = {
  Professional,
  Corporate,
  General,
  Teacher,
  Skyscrapper,
  About,
  Prices,
  Contact: ContactImg,
  AllCourses,
  Business,
  General2,
  Exam,
  Child,
  Logo,
  Piotr,
  Zuzzana,
  HomeAdults,
  HomeKids,
  HomeAbout,
  RoboticsKids,
  RoboticsBuild,
  RoboticsLaptop,
  KidsReading,
  KidsPlay,
  KidsStory,
  KidsMascot,
}

// ─── Routes & SEO paths ──────────────────────────────────────────────────────
export const ROUTES = {
  home: '/',
  about: '/about',
  courses: '/courses',
  contact: '/contact',
  login: '/login',
  forgotPassword: '/forgot-password',
  assessment: '/assessment',
  privacy: '/privacy',
  terms: '/terms',
  // Program pages (empty placeholders for now)
  professionals: '/professionals',
  robotics: '/robotics',
  kids: '/kids',
}

export const SEO_DEFAULT = {
  siteName: SITE_NAME,
  image: '/og-image.jpg',
}

// ─── Navigation ──────────────────────────────────────────────────────────────
/** In-page anchors on the landing page (section ids live in components/home). */
export const HOME_ANCHORS = {
  programs: '/#programs',
  about: '/#about',
  contact: '/#contact',
}

export const NAV_LINKS = [
  { to: ROUTES.professionals, labelKey: 'nav.adults', page: true },
  { to: ROUTES.robotics, labelKey: 'nav.robotics', page: true },
  { to: ROUTES.kids, labelKey: 'nav.kids', page: true },
  { to: HOME_ANCHORS.about, labelKey: 'nav.about' },
]

export const HEADER_CTA = {
  to: ROUTES.login,
  labelKey: 'nav.cta',
  className: 'btn btn-primary header-cta',
}

export const FOOTER_PROGRAM_LINKS = [
  { to: ROUTES.professionals, labelKey: 'footer.links.adults' },
  { to: ROUTES.robotics, labelKey: 'footer.links.robotics' },
  { to: ROUTES.kids, labelKey: 'footer.links.kids' },
]

export const FOOTER_COMPANY_LINKS = [
  { to: HOME_ANCHORS.about, labelKey: 'footer.links.about' },
  { to: HOME_ANCHORS.contact, labelKey: 'footer.links.contact' },
]

// ─── Programs (the three landing-page boxes) ─────────────────────────────────
// Names and copy are placeholders — edit in i18n `home.programs.*`.
export const PROGRAMS = [
  { id: 'adults', number: '01', route: ROUTES.professionals, imageKey: 'HomeAdults' },
  { id: 'robotics', number: '02', route: ROUTES.robotics, imageKey: null },
  { id: 'kids', number: '03', route: ROUTES.kids, imageKey: 'HomeKids' },
]

// ─── English for Professionals page ──────────────────────────────────────────
/** Placeholder prices — change here (and the symbol/currency) when final. */
export const PROFESSIONALS_CURRENCY = 'zł'

/** Premium → Standard → Essential (adults & corporate from programme notes). */
export const PROFESSIONALS_PLANS = [
  { id: 'premium', price: 650, featured: false },
  { id: 'standard', price: 520, featured: true },
  { id: 'essential', price: 450, featured: false },
]

/** Opens the landing-page contact form with "adults" pre-selected. */
export const PROFESSIONALS_CONTACT_LINK = `${ROUTES.home}?program=adults#contact`

// ─── AI & Robotics page ──────────────────────────────────────────────────────
export const ROBOTICS_CURRENCY = 'zł'

/** Premium → Standard → Essential (price anchoring from programme notes). */
export const ROBOTICS_PLANS = [
  { id: 'premium', price: 650, featured: false },
  { id: 'standard', price: 520, featured: true },
  { id: 'essential', price: 450, featured: false },
]

export const ROBOTICS_FOCUS_ICONS = [
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineLightBulb,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlinePuzzle,
]

export const ROBOTICS_CONTACT_LINK = `${ROUTES.home}?program=robotics#contact`

export const ROBOTICS_GALLERY = [
  { id: 'scratch', imageKey: 'RoboticsLaptop' },
  { id: 'build', imageKey: 'RoboticsKids' },
  { id: 'circuits', imageKey: 'RoboticsBuild' },
]

// ─── Kids page ───────────────────────────────────────────────────────────────
export const KIDS_CURRENCY = 'zł'

/** Premium → Standard → Essential (price anchoring from programme notes). */
export const KIDS_PLANS = [
  { id: 'premium', price: 650, featured: false },
  { id: 'standard', price: 520, featured: true },
  { id: 'essential', price: 450, featured: false },
]

export const KIDS_FOCUS_ICONS = [
  HiOutlineBookOpen,
  HiOutlineSparkles,
  HiOutlineChatAlt2,
  HiOutlinePuzzle,
  HiOutlineLightBulb,
  HiOutlineHeart,
]

export const KIDS_GALLERY = [
  { id: 'stories', imageKey: 'KidsReading' },
  { id: 'play', imageKey: 'KidsPlay' },
  { id: 'imagine', imageKey: 'KidsStory' },
]

export const KIDS_CONTACT_LINK = `${ROUTES.home}?program=kids#contact`

export const FOOTER_LEGAL_LINKS = [
  { to: ROUTES.privacy, labelKey: 'footer.privacyLink' },
  { to: ROUTES.terms, labelKey: 'footer.termsLink' },
]

// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT = {
  email: 'info@convolingua.com',
  phone: '+48 729 688 472',
  phoneHref: 'tel:+48729688472',
  emailHref: 'mailto:info@convolingua.com',
  address: 'Bukowińska 24A, 02-703 Warsaw, Poland',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Bukowi%C5%84ska+24A%2C+02-703+Warsaw%2C+Poland',
}

const CONTACT_ICONS = {
  location: HiLocationMarker,
  mail: HiMail,
  phone: HiPhone,
  clock: HiClock,
}

export const CONTACT_DETAIL_ITEMS = [
  {
    id: 'address',
    icon: 'location',
    labelKey: 'contact.address',
    value: { source: 'static', text: CONTACT.address },
    link: { href: CONTACT.mapsUrl, external: true },
  },
  {
    id: 'email',
    icon: 'mail',
    labelKey: 'contact.email',
    value: { source: 'static', text: CONTACT.email },
    link: { href: CONTACT.emailHref },
  },
  {
    id: 'phone',
    icon: 'phone',
    labelKey: 'contact.phone',
    value: { source: 'static', text: CONTACT.phone },
    link: { href: CONTACT.phoneHref },
  },
  {
    id: 'response',
    icon: 'clock',
    labelKey: 'contact.responseTime',
    value: { source: 'translation', key: 'contact.responseValue' },
  },
]

export const CONTACT_ASSESSMENT_CTA = {
  to: ROUTES.assessment,
  labelKey: 'contact.assessmentLink',
  className: 'btn btn-ghost btn-lg btn-block contact-panel-cta',
}

export const CONTACT_FORM_SUCCESS_CTA = {
  to: ROUTES.assessment,
  labelKey: 'contact.takeAssessment',
  className: 'btn btn-primary',
}

export const CONTACT_FORM_INTERESTS = ['adults', 'robotics', 'kids', 'other']

// ─── Courses ─────────────────────────────────────────────────────────────────
export const COURSE_ITEMS = [
  { slug: 'business-english', imageKey: 'Business' },
  { slug: 'corporate-training', imageKey: 'Corporate' },
  { slug: 'professional-fluency', imageKey: 'Professional' },
  { slug: 'general-english', imageKey: 'General' },
  { slug: 'exam-preparation', imageKey: 'Exam' },
  { slug: 'executive-coaching', imageKey: 'General2' },
]

export const HOME_COURSES_PREVIEW_COUNT = 3

// ─── Why choose us ───────────────────────────────────────────────────────────
const WHY_US_ICONS = {
  instructors: FaChalkboardTeacher,
  scheduling: FaRegClock,
  pricing: FaDollarSign,
  interactive: IoChatbubblesOutline,
}

export const WHY_US_ITEMS = [
  { id: 'instructors', icon: 'instructors', titleKey: 'whyUs.items.instructors.title', descKey: 'whyUs.items.instructors.description' },
  { id: 'scheduling', icon: 'scheduling', titleKey: 'whyUs.items.scheduling.title', descKey: 'whyUs.items.scheduling.description' },
  { id: 'pricing', icon: 'pricing', titleKey: 'whyUs.items.pricing.title', descKey: 'whyUs.items.pricing.description' },
  { id: 'interactive', icon: 'interactive', titleKey: 'whyUs.items.interactive.title', descKey: 'whyUs.items.interactive.description' },
]

// ─── Pricing ─────────────────────────────────────────────────────────────────
export const PRICING_PLANS = [
  {
    id: 'premium',
    price: '650',
    priceType: 'monthly',
    featured: false,
    link: { to: `${ROUTES.professionals}#book` },
    ctaLabelKey: 'pricing.plans.premium.cta',
    planKey: 'pricing.plans.premium',
  },
  {
    id: 'standard',
    price: '520',
    priceType: 'monthly',
    featured: true,
    link: { to: `${ROUTES.professionals}#book` },
    ctaLabelKey: 'pricing.plans.standard.cta',
    planKey: 'pricing.plans.standard',
  },
  {
    id: 'essential',
    price: '450',
    priceType: 'monthly',
    featured: false,
    link: { to: `${ROUTES.professionals}#book` },
    ctaLabelKey: 'pricing.plans.essential.cta',
    planKey: 'pricing.plans.essential',
  },
]

// ─── Testimonials ────────────────────────────────────────────────────────────
export const TESTIMONIAL_AVATAR_KEYS = ['Zuzzana', 'Piotr', 'Teacher']

// ─── Section CTAs ────────────────────────────────────────────────────────────
export const SECTION_CTAS = {
  corporate: {
    to: ROUTES.contact,
    labelKey: 'corporate.cta',
    className: 'btn btn-primary btn-lg',
  },
  method: {
    to: ROUTES.courses,
    labelKey: 'method.cta',
    className: 'btn btn-primary btn-lg',
  },
  coursesViewAll: {
    to: ROUTES.courses,
    labelKey: 'courses.viewAll',
    className: 'btn btn-primary',
  },
  aboutTalk: {
    to: ROUTES.contact,
    labelKey: 'about.talkCta',
    className: 'btn btn-primary btn-lg',
  },
  ctaBand: [
    {
      to: ROUTES.assessment,
      labelKey: 'cta.assessment',
      className: 'btn btn-primary btn-lg',
    },
    {
      to: ROUTES.courses,
      labelKey: 'cta.courses',
      className: 'btn btn-outline btn-lg',
    },
  ],
}

export const LEGAL_CROSS_LINKS = {
  privacy: { to: ROUTES.terms, labelKey: 'footer.termsLink' },
  terms: { to: ROUTES.privacy, labelKey: 'footer.privacyLink' },
  contact: { to: ROUTES.contact, labelKey: 'nav.contact' },
}

export const PAGE_IMAGES = {
  about: 'About',
  courses: 'AllCourses',
  contact: 'Contact',
}

// ─── Resolvers ───────────────────────────────────────────────────────────────
function resolveValue(value, t) {
  if (value.source === 'translation') return t(value.key)
  return value.text
}

function resolveCta(cta, t) {
  return {
    to: cta.to,
    label: t(cta.labelKey),
    className: cta.className,
  }
}

/** @param {(key: string) => string} t */
export function getNavLinks(t) {
  return NAV_LINKS.map((item) => ({
    ...item,
    label: t(item.labelKey),
  }))
}

/** @param {(key: string) => string} t */
export function getHeaderCta(t) {
  return resolveCta(HEADER_CTA, t)
}

/** @param {(key: string) => string} t */
export function getFooterProgramLinks(t) {
  return FOOTER_PROGRAM_LINKS.map((item) => ({
    ...item,
    label: t(item.labelKey),
  }))
}

/** @param {(key: string) => string} t */
export function getFooterCompanyLinks(t) {
  return FOOTER_COMPANY_LINKS.map((item) => ({
    ...item,
    label: t(item.labelKey),
  }))
}

/** @param {(key: string) => string} t */
export function getFooterLegalLinks(t) {
  return FOOTER_LEGAL_LINKS.map((item) => ({
    ...item,
    label: t(item.labelKey),
  }))
}

/** @param {(key: string) => string} t */
export function getContactDetails(t) {
  return CONTACT_DETAIL_ITEMS.map((item) => ({
    id: item.id,
    icon: CONTACT_ICONS[item.icon],
    label: t(item.labelKey),
    value: resolveValue(item.value, t),
    link: item.link ?? null,
  }))
}

/** @param {(key: string) => string} t */
export function getContactAssessmentCta(t) {
  return resolveCta(CONTACT_ASSESSMENT_CTA, t)
}

/** @param {(key: string) => string} t */
export function getContactFormSuccessCta(t) {
  return resolveCta(CONTACT_FORM_SUCCESS_CTA, t)
}

/** @param {(key: string) => string} t */
export function getLocalizedCourses(t) {
  return COURSE_ITEMS.map((course) => ({
    slug: course.slug,
    image: IMAGES[course.imageKey],
    title: t(`courses.items.${course.slug}.title`),
    description: t(`courses.items.${course.slug}.description`),
  }))
}

/** @param {(key: string) => string} t */
export function getPrograms(t) {
  return PROGRAMS.map((program) => {
    const base = `home.programs.${program.id}`
    const points = t(`${base}.points`)
    return {
      id: program.id,
      number: program.number,
      image: program.imageKey ? IMAGES[program.imageKey] : null,
      tag: t(`${base}.tag`),
      title: t(`${base}.title`),
      description: t(`${base}.description`),
      points: Array.isArray(points) ? points : [],
      cta: t(`${base}.cta`),
      imageAlt: t(`${base}.imageAlt`),
      // The whole card links to the program page.
      to: program.route,
    }
  })
}

/** @param {(key: string) => string} t */
export function getProfessionalsPage(t) {
  const stepItems = t('professionals.steps.items')
  const facts = t('professionals.facts')

  return {
    tag: t('professionals.tag'),
    title: t('professionals.title'),
    lead: t('professionals.lead'),
    ctaPricing: t('professionals.ctaPricing'),
    ctaBook: t('booking.cta'),
    image: IMAGES.HomeAdults,
    imageAlt: t('professionals.imageAlt'),
    badge: t('professionals.badge'),
    facts: Array.isArray(facts) ? facts : [],
    // Programs + pricing reuse the old Courses page content.
    courses: {
      label: t('courses.pageLabel'),
      title: t('courses.pageTitle'),
      desc: t('courses.pageDesc'),
      items: getLocalizedCourses(t),
    },
    steps: {
      label: t('professionals.steps.label'),
      title: t('professionals.steps.title'),
      items: Array.isArray(stepItems) ? stepItems : [],
    },
    pricing: {
      label: t('pricing.label'),
      title: t('pricing.title'),
      desc: t('pricing.desc'),
      popular: t('pricing.popular'),
      perMonth: t('pricing.perMonth'),
      custom: t('pricing.custom'),
      currency: PROFESSIONALS_CURRENCY,
      note: t('professionals.pricing.note'),
      plans: PROFESSIONALS_PLANS.map((plan) => {
        const copy = t(`pricing.plans.${plan.id}`)
        return {
          id: plan.id,
          featured: plan.featured,
          price: plan.price,
          name: copy.name,
          description: copy.description,
          features: copy.features || [],
        }
      }),
    },
  }
}

/** @param {(key: string) => string} t */
export function getRoboticsPage(t) {
  const facts = t('robotics.facts')
  const focusItems = t('robotics.focus.items')
  const stepItems = t('robotics.steps.items')
  const galleryCopy = t('robotics.gallery.items')

  return {
    tag: t('robotics.tag'),
    title: t('robotics.title'),
    lead: t('robotics.lead'),
    ctaPricing: t('robotics.ctaPricing'),
    ctaBook: t('booking.cta'),
    badge: t('robotics.badge'),
    ages: t('robotics.ages'),
    facts: Array.isArray(facts) ? facts : [],
    gallery: {
      label: t('robotics.gallery.label'),
      title: t('robotics.gallery.title'),
      desc: t('robotics.gallery.desc'),
      items: ROBOTICS_GALLERY.map((item, i) => {
        const copy = Array.isArray(galleryCopy) ? galleryCopy[i] : null
        return {
          id: item.id,
          image: IMAGES[item.imageKey],
          caption: copy?.caption || '',
          alt: copy?.alt || '',
        }
      }),
    },
    focus: {
      label: t('robotics.focus.label'),
      title: t('robotics.focus.title'),
      desc: t('robotics.focus.desc'),
      items: (Array.isArray(focusItems) ? focusItems : []).map((item, i) => ({
        ...item,
        icon: ROBOTICS_FOCUS_ICONS[i % ROBOTICS_FOCUS_ICONS.length],
      })),
    },
    steps: {
      label: t('robotics.steps.label'),
      title: t('robotics.steps.title'),
      items: Array.isArray(stepItems) ? stepItems : [],
    },
    pricing: {
      label: t('robotics.pricing.label'),
      title: t('robotics.pricing.title'),
      desc: t('robotics.pricing.desc'),
      popular: t('robotics.pricing.popular'),
      perMonth: t('robotics.pricing.perMonth'),
      custom: t('robotics.pricing.custom'),
      currency: ROBOTICS_CURRENCY,
      note: t('robotics.pricing.note'),
      plans: ROBOTICS_PLANS.map((plan) => {
        const copy = t(`robotics.pricing.plans.${plan.id}`)
        return {
          id: plan.id,
          featured: plan.featured,
          price: plan.price,
          name: copy.name,
          description: copy.description,
          features: copy.features || [],
        }
      }),
    },
  }
}

/** @param {(key: string) => string} t */
export function getKidsPage(t) {
  const facts = t('kids.facts')
  const focusItems = t('kids.focus.items')
  const stepItems = t('kids.steps.items')
  const galleryCopy = t('kids.gallery.items')

  return {
    tag: t('kids.tag'),
    title: t('kids.title'),
    lead: t('kids.lead'),
    ctaPricing: t('kids.ctaPricing'),
    ctaBook: t('booking.cta'),
    image: IMAGES.HomeKids,
    imageAlt: t('kids.imageAlt'),
    badge: t('kids.badge'),
    ages: t('kids.ages'),
    mascot: IMAGES.KidsMascot,
    mascotAlt: t('kids.mascotAlt'),
    facts: Array.isArray(facts) ? facts : [],
    gallery: {
      label: t('kids.gallery.label'),
      title: t('kids.gallery.title'),
      desc: t('kids.gallery.desc'),
      items: KIDS_GALLERY.map((item, i) => {
        const copy = Array.isArray(galleryCopy) ? galleryCopy[i] : null
        return {
          id: item.id,
          image: IMAGES[item.imageKey],
          caption: copy?.caption || '',
          alt: copy?.alt || '',
        }
      }),
    },
    focus: {
      label: t('kids.focus.label'),
      title: t('kids.focus.title'),
      desc: t('kids.focus.desc'),
      items: (Array.isArray(focusItems) ? focusItems : []).map((item, i) => ({
        ...item,
        icon: KIDS_FOCUS_ICONS[i % KIDS_FOCUS_ICONS.length],
      })),
    },
    steps: {
      label: t('kids.steps.label'),
      title: t('kids.steps.title'),
      items: Array.isArray(stepItems) ? stepItems : [],
    },
    pricing: {
      label: t('kids.pricing.label'),
      title: t('kids.pricing.title'),
      desc: t('kids.pricing.desc'),
      popular: t('kids.pricing.popular'),
      perMonth: t('kids.pricing.perMonth'),
      custom: t('kids.pricing.custom'),
      currency: KIDS_CURRENCY,
      note: t('kids.pricing.note'),
      plans: KIDS_PLANS.map((plan) => {
        const copy = t(`kids.pricing.plans.${plan.id}`)
        return {
          id: plan.id,
          featured: plan.featured,
          price: plan.price,
          name: copy.name,
          description: copy.description,
          features: copy.features || [],
        }
      }),
    },
  }
}

/** @param {(key: string) => string} t */
export function getHomeAbout(t) {
  const values = t('home.about.values')
  return {
    label: t('home.about.label'),
    title: t('home.about.title'),
    p1: t('home.about.p1'),
    p2: t('home.about.p2'),
    imageAlt: t('home.about.imageAlt'),
    image: IMAGES.HomeAbout,
    values: Array.isArray(values) ? values : [],
  }
}

/** @param {(key: string) => string} t */
export function getWhyUsItems(t) {
  return WHY_US_ITEMS.map((item) => ({
    id: item.id,
    icon: WHY_US_ICONS[item.icon],
    title: t(item.titleKey),
    description: t(item.descKey),
  }))
}

/** @param {(key: string) => string} t */
export function getPricingPlans(t) {
  return PRICING_PLANS.map((plan) => {
    const translated = t(plan.planKey)
    return {
      id: plan.id,
      featured: plan.featured,
      price: plan.price,
      priceType: plan.priceType,
      name: translated.name,
      description: translated.description,
      features: translated.features || [],
      ctaLabel: translated.cta || t(plan.ctaLabelKey),
      link: plan.link,
    }
  })
}

/** @param {(key: string) => string} t */
export function getTestimonials(t) {
  const items = t('testimonials.items') || []
  return items.map((item, i) => ({
    ...item,
    avatar: IMAGES[TESTIMONIAL_AVATAR_KEYS[i]],
  }))
}

/** @param {(key: string) => string} t */
export function getSectionCta(key, t) {
  const cta = SECTION_CTAS[key]
  if (Array.isArray(cta)) {
    return cta.map((item) => resolveCta(item, t))
  }
  return resolveCta(cta, t)
}

/** @param {'privacy' | 'terms'} type @param {(key: string) => string} t */
export function getLegalCrossLinks(type, t) {
  return {
    sibling: resolveCta(LEGAL_CROSS_LINKS[type], t),
    contact: resolveCta(LEGAL_CROSS_LINKS.contact, t),
  }
}

/** @param {keyof ROUTES} page @param {(key: string) => string} t */
export function getPageSeo(page, t) {
  return {
    title: t(`seo.pages.${page}.title`),
    description: t(`seo.pages.${page}.description`),
    path: ROUTES[page] ?? ROUTES.home,
  }
}

/** @param {(key: string) => string} t */
export function getDefaultSeo(t) {
  return {
    siteName: SITE_NAME,
    siteUrl: SITE_URL,
    title: t('seo.default.title'),
    description: t('seo.default.description'),
    keywords: t('seo.default.keywords'),
    image: SEO_DEFAULT.image,
  }
}

/** @param {keyof PAGE_IMAGES} page */
export function getPageImage(page) {
  return IMAGES[PAGE_IMAGES[page]]
}
