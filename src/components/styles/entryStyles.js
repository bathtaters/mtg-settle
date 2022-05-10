
export const AnswerWrapperStyle = ({ children, onClick }) => (
  <div className="w-full sm:px-8">
    <div className="badge badge-secondary w-full h-16 sm:h-20 my-1 p-1 text-center text-ellipsis" onClick={onClick}>
      <h3 className="p-0 sm:px-2 line-clamp-2 break-words leading-tight my-auto">{children}</h3>
    </div>
  </div>
)

export const FormStyle = ({ children }) => (
  <div className="form-control h-16 sm:h-20 my-1 sm:px-8">
    {children}
  </div>
)

export const ButtonStyle = (props) => <input {...props} type="button" className="btn btn-secondary w-20 z-10" />

export const suggestClasses = {
  main: "input-group",
  textbox: "w-full h-full input input-bordered input-secondary bg-secondary text-secondary-content",
  select: "bg-secondary text-secondary-content",
  unselect: "bg-secondary-focus text-secondary-content",
}