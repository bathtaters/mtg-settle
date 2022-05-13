import { ShareIcon, ReloadIcon } from "../subcomponents/Icons"

// Main Stats Modal styles
export const StatsWrapperStyle = ({ children }) => <div className="flex flex-col items-center">{children}</div>

export const InfoWrapperStyle = ({ children }) => (
  <div className="stats stats-vertical xs:stats-horizontal my-1 text-base font-sans shadow shadow-black bg-secondary-focus text-secondary-content">
    {children}
  </div>
)

export const InfoItemStyle = ({ title, value, detail }) => (
  <div className="stat">
    <div className="stat-title">{title}</div>
    <div className="stat-value">{value}</div>
    <div className="stat-desc">{detail}</div>
  </div>
)

export const StatsButtonWrapper = ({ children }) => <div className="flex flex-wrap gap-2 justify-center items-center mt-1">{children}</div>

const StatsButton = ({ onClick, label, children }) => (
  <button type="button" onClick={onClick} className="
    btn w-full sm:w-auto btn-lg btn-secondary
    flex flex-wrap-reverse gap-3 sm:gap-4 place-content-start justify-center
  ">
    <span className="text-xl sm:text-2xl">{label}</span>
    {children}
  </button>
)

// Stats elements
export const StatsDivider = () => <div className="divider before:bg-secondary/30 after:bg-secondary/30 w-5/6 self-center" />

export const ShareButton = ({ onClick }) => (
  <StatsButton onClick={onClick} label="Share">
    <ShareIcon className="fill-current w-auto h-full py-3" />
  </StatsButton>
)

export const NewGameButton = ({ onClick }) => (
  <StatsButton onClick={onClick} label="New Game">
    <ReloadIcon className="fill-current w-auto h-full py-3" />
  </StatsButton>
)

// Stats Bar styles
export const ProgressWrapperStyle = ({ children }) => (
  <div className="
    grid grid-cols-stats gap-3 p-6 my-2 w-72 max-w-[85vw] text-secondary-content font-sans 
    artboard-demo bg-secondary-focus shadow shadow-black
  ">
    {children}
  </div>
)
export const TooltipStyle = ({ tip, children }) => <div className="tooltip tooltip-secondary self-stretch" data-tip={tip}>{children}</div>
export const ProgressStyle = (props) => <progress className="progress progress-info border border-info h-full bg-secondary" {...props} />