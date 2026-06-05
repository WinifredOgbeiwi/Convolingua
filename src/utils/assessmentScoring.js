import { ASSESSMENT_QUESTION_COUNT } from '../data/assessmentQuestions'

const CATEGORY_LABELS = {
  grammar: 'Grammar & structure',
  vocabulary: 'Vocabulary',
  business: 'Business English',
  reading: 'Reading & connectors',
}

export function calculateScore(answers) {
  return answers.reduce((sum, a) => sum + (a?.correct ? 1 : 0), 0)
}

function getCategoryStats(questions, answers) {
  const stats = {}

  questions.forEach((q, i) => {
    if (!stats[q.category]) {
      stats[q.category] = { correct: 0, total: 0 }
    }
    stats[q.category].total += 1
    if (answers[i]?.correct) stats[q.category].correct += 1
  })

  return stats
}

function formatStrengthsWeaknesses(questions, answers) {
  const stats = getCategoryStats(questions, answers)
  const strengths = []
  const weaknesses = []

  Object.entries(stats).forEach(([category, { correct, total }]) => {
    const label = CATEGORY_LABELS[category] ?? category
    const pct = Math.round((correct / total) * 100)

    if (pct >= 67) {
      strengths.push(`${label} (${correct}/${total} correct)`)
    } else if (pct <= 33) {
      weaknesses.push(`${label} (${correct}/${total} correct)`)
    }
  })

  return {
    strengths:
      strengths.length > 0
        ? strengths.join('; ')
        : 'Solid foundation across the areas tested — keep building consistency in live practice.',
    weaknesses:
      weaknesses.length > 0
        ? weaknesses.join('; ')
        : 'No single weak area stood out — focus on fluency, speed, and high-stakes speaking.',
  }
}

function getLevelBand(score, maxScore) {
  const pct = score / maxScore

  if (pct <= 0.2) {
    return {
      level: 'Elementary (A2)',
      cefr: 'A2',
      summaryWeb:
        'You are building core English for work. Send the detailed report to your email for the full breakdown and learning plan.',
      summaryEmail:
        'Your answers place you at an elementary level for professional English. Focus on core grammar, workplace vocabulary, and guided speaking before tackling complex meetings or reports.',
      recommendation:
        'Start with our General English program, then move into Business English as your accuracy improves.',
      recommendedCourse: 'General English',
      plan: [
        'Rebuild core grammar and tense accuracy',
        'Learn high-frequency business vocabulary',
        'Weekly live speaking sessions with a coach',
        'Short writing tasks with corrective feedback',
      ],
    }
  }

  if (pct <= 0.4) {
    return {
      level: 'Pre-Intermediate (B1)',
      cefr: 'B1',
      summaryWeb:
        'You handle familiar workplace topics but make errors that can affect clarity. Your full report is ready to send by email.',
      summaryEmail:
        'You handle familiar workplace topics, but recurring errors can reduce clarity in meetings and written updates. The sections below highlight what to work on next.',
      recommendation:
        'Our Business English track will strengthen accuracy while you practice real meeting and email scenarios.',
      recommendedCourse: 'Business English',
      plan: [
        'Target recurring grammar gaps from your test',
        'Role-play meetings and client calls',
        'Professional email and report templates',
        'Monthly CEFR-aligned progress reviews',
      ],
    }
  }

  if (pct <= 0.6) {
    return {
      level: 'Intermediate (B1+)',
      cefr: 'B1+',
      summaryWeb:
        'You communicate at work with reasonable success. Send your report by email for corrections and a tailored plan.',
      summaryEmail:
        'You communicate successfully in many work situations, though accuracy and confidence may still vary in demanding contexts such as negotiations or unscripted presentations.',
      recommendation:
        'Professional Fluency coaching will help you speak more naturally in presentations, negotiations, and leadership contexts.',
      recommendedCourse: 'Professional Fluency',
      plan: [
        'Polish grammar in complex sentences',
        'Expand collocations and professional tone',
        'Presentation and Q&A simulations',
        'Industry-specific vocabulary coaching',
      ],
    }
  }

  if (pct <= 0.8) {
    return {
      level: 'Upper Intermediate (B2)',
      cefr: 'B2',
      summaryWeb:
        'Strong professional English with occasional gaps. Send your report by email for detailed feedback and next steps.',
      summaryEmail:
        'You show strong command of professional English. Occasional gaps in nuance, idioms, or advanced grammar are worth refining as you take on more senior responsibilities.',
      recommendation:
        'Continue with Professional Fluency or Exam Preparation if you need certification for your role.',
      recommendedCourse: 'Professional Fluency',
      plan: [
        'Refine nuance in negotiations and stakeholder updates',
        'Advanced writing for reports and proposals',
        'Accent and delivery coaching for presentations',
        'Optional Cambridge/IELTS prep if required',
      ],
    }
  }

  return {
    level: 'Advanced (C1)',
    cefr: 'C1',
    summaryWeb:
      'Excellent score. Send your report by email for a full breakdown and optional fine-tuning advice.',
    summaryEmail:
      'You scored very highly across grammar, vocabulary, and business English. Coaching can now focus on executive presence, specialized vocabulary, and high-stakes communication.',
    recommendation:
      'Executive Coaching is ideal for fine-tuning high-stakes communication, board-level language, and thought leadership.',
    recommendedCourse: 'Executive Coaching',
    plan: [
      'Executive-level 1-on-1 coaching',
      'Board, investor, and media-style simulations',
      'Specialized legal, finance, or tech discourse',
      'Bespoke goals tied to your next career step',
    ],
  }
}

