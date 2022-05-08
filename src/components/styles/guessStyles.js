
export const GuessWrapperStyle = ({ children }) => (
  <div className="text-center py-4">
    <ul className="steps steps-vertical">{children}</ul>
  </div>
)

export const GuessStyle = ({ children, mark, color }) => (
  <li data-content={mark} className={`step text-secondary-content ${color}`}>
    {children}
  </li>
)

export const SkippedGuessStyle = ({ children }) => <i className="italic opacity-40">{children}</i>