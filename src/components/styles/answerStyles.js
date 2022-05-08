export const AnswerWrapperStyle = ({ children, hidden }) => <div className="h-10 text-center p-2">{!hidden && children}</div>

export const AnswerTitleStyle = ({ children }) => <h4 className="inline-block mr-1">{children}</h4>

export const AnswerInfoStyle = ({ children }) => <h4 className="inline-block italic">{children}</h4>