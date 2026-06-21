export const stepStyles = {
  stepHeader: { marginBottom: '28px' },
  stepNum: {
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--color-primary)',
    marginBottom: '8px',
  },
  stepTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '24px',
    fontWeight: 700,
    color: 'var(--color-text)',
    marginBottom: '8px',
  },
  stepDesc: {
    fontSize: '15px',
    color: 'var(--color-text-muted)',
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '32px',
  },
  input: {
    width: '100%',
    background: 'var(--color-bg)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    padding: '12px 14px',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--color-text)',
    outline: 'none',
    appearance: 'none',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
  },
}

export function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{
        fontSize: '13px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--color-text-muted)',
      }}>{label}</label>
      {children}
    </div>
  )
}
