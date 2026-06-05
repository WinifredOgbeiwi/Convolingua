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

import { HiClock, HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
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
}

// ─── Routes & SEO paths ──────────────────────────────────────────────────────
export const ROUTES = {
  home: '/',
  about: '/about',
  courses: '/courses',
  contact: '/contact',
  assessment: '/assessment',
  privacy: '/privacy',
  terms: '/terms',
}

export const SEO_DEFAULT = {
  siteName: SITE_NAME,
  image: '/og-image.jpg',
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { to: ROUTES.home, labelKey: 'nav.home', end: true },
  { to: ROUTES.about, labelKey: 'nav.about' },
  { to: ROUTES.courses, labelKey: 'nav.courses' },
]

export const HEADER_CTA = {
  to: ROUTES.contact,
  labelKey: 'nav.contact',
  className: 'btn btn-primary header-cta',
}

export const FOOTER_PROGRAM_LINKS = [
  { to: ROUTES.courses, labelKey: 'footer.links.business' },
  { to: ROUTES.courses, labelKey: 'footer.links.corporate' },
  { to: ROUTES.courses, labelKey: 'footer.links.exam' },
  { to: ROUTES.courses, labelKey: 'footer.links.executive' },
]

export const FOOTER_COMPANY_LINKS = [
  { to: ROUTES.about, labelKey: 'footer.links.about' },
  { to: `${ROUTES.about}#method`, labelKey: 'footer.links.method' },
  { to: ROUTES.assessment, labelKey: 'footer.links.assessment' },
  { to: ROUTES.contact, labelKey: 'footer.links.contact' },
]

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

export const CONTACT_FORM_INTERESTS = [
  'assessment',
  'business',
  'corporate',
  'exam',
  'executive',
  'other',
]

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
    id: 'essential',
    price: '149',
    priceType: 'monthly',
    featured: false,
    link: { to: ROUTES.assessment },
    ctaLabelKey: 'pricing.assessmentCta',
    planKey: 'pricing.plans.essential',
  },
  {
    id: 'professional',
    price: '299',
    priceType: 'monthly',
    featured: true,
    link: { to: ROUTES.assessment },
    ctaLabelKey: 'pricing.assessmentCta',
    planKey: 'pricing.plans.professional',
  },
  {
    id: 'enterprise',
    price: 'Custom',
    priceType: 'custom',
    featured: false,
    link: { to: ROUTES.contact },
    ctaLabelKey: 'pricing.plans.enterprise.cta',
    planKey: 'pricing.plans.enterprise',
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
      ctaLabel:
        plan.id === 'enterprise' ? translated.cta : t(plan.ctaLabelKey),
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
