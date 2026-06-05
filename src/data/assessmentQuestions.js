import { QUESTION_BANK } from './assessmentQuestionBank'

export const ASSESSMENT_QUESTION_COUNT = 10
export const ASSESSMENT_MAX_SCORE = ASSESSMENT_QUESTION_COUNT

/** Fisher–Yates shuffle, then take `count` questions. */
export function selectRandomQuestions(count = ASSESSMENT_QUESTION_COUNT) {
  const pool = [...QUESTION_BANK]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, count)
}

export { QUESTION_BANK }
