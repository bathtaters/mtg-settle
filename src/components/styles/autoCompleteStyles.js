export const BoxWrapperStyle = ({ children }) => <div className="relative flex-grow">{children}</div>

export const InputBoxStyle = (props) => (
  <input
    {...props} type="text"
    className="input input-secondary text-secondary-content bg-secondary focus:bg-secondary-focus w-full"
  />
)

export const ListStyle = ({ getProps, children }) => (
  <ul {...getProps()} className="absolute top-12 left-0 right-0 align-top">
    {children}
  </ul>
)

export const listItemClass = (isSelected) => "bg-secondary text-secondary-content" + (isSelected ? " bg-secondary-focus" : "")
