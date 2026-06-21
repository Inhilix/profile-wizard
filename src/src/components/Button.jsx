export default function Button({ children, variant = 'primary', onClick, type = 'button', disabled = false, fullWidth = false }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    fontWeight: 600,
    padding: '12px 24px',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.5 : 1,
  }

  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-text-muted)',
      border: '1px solid var(--color-border)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-muted)',
    },
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant] }}
    >
      {children}
    </button>
  )
}
