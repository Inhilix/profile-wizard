const STEP_LABELS = ['Academic', 'Test Scores', 'Goals', 'Review']

export default function StepIndicator({ currentStep, totalSteps, onGoTo }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1
        const isCompleted = stepNum < currentStep
        const isActive = stepNum === currentStep

        return (
          <div key={stepNum} style={{ display: 'flex', alignItems: 'center', flex: stepNum < totalSteps ? 1 : 'none' }}>
            <button
              onClick={() => isCompleted ? onGoTo(stepNum) : undefined}
              disabled={!isCompleted}
              title={isCompleted ? `Go back to ${STEP_LABELS[i]}` : STEP_LABELS[i]}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: isActive
                  ? '2px solid var(--color-primary)'
                  : isCompleted
                  ? '2px solid var(--color-primary)'
                  : '2px solid var(--color-border)',
                background: isCompleted
                  ? 'var(--color-primary)'
                  : isActive
                  ? 'rgba(91,79,232,0.15)'
                  : 'transparent',
                color: isActive
                  ? 'var(--color-primary)'
                  : isCompleted
                  ? '#fff'
                  : 'var(--color-text-muted)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
                cursor: isCompleted ? 'pointer' : 'default',
                transition: 'all 0.2s',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isCompleted ? '✓' : stepNum}
            </button>

            {/* Label below — only show on wider screens via wrapping */}
            {stepNum < totalSteps && (
              <div style={{
                flex: 1,
                height: '2px',
                background: isCompleted ? 'var(--color-primary)' : 'var(--color-border)',
                margin: '0 4px',
                transition: 'background 0.3s',
              }} />
            )}
          </div>
        )
      })}
    </div>
  )
}
