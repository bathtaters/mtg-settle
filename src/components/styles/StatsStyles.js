import { ShareIcon, NewGameIcon } from "../subcomponents/Icons"

// Main Stats Modal styles
export const StatsWrapperStyle = ({ children }) => <div className="flex flex-col items-center">{children}</div>

export const InfoWrapperStyle = ({ children }) => (
  <div
    className="stats stats-vertical xs:stats-horizontal shadow shadow-black 
      bg-secondary-focus text-secondary-content font-sans 
      mb-1 text-xs sm:text-base"
  >
    {children}
  </div>
)

export const InfoItemStyle = ({ title, value, detail }) => (
  <div className="stat">
    <div className="stat-title">{title}</div>
    <div className="stat-value text-3xl sm:text-4xl">{value}</div>
    <div className="stat-desc">{detail}</div>
  </div>
)

export const StatsButtonWrapper = ({ children }) => (
  <div className="flex flex-wrap gap-2 justify-center items-center mt-1">{children}</div>
)

const StatsButton = ({ onClick, label, children }) => (
  <button type="button" onClick={onClick} className="
    btn btn-secondary w-full sm:w-auto btn-md sm:btn-lg
    flex flex-wrap-reverse gap-0 sm:gap-4 place-content-start justify-center
  ">
    <span className="text-lg sm:text-2xl">{label}</span>
    {children}
  </button>
)

// Stats elements
export const StatsDivider = () => (
  <div className="divider before:bg-secondary/30 after:bg-secondary/30 m-0 sm:m-2 w-5/6 self-center" />
)

export const ShareButton = ({ onClick }) => (
  <StatsButton onClick={onClick} label="Share">
    <ShareIcon className="fill-current w-auto h-full py-3" />
  </StatsButton>
)

export const NewGameButton = ({ onClick }) => (
  <StatsButton onClick={onClick} label="New Game">
    <NewGameIcon className="fill-current w-auto h-full py-3" />
  </StatsButton>
)

// Stats Bar styles
export const ProgressWrapperStyle = ({ children }) => (
  <div className="
    grid grid-cols-stats gap-2 p-4 sm:p-6 my-2 w-64 sm:w-72 max-w-[85vw] text-secondary-content font-sans 
    artboard-demo bg-secondary-focus shadow shadow-black
  ">
    {children}
  </div>
)
export const TooltipStyle = ({ tip, children }) => <div className="tooltip tooltip-secondary self-stretch" data-tip={tip}>{children}</div>
export const ProgressStyle = (props) => <progress className="progress progress-info border border-info h-full bg-secondary" {...props} />