import legal from './legal/en.js'

export default {
  lang: {
    pl: 'PL',
    en: 'EN',
    label: 'Language',
  },
  nav: {
    home: 'Home',
    adults: 'Professionals',
    robotics: 'AI & Robotics',
    kids: 'Kids',
    about: 'About',
    courses: 'Courses',
    contact: 'Contact',
    cta: 'Login',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  login: {
    title: 'Welcome back',
    lead: 'Sign in with your student account to continue learning.',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    submit: 'Log in',
    forgot: 'Forgot password?',
    errorRequired: 'Please enter your email and password.',
    errorInvalid: 'That email or password looks incorrect. Try again.',
  },
  forgotPassword: {
    title: 'Reset your password',
    lead: 'Enter the email linked to your student account and we will send reset instructions.',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    submit: 'Send reset link',
    backToLogin: 'Back to login',
    errorRequired: 'Please enter your email address.',
    success: 'If that email is registered, reset instructions are on the way.',
  },
  home: {
    eyebrow: 'ConvoLingua English Academy',
    title: 'One academy, three ways to grow',
    subtitle: 'Choose the path that fits you or your family.',
    programsLabel: 'Our programs',
    programs: {
      adults: {
        tag: 'For adults',
        title: 'English for Professionals',
        description:
          'Speak with confidence in meetings, presentations and negotiations. Live coaching shaped around your career.',
        points: [
          'Live coaching sessions',
          'Business & industry vocabulary',
          'Flexible schedule',
        ],
        cta: 'Explore',
        imageAlt: 'Colleagues learning English together around a laptop',
      },
      robotics: {
        tag: 'Future builders',
        title: 'AI & Robotics Coding',
        description:
          'Learn to code, build robots and put AI to work through hands-on projects where creativity meets real technology.',
        points: [
          'Hands-on robot projects',
          'Coding fundamentals',
          'AI tools made simple',
        ],
        cta: 'Explore',
        imageAlt: 'Illustration of a friendly coding robot',
      },
      kids: {
        tag: 'For children',
        title: 'English for Kids',
        description:
          'Playful lessons with songs, stories and games that build real confidence, one happy step at a time.',
        points: [
          'Games, songs & stories',
          'Friendly, encouraging teachers',
          'Progress parents can see',
        ],
        cta: 'Explore',
        imageAlt: 'Children learning together on laptops',
      },
    },
    about: {
      label: 'About us',
      title: 'Learning that starts with real conversation',
      p1: 'ConvoLingua is a Warsaw-based academy built on a simple belief: people learn best by doing. Speaking, building and playing beat memorising every time.',
      p2: 'Whether you are advancing your career, raising a curious child or exploring technology, we shape every lesson around the learner, with clear goals and friendly guidance.',
      imageAlt: 'A teacher leading a live online lesson',
      values: [
        {
          title: 'Learner first',
          text: 'Every plan starts with your goals, your level and your pace.',
        },
        {
          title: 'Practice over theory',
          text: 'Conversation, projects and games keep every lesson active.',
        },
        {
          title: 'Flexible by design',
          text: 'Live lessons that fit around work, school and family life.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's talk",
      desc: 'Tell us who the lessons are for and what you would like to achieve. We will reply with the best next step.',
      callPrompt: 'Prefer to talk it through?',
      callCta: 'Call us',
    },
  },
  booking: {
    cta: 'Book now',
    label: 'Book a session',
    title: 'Book now',
    lead: 'Tell us your details and preferred time. We will confirm your session shortly.',
    firstName: 'First name',
    lastName: 'Surname',
    email: 'Email',
    phone: 'Phone (optional)',
    package: 'Interested package',
    selectPackage: 'Select a package',
    date: 'Preferred date',
    time: 'Preferred time',
    notes: 'Notes (optional)',
    notesPlaceholder: 'Anything we should know before your session…',
    submit: 'Book now',
    sending: 'Sending…',
    successTitle: 'Booking request sent',
    successText: 'Thank you. We will confirm your preferred date and time by email shortly.',
    bookAnother: 'Book another session',
    programs: {
      professionals: 'English for Professionals',
      robotics: 'AI & Robotics Coding',
      kids: 'English for Kids',
    },
  },
  professionals: {
    tag: 'For adults',
    title: 'English for Professionals',
    lead: 'Speak with confidence in meetings, presentations and negotiations. Live coaching shaped around your career, your industry and your schedule.',
    ctaPricing: 'See pricing',
    ctaContact: 'Book now',
    imageAlt: 'Colleagues learning English together around a laptop',
    badge: 'Live coaching',
    facts: [
      { title: 'Live', text: 'Sessions with expert coaches — private or in a group.' },
      { title: 'Flexible', text: 'Book around your work, evenings and weekends included.' },
      { title: 'Tailored', text: 'Vocabulary from your own industry.' },
      { title: 'Measurable', text: 'CEFR-aligned level checks and progress reports.' },
    ],
    steps: {
      label: 'How it works',
      title: 'From first lesson to fluent in three steps',
      items: [
        { title: 'Level check & goals', text: 'We find out where you are, what you need English for and how much time you have.' },
        { title: 'Your personal roadmap', text: 'You get a plan built around your industry, your goals and your calendar.' },
        { title: 'Live coaching & progress', text: 'Practise with your coach every week and see your progress in regular reports.' },
      ],
    },
    pricing: {
      note: 'Adult programmes are offered as packages (for example a 6-session presentation programme), not as a simple hourly rate. Illustrative prices — tell us your goals and we will confirm the best fit.',
    },
    cta: {
      title: 'Ready to speak with confidence?',
      text: 'Tell us about your goals and we will match you with the right coach.',
      button: 'Book now',
    },
  },
  robotics: {
    tag: 'Ages 9–15',
    title: 'AI & Robotics Coding',
    lead: "Don't just use technology — learn how to create it. Scratch, robots and friendly AI through hands-on projects that move, light up and make sense.",
    ctaPricing: 'See pricing',
    ctaContact: 'Book now',
    badge: 'Scratch · Robots · AI',
    ages: 'For children and teenagers — beginners welcome',
    facts: [
      { title: 'Think', text: 'Computational thinking: break problems into clear, logical steps.' },
      { title: 'Code', text: 'Blocks first, then deeper fundamentals as skills grow.' },
      { title: 'Build', text: 'Robots, sensors and digital projects you can see and improve.' },
      { title: 'Create', text: 'Games, animations and demos to show family, friends and school.' },
    ],
    gallery: {
      label: 'Inside the lab',
      title: 'Where ideas become machines',
      desc: 'Scratch on the screen. Circuits on the table. Robots that roll, sense and react.',
      items: [
        {
          caption: 'Scratch & code',
          alt: 'Children coding on a laptop next to a robotics project',
        },
        {
          caption: 'Build robots',
          alt: 'Kids assembling educational robot kits in a STEM classroom',
        },
        {
          caption: 'Circuits & sensors',
          alt: 'Children wiring motors and sensors on a robotics chassis',
        },
      ],
    },
    focus: {
      label: 'What students will learn',
      title: 'Skills that stick because they build them',
      desc: 'We learn by doing — visual and block coding first, then richer projects as experience grows. No prior programming needed.',
      items: [
        {
          title: 'Computational thinking',
          text: 'Break complex problems into smaller steps and build logical solutions.',
        },
        {
          title: 'Programming fundamentals',
          text: 'Sequences, loops, variables, conditions and debugging — step by step.',
        },
        {
          title: 'Scratch & digital projects',
          text: 'Games, stories and animations that teach real logic through play.',
        },
        {
          title: 'Robot builds',
          text: 'Assemble kits, connect motors and sensors, then bring the bot to life.',
        },
        {
          title: 'Problem-solving',
          text: 'Experiment, find errors and improve solutions with confidence.',
        },
        {
          title: 'Independent thinking',
          text: 'Plan projects, test ideas and ship demos without waiting for a script.',
        },
      ],
    },
    steps: {
      label: 'How it works',
      title: 'From first class to their own project',
      items: [
        {
          title: 'Meet & match',
          text: 'We learn age, level and interests, then place them in the right group — beginners included.',
        },
        {
          title: 'Build week by week',
          text: 'Practical projects that grow from Scratch blocks toward richer coding and robotics.',
        },
        {
          title: 'Demo & next steps',
          text: 'Show what they made, get feedback and choose what to create next.',
        },
      ],
    },
    pricing: {
      label: 'Pricing',
      title: 'Plans for curious builders',
      desc: 'Premium anchors the fullest path. Standard is our recommended balance. Essential keeps the start simple.',
      popular: 'Recommended',
      perMonth: '/ month',
      custom: 'Custom',
      note: 'Illustrative packages for ages 9–15 — tell us age and goals and we will confirm the best fit.',
      plans: {
        premium: {
          name: 'Premium',
          description: 'Coding + English communication + problem-solving for stronger all-round progress.',
          features: [
            'Coding, robotics and problem-solving',
            'English for presenting and explaining projects',
            'Richer project challenges',
            'Individual progress notes',
            'Priority group placement',
          ],
          cta: 'Book now',
        },
        standard: {
          name: 'Standard',
          description: 'Our core track — coding and programming with hands-on robotics projects.',
          features: [
            'Scratch and programming fundamentals',
            'Robotics builds and sensors',
            'Creative digital projects',
            'Measurable learning outcomes',
            'Monthly progress note for parents',
          ],
          cta: 'Book now',
        },
        essential: {
          name: 'Essential',
          description: 'A solid starter path into coding with playful practice and clear goals.',
          features: [
            'Beginner Scratch sessions',
            'Guided starter projects',
            'Logical thinking games',
            'Simple home practice ideas',
          ],
          cta: 'Book now',
        },
      },
    },
    cta: {
      title: 'Think logically. Create digitally. Build the future.',
      text: 'Tell us the age of your learner and what they want to create. We will suggest the best next step.',
      button: 'Book now',
    },
  },
  kids: {
    tag: 'Ages 6–8',
    title: 'Literacy, Logic & English',
    lead: 'Strong foundations for confident thinkers — reading, writing, speaking and playful reasoning that stick for life.',
    ctaPricing: 'See pricing',
    ctaContact: 'Book now',
    imageAlt: 'Children learning together in a bright classroom',
    badge: 'Fun that teaches',
    ages: 'Built for curious 6–8 year olds',
    mascotAlt: 'Friendly cartoon girl waving hello',
    facts: [
      { title: 'Read', text: 'Fluency, vocabulary and stories that kids actually want to finish.' },
      { title: 'Write', text: 'Clear sentences, spelling and creative writing made playful.' },
      { title: 'Think', text: 'Puzzles, patterns and logic that build independent thinkers.' },
      { title: 'Speak', text: 'Confidence to share ideas out loud — shy kids included.' },
    ],
    gallery: {
      label: 'Inside the class',
      title: 'Where learning feels like play',
      desc: 'Stories on the carpet. Games on the floor. Ideas that grow into real skills.',
      items: [
        { caption: 'Story time', alt: 'Teacher reading a book to young children in a classroom' },
        { caption: 'Play & learn', alt: 'Child playing with wooden tracks and educational toys' },
        { caption: 'Imagine together', alt: 'Children playing imaginatively with toys in a bright playroom' },
      ],
    },
    focus: {
      label: 'What children practise',
      title: 'Literacy + logic in every lesson',
      desc: 'We combine English literacy with reasoning activities so children understand what they learn — and can use it on their own.',
      items: [
        {
          title: 'Reading skills',
          text: 'Fluency, comprehension, vocabulary and drawing conclusions from stories and texts.',
        },
        {
          title: 'Writing skills',
          text: 'Sentences, spelling, punctuation and creative writing that feels like an adventure.',
        },
        {
          title: 'Speaking & listening',
          text: 'Expressing ideas, joining discussions and responding with confidence.',
        },
        {
          title: 'Logic puzzles',
          text: 'Patterns, sequencing, classification and problem-solving challenges.',
        },
        {
          title: 'Critical thinking',
          text: 'Comparing ideas, making deductions and explaining how they got the answer.',
        },
        {
          title: 'Curious minds',
          text: 'Games, storytelling and exploration that reward questions as much as answers.',
        },
      ],
    },
    steps: {
      label: 'How it works',
      title: 'A simple path for kids and parents',
      items: [
        {
          title: 'Friendly intro chat',
          text: 'We learn your child’s age, strengths and goals, then suggest the best group.',
        },
        {
          title: 'Weekly adventures',
          text: 'Live lessons with stories, games, puzzles and tiny wins that add up.',
        },
        {
          title: 'Progress you can see',
          text: 'Clear updates for parents and proud moments your child can show at home.',
        },
      ],
    },
    pricing: {
      label: 'Pricing',
      title: 'Children 6–8: choose your path',
      desc: 'Premium first as the fullest programme. Standard is the recommended balance of price and value. Essential is a clear, affordable start.',
      popular: 'Recommended',
      perMonth: '/ month',
      custom: 'Custom',
      note: 'Illustrative prices for our Mokotów children’s programmes — contact us to confirm availability and the best fit for your child.',
      plans: {
        premium: {
          name: 'Premium',
          description: 'English + Literacy + Logic and Reasoning — our highest-value children’s programme.',
          features: [
            'English, literacy and critical thinking',
            'Logic and reasoning activities',
            'Individual progress reports',
            'Additional learning benefits and feedback',
            'More comprehensive learning path',
          ],
          cta: 'Book now',
        },
        standard: {
          name: 'Standard',
          description: 'English + Literacy — our core programme with structured communication.',
          features: [
            'English and literacy development',
            'Structured communication practice',
            'Structured lessons with clear outcomes',
            'Measurable learning progress',
            'The best balance of price and value',
          ],
          cta: 'Book now',
        },
        essential: {
          name: 'Essential',
          description: 'English Conversation — a worthwhile, more affordable start.',
          features: [
            'English conversation classes',
            'Confidence-building speaking practice',
            'Engaging classroom activities',
            'Fewer additional services than Standard',
          ],
          cta: 'Book now',
        },
      },
    },
    cta: {
      title: 'Ready for curious, confident learners?',
      text: 'Tell us about your child. We will help you pick the right literacy and logic path.',
      button: 'Book now',
    },
  },
  seo: {
    default: {
      title: 'ConvoLingua — English for Professionals, AI & Robotics, and Kids',
      description:
        'ConvoLingua English Academy: live English lessons for professionals and children, plus hands-on AI and robotics coding.',
      keywords:
        'English for professionals, business English, English for kids, AI coding, robotics for kids, online English lessons, Warsaw',
    },
    pages: {
      home: {
        title: 'ConvoLingua — One academy, three ways to grow',
        description:
          'English for professionals, AI & robotics coding, and English lessons for children. Choose your path at ConvoLingua English Academy.',
      },
      professionals: {
        title: 'English for Professionals — ConvoLingua',
        description:
          'Live English coaching for meetings, presentations and negotiations. Flexible plans shaped around your career.',
      },
      robotics: {
        title: 'AI & Robotics Coding — ConvoLingua',
        description:
          'Ages 9–15: Scratch, robotics and computational thinking. Learn by creating — beginners welcome at ConvoLingua.',
      },
      kids: {
        title: 'Literacy, Logic & English for Kids — ConvoLingua',
        description:
          'Ages 6–8: reading, writing, speaking and playful reasoning. Fun lessons that build strong foundations at ConvoLingua.',
      },
      about: {
        title: 'About & Our Method — ConvoLingua',
        description:
          'Discover how ConvoLingua adapts to your career with CEFR-aligned coaching, expert tutors, and personalized learning roadmaps.',
      },
      courses: {
        title: 'Courses & Programs — ConvoLingua',
        description:
          'Business English, corporate training, exam preparation, and executive speaking programs built for working professionals.',
      },
      contact: {
        title: 'Contact Us — ConvoLingua',
        description:
          'Get in touch about courses, corporate training, or coaching. Flexible scheduling across time zones.',
      },
      login: {
        title: 'Login — ConvoLingua',
        description: 'Sign in to your ConvoLingua student account to continue learning.',
      },
      forgotPassword: {
        title: 'Forgot password — ConvoLingua',
        description: 'Reset the password for your ConvoLingua student account.',
      },
      assessment: {
        title: 'Free English Level Assessment — ConvoLingua',
        description:
          'Take our free English placement test.',
      },
      privacy: {
        title: 'Privacy Policy — ConvoLingua',
        description:
          'How ConvoLingua collects, uses, and protects your personal information.',
      },
      terms: {
        title: 'Terms of Service — ConvoLingua',
        description:
          'Terms and conditions for using the ConvoLingua website and services.',
      },
    },
  },
  hero: {
    badge: 'Trusted by professionals worldwide',
    title: 'Master professional English for the',
    titleHighlight: 'global stage',
    subtitle:
      'Live coaching, industry-tailored curriculum, and real-world practice for leaders who need confidence in boardrooms, negotiations, and cross-border teams.',
    emailLabel: 'Work email',
    emailPlaceholder: 'Enter your work email',
    cta: 'Free assessment test',
    note: 'Gauge your English level in minutes. ',
    cards: [
      {
        label: 'Learning format',
        value: 'Live coaching',
        meta: 'Speak with a dedicated coach and get feedback tailored to your goals.',
      },
      {
        label: 'Scheduling',
        value: 'Flexible',
        meta: 'Book sessions around your calendar, including evenings and weekends.',
      },
      {
        label: 'Program focus',
        value: 'Business English',
        meta: 'Meetings, presentations, email, and client communication.',
      },
    ],
  },
  whyUs: {
    label: 'Why choose us',
    title: 'Everything you need to succeed in English',
    desc: 'Professional coaching designed around your goals, schedule, and budget.',
    items: {
      instructors: {
        title: 'Expert instructors',
        description:
          'Learn from certified, experienced English teachers who provide personalized guidance and support throughout your journey.',
      },
      scheduling: {
        title: 'Flexible scheduling',
        description:
          'Choose class times that fit your routine and learn at your own pace with self-paced lessons.',
      },
      pricing: {
        title: 'Affordable pricing',
        description:
          'Get excellent education without breaking the bank. We offer competitive pricing and payment options.',
      },
      interactive: {
        title: 'Interactive lessons',
        description:
          'Practice English in real-world scenarios through role-playing, discussions, and interactive activities.',
      },
    },
  },
  pillars: {
    title: 'Master English with ease, speed, and flexibility.',
    items: [
      {
        label: 'Effective',
        description: 'Proven strategies to ensure real and lasting language improvement.',
      },
      {
        label: 'Efficient',
        description: 'Smart learning methods to help you progress faster.',
      },
      {
        label: 'Engaging',
        description: 'Interactive lessons that make learning enjoyable and immersive.',
      },
    ],
  },
  corporate: {
    label: 'Corporate training',
    title: 'English programs built for your entire workforce',
    p1: 'We partner with HR and L&D teams to upskill corporate staff at every level—from new hires to senior leadership. Programs scale across departments while keeping coaching personal, practical, and tied to real business outcomes.',
    p2: 'Whether your team needs meeting fluency, client-facing confidence, or written communication standards, we design a rollout that fits your schedule, budget, and compliance requirements.',
    benefits: [
      'Custom learning paths aligned to your company goals and KPIs',
      'Group and private formats for teams across regions and time zones',
      'Industry-specific vocabulary for finance, tech, legal, and more',
      'Progress dashboards for HR and team leads',
      'Onboarding support and dedicated account management',
    ],
    cta: 'Request a corporate proposal',
    imageAlt: 'Corporate team in a professional training session',
  },
  method: {
    label: 'Our method',
    title: 'Coaching that adapts to your career—not the other way around',
    p1: 'We start with a diagnostic of your real communication gaps—presentations, client calls, written deliverables—then build a personalized roadmap. Your coach works inside your industry vocabulary from day one.',
    benefits: [
      'CEFR-aligned assessments with quarterly progress reports',
      'Coaches with corporate & MBA-level communication backgrounds',
      'Flexible scheduling across time zones—before work or lunch breaks',
      'Recordings and AI-powered feedback on pronunciation & clarity',
      'Dedicated account manager for team and enterprise plans',
    ],
    cta: 'Explore programs',
    imageAlt: 'Coach and professional in a learning session',
  },
  courses: {
    sectionLabel: 'Learning tracks',
    sectionTitle: 'Programs built for how you work',
    sectionDesc:
      'Every track pairs live coaching with role-specific scenarios—so you practice the English you actually use at work.',
    homeTitle: 'Popular programs for professionals',
    pageLabel: 'All programs',
    pageTitle: 'Choose the path that matches your goals',
    pageDesc:
      'Flexible formats for individuals and teams. Every program includes live sessions and progress tracking.',
    viewAll: 'View all courses',
    items: {
      'business-english': {
        title: 'Business English',
        description:
          'Emails, reports, negotiations, and stakeholder communication tailored to your industry.',
      },
      'corporate-training': {
        title: 'Corporate Training',
        description:
          'Scalable programs for teams with custom KPIs, admin dashboards, and dedicated success managers.',
      },
      'professional-fluency': {
        title: 'Professional Fluency',
        description:
          'Build confidence for meetings, presentations, and leadership conversations in international settings.',
      },
      'general-english': {
        title: 'General English',
        description:
          'Structured progression from intermediate to advanced with live practice and measurable milestones.',
      },
      'exam-preparation': {
        title: 'Exam Preparation',
        description:
          'Targeted coaching for IELTS, Cambridge, and other certifications with mock tests and expert feedback.',
      },
      'executive-coaching': {
        title: 'Executive Coaching',
        description:
          'Private sessions for C-suite and senior leaders who need discretion, flexibility, and fast results.',
      },
    },
  },
  testimonials: {
    label: 'Testimonials',
    title: 'What our students say',
    desc: 'Leaders and experts who needed English that matches their professional ambition.',
    stars: '5 out of 5 stars',
    items: [
      {
        quote:
          'Within three months I was leading investor calls in English. The coaches understood finance terminology and pushed me on clarity, not grammar drills.',
        name: 'Elena Vasquez',
        role: 'CFO, Growth-stage SaaS',
      },
      {
        quote:
          'Our engineering leads in Berlin and Singapore finally communicate seamlessly. ConvoLingua built a custom track around stand-ups and design reviews.',
        name: 'James Okonkwo',
        role: 'VP Engineering, Enterprise Tech',
      },
      {
        quote:
          'I went from avoiding networking events to hosting panel discussions. The negotiation module alone was worth every euro.',
        name: 'Marie Dubois',
        role: 'Director, Management Consulting',
      },
    ],
  },
  cta: {
    badge: 'Free test',
    label: 'Get started today',
    title: 'Discover your English level in minutes',
    desc: 'Take our free assessment to gauge your professional English skills. Receive an instant result plus a detailed report.',
    assessment: 'Free assessment test',
    courses: 'Browse courses',
    perks: [
      'Flexible scheduling worldwide',
      'Industry-specific curriculum',
      'Results you can measure',
    ],
    imageAlt: 'English coach in a live session',
  },
  pricing: {
    label: 'Pricing',
    title: 'Adults & corporate: choose your path',
    desc: 'Premium anchors the fullest coaching. Standard is the recommended balance of price and value. Essential suits teams starting with group communication training.',
    popular: 'Recommended',
    perMonth: '/ month',
    custom: 'Custom',
    assessmentCta: 'Book a consultation',
    plans: {
      premium: {
        name: 'Premium',
        description: 'Industry-specific individual presentation coaching — our highest-value adult programme.',
        features: [
          'One-to-one presentation and public speaking coaching',
          'Industry-specific communication tailored to your field',
          'Structuring talks, clarity and audience engagement',
          'Managing presentation anxiety and Q&A',
          'Package-based development (e.g. 6-session programmes)',
        ],
        cta: 'Book now',
      },
      standard: {
        name: 'Standard',
        description: 'Individual professional English — our core programme for workplace communication.',
        features: [
          'One-to-one lessons around your professional goals',
          'Workplace conversations, meetings and negotiations',
          'Business vocabulary and industry terminology',
          'Professional emails, reports and discussions',
          'The best balance of price and value',
        ],
        cta: 'Book now',
      },
      essential: {
        name: 'Essential',
        description: 'Corporate group communication training — a worthwhile, more affordable start for teams.',
        features: [
          'Group communication training for corporate teams',
          'Practical workplace English in a shared setting',
          'Meetings, discussions and client-facing language',
          'Fewer individual services than Standard or Premium',
        ],
        cta: 'Book now',
      },
    },
  },
  about: {
    heroLabel: 'About us',
    heroTitle: 'English coaching designed for ambitious careers',
    heroDesc:
      'We help professionals communicate with clarity, influence, and confidence—in every meeting, email, and presentation.',
    whoLabel: 'Who we are',
    whoTitle: 'Built for the pace of modern business',
    whoP1:
      'ConvoLingua was founded on a simple belief: language training should mirror how professionals actually work—fast, focused, and deeply relevant to their industry. Our coaches combine teaching expertise with real corporate experience.',
    whoP2:
      'Whether you are preparing for a promotion, leading a global team, or entering a new market, we align every session with outcomes you can measure and use immediately.',
    proImageAlt: 'Professionals collaborating',
    whyLabel: 'Why professionals choose us',
    whyTitle: 'A partner in your growth—not just a language school',
    values: [
      {
        title: 'Personalized roadmaps',
        text: 'Every learner starts with a diagnostic aligned to CEFR standards and career goals.',
      },
      {
        title: 'Industry fluency',
        text: 'From finance to tech to law—we teach the vocabulary and tone your field demands.',
      },
      {
        title: 'Accountability',
        text: 'Progress reports, session recordings, and coach feedback keep momentum high.',
      },
    ],
    talkCta: 'Talk to our team',
  },
  contact: {
    heroLabel: 'Contact',
    heroTitle: "Let's plan your next step in English",
    heroDesc:
      'Request a free assessment, ask about corporate programs, or speak with our team.',
    getInTouch: 'Get in touch',
    lead: 'Tell us about your goals and we will match you with the right coach and program. Corporate and team inquiries are welcome.',
    address: 'Address',
    email: 'Email',
    phone: 'Phone',
    responseTime: 'Response time',
    responseValue: 'Within minutes',
    preferTest: 'Prefer a quick level check first?',
    assessmentLink: 'Take the free assessment test',
    formTitle: 'Send a message',
    formLead: 'Fill in the form and we will get back to you shortly.',
    firstName: 'First name',
    lastName: 'Last name',
    workEmail: 'Email',
    company: 'Company (optional)',
    interest: 'I am interested in',
    selectProgram: 'Select a program',
    message: 'Message',
    messagePlaceholder: 'Tell us about your goals, timeline, and current level...',
    send: 'Send message',
    sending: 'Sending…',
    successTitle: 'Message sent',
    successText:
      'Thank you for reaching out. We will reply within minutes with next steps for your program or assessment.',
    takeAssessment: 'Take free assessment',
    sendAnother: 'Send another message',
    interests: {
      adults: 'English for Professionals',
      robotics: 'AI & Robotics Coding',
      kids: 'English for Kids',
      assessment: 'Free assessment test',
      business: 'Business English',
      corporate: 'Corporate training',
      exam: 'Exam preparation',
      executive: 'Executive coaching',
      other: 'Not sure yet',
    },
  },
  assessment: {
    label: 'Free assessment',
    title: 'English level test',
    intro:
      'Each session draws {{count}} random questions from our bank of 100 professional English items. Get your score and a detailed report by email.',
    beforeTitle: 'Before we begin',
    beforeDesc:
      'Enter your details to start. You will get {{count}} different questions each time you take the test.',
    firstName: 'First name',
    firstNamePlaceholder: 'Your first name',
    email: 'Email address',
    emailPlaceholder: 'you@company.com',
    start: 'Start test',
    errFirstName: 'Please enter your first name.',
    errEmail: 'Please enter a valid email address.',
    progressStart: 'Getting started',
    progressStep: 'Step {{current}} of {{total}}',
    progressComplete: 'Complete',
    questionOf: 'Question {{n}} of {{total}}',
    back: 'Back',
    yourLevel: 'Your estimated level',
    score: 'Score: {{score}} / {{max}}',
    reportReady:
      'Your full report — wrong answers with explanations, strengths, areas to improve, and a personalized plan — is ready to send to',
    sendReport: 'Send detailed report to my email',
    sending: 'Sending…',
    sent: 'Report sent to your email',
    sentHint: 'Check your inbox and spam folder for the full breakdown.',
    sendError: 'Could not send the report. Please try again or contact us directly.',
    configHint: 'Add EmailJS keys to .env. Set template To email to {{email}}.',
    bookConsult: 'Book a free consultation',
    viewCourses: 'View courses',
  },
  footer: {
    tagline:
      'English for professionals, AI & robotics coding, and English for children. Learning that starts with real conversation.',
    programs: 'Programs',
    company: 'Company',
    links: {
      adults: 'English for Professionals',
      robotics: 'AI & Robotics Coding',
      kids: 'English for Kids',
      business: 'Business English',
      corporate: 'Corporate Training',
      exam: 'Exam Preparation',
      executive: 'Executive Coaching',
      about: 'About us',
      method: 'Our method',
      assessment: 'Free assessment',
      contact: 'Contact',
    },
    rights: 'All rights reserved.',
    privacyLink: 'Privacy Policy',
    termsLink: 'Terms of Service',
  },
  legal,
  coursesPage: {
    heroLabel: 'Courses',
    heroTitle: 'Programs that fit your schedule and ambitions',
    heroDesc:
      'From business communication to exam prep—each course blends live coaching, structured practice, and measurable milestones.',
  },
}
