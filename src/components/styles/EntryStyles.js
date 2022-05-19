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
    aria-label={label+' symbol'}
    className="w-8 sm:w-10 fill-secondary-content shrink-0"
    dangerouslySetInnerHTML={{ __html: svg }}
  />
)

export const SetTextStyle = ({ children }) => (
  <h3 className="p-0 sm:px-2 line-clamp-2 break-words leading-tight">
    {children}
  </h3>
)

// Form Styles
export const FormStyle = ({ children }) => (
  <div className="w-full max-w-3xl h-16 sm:h-20 my-1 px-2 sm:px-8 form-control">
    {children}
  </div>
)

export const ButtonStyle = (props) => <input {...props} type="button" className="btn btn-secondary w-20 z-10" />

export const suggestClasses = {
  main: "input-group",
  textbox: "w-full h-full input input-bordered input-secondary bg-secondary text-secondary-content text-lg "+
    "placeholder:italic placeholder:text-center placeholder:text-secondary-content/70",
  select: "bg-secondary text-secondary-content",
  unselect: "bg-secondary-focus text-secondary-content",
}