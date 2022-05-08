
export const FormStyle = ({ children }) => (
  <div className="form-control py-4">
    <div className="input-group justify-center px-12">{children}</div>
  </div>
)

export const TextBoxStyle = (props) => (
  <input
    {...props} type="text"
    className="input input-secondary text-secondary-content bg-secondary focus:bg-secondary-focus flex-grow"
  />
)

export const ButtonStyle = (props) => <input {...props} type="button" className="btn btn-primary w-32" />