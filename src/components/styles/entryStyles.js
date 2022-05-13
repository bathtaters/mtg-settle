// Answer Styles
export const AnswerWrapperStyle = ({ children }) => (
  <div className="w-full max-w-3xl my-1 px-2 sm:px-8">
    <div className="badge badge-secondary w-full h-16 sm:h-20 p-2 text-center text-ellipsis">
      {children}
    </div>
  </div>
)

export const SetSymbolStyle = ({ src, alt }) => (
  <span className="mr-1 p-1 bg-gray-400 mask mask-circle inline-block h-12 w-12">
    <img className="w-auto h-full m-auto" src={src} alt={alt} />
  </span>
)

export const SetTextStyle = ({ children }) => <h3 className="p-0 sm:px-2 line-clamp-2 break-words leading-tight my-auto">{children}</h3>

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
    "placeholder:opacity-70 placeholder:italic placeholder:text-center",
  select: "bg-secondary text-secondary-content",
  unselect: "bg-secondary-focus text-secondary-content",
}