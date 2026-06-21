import Button from '../Button.jsx'
import { stepStyles as s, Field } from './shared.jsx'

const TEST_RANGES = {
  IELTS: { min: 0, max: 9, step: 0.5, placeholder: 'e.g. 7.0', label: 'IELTS Score (0 – 9)' },
  TOEFL: { min: 0, max: 120, step: 1,  placeholder: 'e.g. 95',  label: 'TOEFL Score (0 – 120)' },
}

export default function TestScoresStep({ data, onChange, onNext, onBack }) {
  const range = TEST_RANGES[data.testType]

  return (
    <div>
      <div style={s.stepHeader}>
        <div style={s.stepNum}>Step 2 of 4</div>
        <h2 style={s.stepTitle}>Test Scores</h2>
        <p style={s.stepDesc}>Select your English proficiency test and enter your score.</p>
      </div>

      <div style={s.fields}>
        <Field label="English Proficiency Test">
          <div style={{ display: 'flex', gap: '12px' }}>
            {['IELTS', 'TOEFL'].map(test => (
              <button
                key={test}
                onClick={() => onChange({ testType: test, testScore: '' })}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  border: data.testType === test
                    ? '2px solid var(--color-primary)'
                    : '1px solid var(--color-border)',
                  background: data.testType === test
                    ? 'rgba(91,79,232,0.1)'
                    : 'var(--color-bg)',
                  color: data.testType === test
                    ? 'var(--color-primary)'
                    : 'var(--color-text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {test}
              </button>
            ))}
          </div>
        </Field>

        <Field label={range.label}>
          <input
            type="number"
            min={range.min}
            max={range.max}
            step={range.step}
            placeholder={range.placeholder}
            value={data.testScore}
            onChange={e => onChange({ testScore: e.target.value })}
            style={s.input}
          />
        </Field>
      </div>

      <div style={s.actions}>
        <Button variant="secondary" onClick={onBack}>← Back</Button>
        <Button onClick={onNext}>Next: Goals →</Button>
      </div>
    </div>
  )
}