export function getWrongAnswers(questions, answers) {
  return questions
    .map((q, i) => {
      const answer = answers[i]
      if (answer?.correct) return null
      return {
        number: i + 1,
        question: q.question,
        yourAnswer: answer?.label ?? '—',
        correctAnswer: q.options[q.correctIndex],
        explanation: q.explanation,
      }
    })
    .filter(Boolean)
}

export function buildWrongAnswersText(questions, answers) {
  const wrong = getWrongAnswers(questions, answers)
  if (wrong.length === 0) {
    return 'You answered every question correctly — excellent work. Keep building fluency through live practice and real workplace conversations.'
  }

  return wrong
    .map(
      (item) =>
        `Question ${item.number}\n${item.question}\n\n✗ Your answer: ${item.yourAnswer}\n✓ Correct answer: ${item.correctAnswer}\n\nWhy: ${item.explanation}`,
    )
    .join('\n\n────────────────────────\n\n')
}

export function buildPersonalizedPlanText(plan) {
  return plan.map((item, i) => `${i + 1}. ${item}`).join('\n')
}

export function getAssessmentResult(questions, answers) {
  const maxScore = questions.length
  const score = calculateScore(answers)
  const percent = Math.round((score / maxScore) * 100)
  const band = getLevelBand(score, maxScore)
  const { strengths, weaknesses } = formatStrengthsWeaknesses(questions, answers)
  const { summaryWeb, summaryEmail, ...rest } = band

  return {
    score,
    maxScore,
    percent,
    strengths,
    weaknesses,
    coursePath: '/courses',
    summary: summaryWeb,
    summaryEmail,
    ...rest,
  }
}

export function buildEmailPayload(name, email, result, questions, answers) {
  return {
    name: name || 'there',
    email: email.trim(),
    level: result.level,
    score: String(result.score),
    max_score: String(result.maxScore),
    summary: result.summaryEmail,
    strengths: result.strengths,
    weaknesses: result.weaknesses,
    recommendation: result.recommendation,
    recommended_course: result.recommendedCourse,
    wrong_answers: buildWrongAnswersText(questions, answers),
    personalized_plan: buildPersonalizedPlanText(result.plan),
  }
}
