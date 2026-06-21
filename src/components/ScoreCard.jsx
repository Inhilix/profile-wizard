export default function ScoreCard({ score }) {
  const band = score >= 70 ? 'strong' : score >= 40 ? 'moderate' : 'low'
  const bandLabel = { strong: 'Strong Applicant', moderate: 'Competitive', low: 'Needs Work' }[band]
  const bandColor = { strong: '#22C55E', moderate: '#F59E0B', low: '#EF4444' }[band]

  const circumference = 2 * Math.PI * 50
  const offset = circumference - (score / 100) * circumference

  return (
    <div style={{
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
        Application Score
      </div>

      <div style={{ position: 'relative', width: '140px', height: '140px', margin: '0 auto 16px' }}>
        <svg viewBox="0 0 120 120" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
          <circle cx="60" cy="60" r="50" fill="none" stroke="var(--color-border)" strokeWidth="8" />
          <circle
            cx="60" cy="60" r="50"
            fill="none"
            stroke={bandColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1s ease, stroke 0.3s' }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1 }}>{score}</span>
          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>/100</span>
        </div>
      </div>

      <div style={{
        display: 'inline-block',
        padding: '4px 16px',
        borderRadius: 'var(--radius-full)',
        background: bandColor + '22',
        color: bandColor,
        fontSize: '13px',
        fontWeight: 600,
      }}>
        {bandLabel}
      </div>
    </div>
  )
}
