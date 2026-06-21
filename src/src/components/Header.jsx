export default function Header() {
  return (
    <header style={{
      background: 'rgba(9,9,15,0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--color-border)',
      padding: '0 24px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '20px',
        fontWeight: 800,
        color: 'var(--color-text)',
        textDecoration: 'none',
        letterSpacing: '-0.02em',
      }}>
        Study<span style={{ color: 'var(--color-primary)' }}>AI</span>
      </a>
      <span style={{
        marginLeft: '12px',
        fontSize: '13px',
        color: 'var(--color-text-muted)',
        borderLeft: '1px solid var(--color-border)',
        paddingLeft: '12px',
      }}>Profile Builder</span>
    </header>
  )
}
