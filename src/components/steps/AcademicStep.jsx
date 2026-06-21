import Button from '../Button.jsx'
import { stepStyles as s, Field } from './shared.jsx'

export default function AcademicStep({ data, onChange, onNext }) {
  function handleNext() {
    if (!data.degree || !data.gpa || !data.fieldOfStudy) {
      alert('Please fill in all fields before continuing.')
      return
    }
    onNext()
  }

  return (
    <div>
      <div style={s.stepHeader}>
        <div style={s.stepNum}>Step 1 of 4</div>
        <h2 style={s.stepTitle}>Academic Background</h2>
        <p style={s.stepDesc}>Tell us about your current academic standing.</p>
      </div>

      <div style={s.fields}>
        <Field label="Current Degree">
          <select
            value={data.degree}
            onChange={e => onChange({ degree: e.target.value })}
            style={s.input}
          >
            <option value="">Select your degree level</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
          </select>
        </Field>

        <Field label="GPA (0.0 – 4.0)">
          <input
            type="number"
            min="0"
            max="4"
            step="0.01"
            placeholder="e.g. 3.6"
            value={data.gpa}
            onChange={e => onChange({ gpa: e.target.value })}
            style={s.input}
          />
        </Field>

        <Field label="Field of Study">
          <input
            type="text"
            placeholder="e.g. Computer Science"
            value={data.fieldOfStudy}
            onChange={e => onChange({ fieldOfStudy: e.target.value })}
            style={s.input}
          />
        </Field>
      </div>

      <div style={s.actions}>
        <Button onClick={handleNext}>Next: Test Scores →</Button>
      </div>
    </div>
  )
}
