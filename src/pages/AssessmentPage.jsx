import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
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
  const seo = PAGE_SEO.assessment
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
      setEmailError('Please enter your first name.')
      return
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setEmailError('Please enter a valid email address.')
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
      setSendError(
        err?.message ||
          'Could not send the report. Please try again or contact us directly.',
      )
    }
  }

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <section className="assessment">
        <div className="container assessment-inner">
          <header className="assessment-header">
            <span className="section-label">Free assessment</span>
            <h1>English level test</h1>
            <p>
              Each session draws {ASSESSMENT_QUESTION_COUNT} random questions from our bank
              of 100 professional English items. Get your score and a detailed report by
              email.
            </p>
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
                  ? 'Complete'
                  : step === 0
                    ? 'Getting started'
                    : `Step ${step + 1} of ${totalSteps - 1}`}
              </span>
            </div>

            {isEmailStep && (
              <form className="assessment-step" onSubmit={handleEmailSubmit}>
                <h2>Before we begin</h2>
                <p className="assessment-step-desc">
                  Enter your details to start. You will get {ASSESSMENT_QUESTION_COUNT}{' '}
                  different questions each time you take the test.
                </p>
                <div className="form-field">
                  <label htmlFor="assessment-name">First name</label>
                  <input
                    id="assessment-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your first name"
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
                  Start test
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
                  Back
                </button>
              </div>
            )}

            {isResultStep && result && (
              <div className="assessment-step assessment-result assessment-result-simple">
                <div className="assessment-level-badge">
                  <span className="assessment-level">{result.level}</span>
                  <span className="assessment-cefr">
                    Score: {result.score} / {result.maxScore}
                  </span>
                </div>

                <h2>Your estimated level</h2>
                <p className="assessment-result-summary">{result.summary}</p>

                <p className="assessment-email-prompt">
                  Your full report — wrong answers with explanations, strengths, areas to
                  improve, and a personalized plan — is ready to send to{' '}
                  <strong>{email}</strong>.
                </p>

                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleSendReport}
                  disabled={sendStatus === 'sending' || sendStatus === 'sent'}
                >
                  {sendStatus === 'sending'
                    ? 'Sending…'
                    : sendStatus === 'sent'
                      ? 'Report sent to your email'
                      : 'Send detailed report to my email'}
                </button>

                {sendStatus === 'sent' && (
                  <p className="assessment-success" role="status">
                    Check your inbox and spam folder for the full breakdown.
                  </p>
                )}
                {sendStatus === 'error' && (
                  <p className="assessment-error" role="alert">
                    {sendError}
                    {!isAssessmentEmailJsConfigured() && (
                      <>
                        {' '}
                        Ensure EmailJS is configured and template <strong>To email</strong>{' '}
                        is <code>{'{{email}}'}</code>.
                      </>
                    )}
                  </p>
                )}
                {!isAssessmentEmailJsConfigured() && sendStatus === 'idle' && (
                  <p className="assessment-config-hint">
                    Add EmailJS keys to <code>.env</code>. Set template <strong>To email</strong>{' '}
                    to <code>{'{{email}}'}</code>.
                  </p>
                )}

                <div className="assessment-result-actions">
                  <Link to="/contact" className="btn btn-outline btn-lg">
                    Book a free consultation
                  </Link>
                  <Link to={result.coursePath} className="btn btn-ghost btn-lg">
                    View courses
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
