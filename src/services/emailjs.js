import emailjs from '@emailjs/browser'
import { BOOKING_URL } from '../data/siteContent.js'

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'ConvoLingua'
const BOOKING_LINK = import.meta.env.VITE_BOOKING_LINK || BOOKING_URL
const CONTACT_INBOX =
  import.meta.env.VITE_CONTACT_EMAIL || 'info@convolingua.com'

function getSharedConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
}

export function isAssessmentEmailJsConfigured() {
  const { serviceId, publicKey } = getSharedConfig()
  return Boolean(
    serviceId && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && publicKey,
  )
}

export function isContactEmailJsConfigured() {
  const { serviceId, publicKey } = getSharedConfig()
  return Boolean(
    serviceId && import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID && publicKey,
  )
}

/** @deprecated Use isAssessmentEmailJsConfigured */
export function isEmailJsConfigured() {
  return isAssessmentEmailJsConfigured()
}

const INTEREST_LABELS = {
  business: 'Business English',
  corporate: 'Corporate training',
  exam: 'Exam preparation',
  executive: 'Executive coaching',
  assessment: 'Free assessment test',
  other: 'Not sure yet',
}

/**
 * Assessment report — template To email must be {{email}} (user's address).
 */
export async function sendAssessmentReport(payload) {
  const {
    name,
    email,
    level,
    score,
    max_score,
    summary,
    strengths,
    weaknesses,
    recommendation,
    recommended_course,
    wrong_answers,
    personalized_plan,
  } = payload

  const recipient = email?.trim()
  if (!recipient) {
    throw new Error('A valid email address is required to send your report.')
  }

  const { serviceId, publicKey } = getSharedConfig()
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS is not configured for assessments. Check your .env file.',
    )
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      email: recipient,
      user_email: recipient,
      to_email: recipient,
      name: name || 'there',
      to_name: name || 'there',
      reply_to: recipient,
      level,
      score: String(score),
      max_score: String(max_score ?? '10'),
      summary,
      strengths,
      weaknesses,
      recommendation,
      recommended_course,
      wrong_answers,
      personalized_plan,
      booking_link: BOOKING_LINK,
      company_name: COMPANY_NAME,
    },
    { publicKey },
  )
}

/**
 * Contact form — template To email should be your inbox (fixed or {{to_email}}).
 * Reply to: {{user_email}}
 */
export async function sendContactForm({
  firstName,
  lastName,
  email,
  company,
  interest,
  interestLabel,
  message,
}) {
  const userEmail = String(email ?? '').trim()
  if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
    throw new Error('Please enter a valid email address.')
  }

  const { serviceId, publicKey } = getSharedConfig()
  const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID

  if (!serviceId || !templateId || !publicKey) {
    if (import.meta.env.DEV) {
      console.error(
        'Contact EmailJS missing env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_CONTACT_TEMPLATE_ID',
      )
    }
    throw new Error('Contact form is temporarily unavailable.')
  }

  const fullName = `${String(firstName ?? '').trim()} ${String(lastName ?? '').trim()}`.trim()
  const interestText =
    interestLabel || INTEREST_LABELS[interest] || interest || '—'

  return emailjs.send(
    serviceId,
    templateId,
    {
      to_email: CONTACT_INBOX,
      email: CONTACT_INBOX,
      user_email: userEmail,
      reply_to: userEmail,
      from_name: fullName,
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      company: company?.trim() || '—',
      interest: interestText,
      message: message?.trim() || '—',
      subject: `New contact inquiry — ${fullName}`,
      company_name: COMPANY_NAME,
    },
    { publicKey },
  )
}
