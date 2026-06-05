const SITE_URL = 'https://convolingua.com'
const SITE_NAME = 'ConvoLingua'

export const DEFAULT_SEO = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
  title: `${SITE_NAME} — Professional English for Global Leaders`,
  description:
    'Premium English coaching for professionals. Live 1-on-1 sessions, industry-tailored curriculum, and proven fluency outcomes.',
  keywords:
    'business English, professional English, English coaching, corporate English training, executive English, online English lessons',
  image: '/og-image.jpg',
}

export const PAGE_SEO = {
  home: {
    title: `${SITE_NAME} — Master Professional English with Confidence`,
    description:
      'Live coaching for ambitious professionals. Master business English with proven methods that are effective, efficient, and engaging.',
    path: '/',
  },
  about: {
    title: `About & Our Method — ${SITE_NAME}`,
    description:
      'Discover how ConvoLingua adapts to your career with CEFR-aligned coaching, expert tutors, and personalized learning roadmaps.',
    path: '/about',
  },
  courses: {
    title: `Courses & Programs — ${SITE_NAME}`,
    description:
      'Business English, corporate training, exam preparation, and executive speaking programs built for working professionals.',
    path: '/courses',
  },
  contact: {
    title: `Contact Us — ${SITE_NAME}`,
    description:
      'Get in touch about courses, corporate training, or coaching. Flexible scheduling across time zones.',
    path: '/contact',
  },
  assessment: {
    title: `Free English Level Assessment — ${SITE_NAME}`,
    description:
      'Take our free English placement test — 10 random questions from a bank of 100. Get your score and personalized plan by email.',
    path: '/assessment',
  },
}
