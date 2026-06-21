import Button from '../Button.jsx'
import ScoreCard from '../ScoreCard.jsx'
import { stepStyles as s } from './shared.jsx'

function Row({ label, value }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: '15px', color: 'var(--color-text)', fontWeight: 500 }}>{value || '—'}</span>
    </div>
  )
}

export default function ReviewStep({ data, score, onBack, onReset }) {
  return (
    <div>
      <div style={s.stepHeader}>
        <div style={s.stepNum}>Step 4 of 4</div>
        <h2 style={s.stepTitle}>Your Profile Score</h2>
        <p style={s.stepDesc}>Here's a summary of your application strength.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <ScoreCard score={score} />

        <div style={{
          background: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
        }}>
          <Row label="Degree" value={data.degree} />
          <Row label="GPA" value={data.gpa ? `${data.gpa} / 4.0` : null} />
          <Row label="Field" value={data.fieldOfStudy} />
          <Row label={data.testType} value={data.testScore} />
          <Row label="Target" value={data.targetCountry ? `${data.targetDegree || '?'} in ${data.targetCountry}` : null} />
          <Row
            label="Interests"
            value={data.interests?.length ? data.interests.join(', ') : null}
          />
        </div>
      </div>

      <div style={{ ...s.actions, flexWrap: 'wrap' }}>
        <Button variant="secondary" onClick={onBack}>← Edit Goals</Button>
        <Button variant="ghost" onClick={onReset}>↺ Start Over</Button>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .review-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
