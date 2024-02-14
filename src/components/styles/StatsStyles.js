import { ShareIcon, NewGameIcon } from "../subcomponents/Icons"

// Main Stats Modal styles
export const StatsWrapperStyle = ({ id, children }) => (
  <div className="flex flex-col items-center" id={id+'-body'}>{children}</div>
)

export const InfoWrapperStyle = ({ children }) => (
  <div
    className="stats stats-vertical xs:stats-horizontal shadow shadow-black 
      bg-secondary-focus text-secondary-content font-sans 
      mb-1 text-xs sm:text-lg"
  >
    {children}
  </div>
)

export const InfoItemStyle = ({ title, value, detail }) => (
  <div className="stat text-center">
    <div className="stat-title">{title}</div>
    <div className="stat-value text-3xl sm:text-5xl">{value}</div>
    <div className="stat-desc">{detail}</div>
  </div>
)

export const StatsButtonWrapper = ({ children }) => (
  <div className="flex flex-wrap gap-2 justify-center items-center mt-1">{children}</div>
)

const StatsButton = ({ onClick, label, children }) => (
  <button type="button" onClick={onClick} className={` 
    btn btn-secondary w-full sm:w-auto btn-md sm:btn-lg 
    flex flex-wrap-reverse gap-0 sm:gap-4 place-content-start justify-center 
    ${!onClick ? 'btn-inactive' : ''}
  `}>
    {!!label && <div className="text-lg sm:text-2xl">{label}</div>}
    <div className="py-2 pl-1 sm:pl-0 sm:py-3 h-full">{children}</div>
  </button>
)

// Stats elements
export const StatsDivider = () => (
  <div className="divider before:bg-secondary/30 after:bg-secondary/30 m-0 sm:m-2 w-5/6 self-center" />
)

export const ShareButton = ({ onClick }) => (
  <StatsButton onClick={onClick} label="Share">
    <ShareIcon className="fill-current w-auto h-full" />
  </StatsButton>
)

export const NewGameButton = ({ onClick }) => (
  <StatsButton onClick={onClick} label="New Game">
    <NewGameIcon className="fill-current w-auto h-full" />
  </StatsButton>
)

export const StatsTimerStyle = ({ label, children }) => (
  <StatsButton label={
    <div className="flex flex-row sm:flex-col justify-center items-center
      gap-2 sm:gap-1 text-sm sm:text-lg sm:leading-4">
      <div className="font-sans uppercase">{label}</div>
      <div className="font-mono font-light">{children}</div>
    </div>
  }>
    <NewGameIcon className="fill-current w-auto h-full" />
  </StatsButton>
)

// Stats Bar styles
export const ProgressWrapperStyle = ({ title, children }) => (
  <div className="
    grid grid-cols-stats gap-2 font-sans w-64 sm:w-80 max-w-full my-2
    px-4 pt-2 pb-4 sm:px-6 sm:pb-6 sm:pt-3
    artboard-demo text-secondary-content bg-secondary-focus shadow shadow-black
  ">
    <h4 className="col-span-2 text-center sm:mb-1 opacity-70">{title}</h4>
    {children}
  </div>
)
export const TooltipStyle = ({ tip, children }) => (
  <div className="tooltip tooltip-secondary self-stretch h-5 sm:h-6" data-tip={tip} aria-label={tip}>{children}</div>
)
export const ProgressStyle = (props) => (
  <progress className="progress progress-info border border-info h-full bg-secondary" {...props} />
)