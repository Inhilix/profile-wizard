import Button from '../Button.jsx'
import { stepStyles as s, Field } from './shared.jsx'

const INTERESTS = [
  'Computer Science', 'Business', 'Engineering', 'Data Science',
  'Design', 'Medicine', 'Law', 'Architecture',
]

const COUNTRIES = ['UK', 'USA', 'Canada', 'Australia', 'Germany', 'Finland', 'Lithuania']
const DEGREES   = ["Bachelor's", "Master's", 'PhD']

export default function GoalsStep({ data, onChange, onNext, onBack }) {
  function toggleInterest(interest) {
    const current = data.interests || []
    if (current.includes(interest)) {
      onChange({ interests: current.filter(i => i !== interest) })
    } else {
      onChange({ interests: [...current, interest] })
    }
  }

  return (
    <div>
      <div style={s.stepHeader}>
        <div style={s.stepNum}>Step 3 of 4</div>
        <h2 style={s.stepTitle}>Your Goals</h2>
        <p style={s.stepDesc}>Where do you want to study, and what are you interested in?</p>
      </div>

      <div style={s.fields}>
        <Field label="Target Country">
          <select
            value={data.targetCountry}
            onChange={e => onChange({ targetCountry: e.target.value })}
            style={s.input}
          >
            <option value="">Select a country</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>

        <Field label="Target Degree">
          <select
            value={data.targetDegree}
            onChange={e => onChange({ targetDegree: e.target.value })}
            style={s.input}
          >
            <option value="">Select degree level</option>
            {DEGREES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </Field>

        <Field label="Fields of Interest (select at least 1)">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {INTERESTS.map(interest => {
              const selected = (data.interests || []).includes(interest)
              return (
                <label
                  key={interest}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: selected ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                    background: selected ? 'rgba(91,79,232,0.12)' : 'var(--color-bg)',
                    color: selected ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    fontSize: '14px',
                    fontWeight: selected ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    userSelect: 'none',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleInterest(interest)}
                    style={{ display: 'none' }}
                  />
                  {selected ? '✓ ' : ''}{interest}
                </label>
              )
            })}
          </div>
        </Field>
      </div>

      <div style={s.actions}>
        <Button variant="secondary" onClick={onBack}>← Back</Button>
        <Button onClick={onNext}>Review Profile →</Button>
      </div>
    </div>
  )
}
