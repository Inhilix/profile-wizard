import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import StepIndicator from './components/StepIndicator.jsx'
import AcademicStep from './components/steps/AcademicStep.jsx'
import TestScoresStep from './components/steps/TestScoresStep.jsx'
import GoalsStep from './components/steps/GoalsStep.jsx'
import ReviewStep from './components/steps/ReviewStep.jsx'

const STORAGE_KEY = 'studyai-profile-v1'

const initialProfile = {
  degree: '',
  gpa: '',
  fieldOfStudy: '',
  testType: 'IELTS',
  testScore: '',
  targetCountry: '',
  targetDegree: '',
  interests: [],
}

function computeScore(profile) {
  let score = 0
  // GPA: up to 40 pts
  const gpa = parseFloat(profile.gpa)
  if (!isNaN(gpa)) {
    score += Math.round((gpa / 4.0) * 40)
  }
  // Test score: up to 30 pts
  const ts = parseFloat(profile.testScore)
  if (!isNaN(ts)) {
    if (profile.testType === 'IELTS') {
      score += Math.round(Math.min(ts / 9.0, 1) * 30)
    } else {
      score += Math.round(Math.min(ts / 120, 1) * 30)
    }
  }
  // Degree: up to 10 pts
  if (profile.degree === "Master's") score += 10
  else if (profile.degree === "Bachelor's") score += 6
  else if (profile.degree === 'High School') score += 3
  // Field of study: up to 5 pts
  if (profile.fieldOfStudy.trim().length > 2) score += 5
  // Interests: up to 10 pts
  if (profile.interests.length >= 2) score += 10
  else if (profile.interests.length === 1) score += 5
  // Country selected: 5 pts
  if (profile.targetCountry) score += 5
  return Math.min(score, 100)
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [profileData, setProfileData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : initialProfile
    } catch {
      return initialProfile
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData))
    } catch {}
  }, [profileData])

  function updateProfile(fields) {
    setProfileData(prev => ({ ...prev, ...fields }))
  }

  function goTo(step) {
    if (step >= 1 && step <= 4) setCurrentStep(step)
  }

  function reset() {
    setProfileData(initialProfile)
    setCurrentStep(1)
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }

  const score = computeScore(profileData)

  return (
    <div className="app-wrap">
      <Header />
      <main className="main">
        <div className="wizard-card">
          <StepIndicator currentStep={currentStep} totalSteps={4} onGoTo={goTo} />

          <div className="step-content">
            {currentStep === 1 && (
              <AcademicStep
                data={profileData}
                onChange={updateProfile}
                onNext={() => goTo(2)}
              />
            )}
            {currentStep === 2 && (
              <TestScoresStep
                data={profileData}
                onChange={updateProfile}
                onNext={() => goTo(3)}
                onBack={() => goTo(1)}
              />
            )}
            {currentStep === 3 && (
              <GoalsStep
                data={profileData}
                onChange={updateProfile}
                onNext={() => goTo(4)}
                onBack={() => goTo(2)}
              />
            )}
            {currentStep === 4 && (
              <ReviewStep
                data={profileData}
                score={score}
                onBack={() => goTo(3)}
                onReset={reset}
              />
            )}
          </div>
        </div>
      </main>

      <style>{`
        .app-wrap { min-height: 100vh; display: flex; flex-direction: column; }
        .main {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 40px 16px 60px;
        }
        .wizard-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 40px;
          width: 100%;
          max-width: 680px;
          box-shadow: var(--shadow-card);
        }
        .step-content { margin-top: 32px; }
        @media (max-width: 600px) {
          .wizard-card { padding: 24px 16px; }
        }
      `}</style>
    </div>
  )
}
