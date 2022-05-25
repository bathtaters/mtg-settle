// Answer Styles
export const AnswerWrapperStyle = ({ children }) => (
  <div className="w-full max-w-3xl my-1 px-2 sm:px-8">
    <div className="badge badge-secondary w-full h-16 sm:h-20 py-1 px-3 text-ellipsis gap-3 sm:gap-3">
      {children}
    </div>
  </div>
)

export const SetSymbolStyle = ({ label, svg }) => (
  <div
    aria-label={label+' set symbol'} role="img"
    className="w-8 sm:w-10 fill-secondary-content shrink-0"
    dangerouslySetInnerHTML={{ __html: svg }}
  />
)

export const SetTextStyle = ({ children }) => (
  <h2 className="p-0 sm:px-2 line-clamp-2 break-words leading-tight">
    {children}
  </h2>
)

// Form Styles
export const FormStyle = ({ onSubmit, children }) => (
  <form className="w-full max-w-3xl h-16 sm:h-20 my-1 px-2 sm:px-8 form-control" aria-label="Guess set name" onSubmit={onSubmit}>
    {children}
  </form>
)

export const ButtonStyle = (props) => <input {...props} type="submit" className="btn btn-secondary w-20 z-10" />

export const suggestClasses = {
  main: "input-group",
  textbox: "w-full h-full input input-bordered input-secondary bg-secondary text-secondary-content text-lg "+
    "placeholder:italic placeholder:text-center placeholder:text-secondary-content/70",
  select: "bg-secondary-content text-secondary-focus",
  unselect: "bg-secondary-focus text-secondary-content",
}