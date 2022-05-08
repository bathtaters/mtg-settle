
export const FormStyle = ({ children }) => (
  <div className="form-control py-4">
    <div className="input-group justify-center px-12">{children}</div>
  </div>
)

export const ButtonStyle = (props) => <input {...props} type="button" className="btn btn-primary w-32" />
