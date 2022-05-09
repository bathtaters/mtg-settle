
export const AnswerWrapperStyle = ({ children }) => <div className="h-12 text-center align-middle p-2"><h3>{children}</h3></div>

export const FormStyle = ({ children }) => (
  <div className="form-control my-4">
    <div className="input-group justify-center px-12">{children}</div>
  </div>
)

export const ButtonStyle = (props) => <input {...props} type="button" className="btn btn-primary w-32" />
