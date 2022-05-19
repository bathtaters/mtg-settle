// Percent amount the ring is full
const percentFilled = '35'

// Create rotating ring effect
export default function LoadingSpinner({ size = '4rem', className = 'm-auto' }) {
  return (
    <div
      className={`animate-spin ease-linear radial-progress ${className}`}
      style={{ '--value': percentFilled, '--size': size }}
    />
  )
}