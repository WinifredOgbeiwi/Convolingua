import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { getPageSeo } from '../i18n/getPageSeo'
import { useTranslation } from '../i18n/useTranslation'
import {
  ASSESSMENT_QUESTION_COUNT,
  selectRandomQuestions,
} from '../data/assessmentQuestions'
import { getAssessmentResult, buildEmailPayload } from '../utils/assessmentScoring'
import {
  sendAssessmentReport,
  isAssessmentEmailJsConfigured,
} from '../services/emailjs'
import '../styles/assessment.css'

export default function AssessmentPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('assessment', t)
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [activeQuestions, setActiveQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [emailError, setEmailError] = useState('')
  const [sendStatus, setSendStatus] = useState('idle')
  const [sendError, setSendError] = useState('')

  useEffect(() => {
    const prefill = searchParams.get('email')
    if (prefill) setEmail(prefill)
  }, [searchParams])

  const questionCount = activeQuestions.length
  const totalSteps = 1 + questionCount + 1
  const isEmailStep = step === 0
  const isResultStep = questionCount > 0 && step === questionCount + 1
  const questionIndex = step - 1
  const currentQuestion = activeQuestions[questionIndex]
  const progress = totalSteps > 1 ? Math.round((step / (totalSteps - 1)) * 100) : 0

  const result =
    isResultStep && answers.length === questionCount
      ? getAssessmentResult(activeQuestions, answers)
      : null

  function handleEmailSubmit(e) {
    e.preventDefault()
    const trimmedEmail = email.trim()
    const trimmedName = name.trim()

    if (!trimmedName) {
      setEmailError(t('assessment.errFirstName'))
      return
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setEmailError(t('assessment.errEmail'))
      return
    }

    setEmailError('')
    setActiveQuestions(selectRandomQuestions(ASSESSMENT_QUESTION_COUNT))
    setAnswers([])
    setStep(1)
  }

  function handleAnswer(optionIndex) {
    const q = currentQuestion
    const label = q.options[optionIndex]
    const correct = optionIndex === q.correctIndex

    const next = [...answers]
    next[questionIndex] = { label, correct, category: q.category }
    setAnswers(next)

    if (questionIndex === questionCount - 1) {
      setStep(questionCount + 1)
    } else {
      setStep(step + 1)
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1)
  }

  async function handleSendReport() {
    if (!result) return
    setSendStatus('sending')
    setSendError('')

    try {
      const payload = buildEmailPayload(
        name.trim(),
        email.trim(),
        result,
        activeQuestions,
        answers,
      )
      await sendAssessmentReport(payload)
      setSendStatus('sent')
    } catch (err) {
      setSendStatus('error')
      setSendError(err?.message || t('assessment.sendError'))
    }
  }

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <section className="assessment">
        <div className="container assessment-inner">
          <header className="assessment-header">
            <span className="section-label">{t('assessment.label')}</span>
            <h1>{t('assessment.title')}</h1>
            <p>{t('assessment.intro', { count: ASSESSMENT_QUESTION_COUNT })}</p>
          </header>

          <div className="assessment-card">
            <div className="assessment-progress" aria-hidden={isResultStep}>
              <div className="assessment-progress-bar">
                <div
                  className="assessment-progress-fill"
                  style={{ width: `${isResultStep ? 100 : progress}%` }}
                />
              </div>
              <span className="assessment-progress-label">
                {isResultStep
                  ? t('assessment.progressComplete')
                  : step === 0
                    ? t('assessment.progressStart')
                    : t('assessment.progressStep', {
                        current: step + 1,
                        total: totalSteps - 1,
                      })}
              </span>
            </div>

            {isEmailStep && (
              <form className="assessment-step" onSubmit={handleEmailSubmit}>
                <h2>{t('assessment.beforeTitle')}</h2>
                <p className="assessment-step-desc">
                  {t('assessment.beforeDesc', { count: ASSESSMENT_QUESTION_COUNT })}
                </p>
                <div className="form-field">
                  <label htmlFor="assessment-name">{t('assessment.firstName')}</label>
                  <input
                    id="assessment-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('assessment.firstNamePlaceholder')}
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="assessment-email">Email address</label>
                  <input
                    id="assessment-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                  {emailError && (
                    <p className="assessment-error" role="alert">
                      {emailError}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  {t('assessment.start')}
                </button>
              </form>
            )}

            {!isEmailStep && !isResultStep && currentQuestion && (
              <div className="assessment-step">
                <p className="assessment-question-count">
                  Question {questionIndex + 1} of {questionCount}
                </p>
                <h2>{currentQuestion.question}</h2>
                <ul className="assessment-options">
                  {currentQuestion.options.map((option, optionIndex) => (
                    <li key={option}>
                      <button
                        type="button"
                        className={`assessment-option ${
                          answers[questionIndex]?.label === option ? 'selected' : ''
                        }`}
                        onClick={() => handleAnswer(optionIndex)}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
                <button type="button" className="assessment-back" onClick={handleBack}>
                  {t('assessment.back')}
                </button>
              </div>
            )}

            {isResultStep && result && (
              <div className="assessment-step assessment-result assessment-result-simple">
                <div className="assessment-level-badge">
                  <span className="assessment-level">{result.level}</span>
                  <span className="assessment-cefr">
                    {t('assessment.score', {
                      score: result.score,
                      max: result.maxScore,
                    })}
                  </span>
                </div>

                <h2>{t('assessment.yourLevel')}</h2>
                <p className="assessment-result-summary">{result.summary}</p>

                <p className="assessment-email-prompt">
                  {t('assessment.reportReady')} <strong>{email}</strong>.
                </p>

                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleSendReport}
                  disabled={sendStatus === 'sending' || sendStatus === 'sent'}
                >
                  {sendStatus === 'sending'
                    ? t('assessment.sending')
                    : sendStatus === 'sent'
                      ? t('assessment.sent')
                      : t('assessment.sendReport')}
                </button>

                {sendStatus === 'sent' && (
                  <p className="assessment-success" role="status">
                    {t('assessment.sentHint')}
                  </p>
                )}
                {sendStatus === 'error' && (
                  <p className="assessment-error" role="alert">
                    {sendError}
                  </p>
                )}
                {import.meta.env.DEV &&
                  !isAssessmentEmailJsConfigured() &&
                  sendStatus === 'idle' && (
                    <p className="assessment-config-hint">
                      {t('assessment.configHint', { email: '{{email}}' })}
                    </p>
                  )}

                <div className="assessment-result-actions">
                  <Link to="/contact" className="btn btn-outline btn-lg">
                    {t('assessment.bookConsult')}
                  </Link>
                  <Link to={result.coursePath} className="btn btn-ghost btn-lg">
                    {t('assessment.viewCourses')}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
