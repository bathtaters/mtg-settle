import { maxGuessCount, guessColumns, order } from "../../assets/constants"
import { reorderArray } from "../../services/subservices/utils"

// Generate grid cell order
const reorder = reorderArray(order.slice(0, maxGuessCount), guessColumns)

export const GuessWrapperStyle = ({ children }) => (
  <div className="w-full max-w-3xl p-2 sm:p-4 grid grid-cols-2 gap-1 sm:gap-2">
    {children}
  </div>
)

export const GuessStyle = ({ children, mark, color, idx }) => (
  <div className={`badge w-full h-10 justify-start items-center ${color} ${reorder[idx]}`}>
    <span className="mr-2">{mark}</span>
    <span className="text-ellipsis line-clamp-2 break-words leading-tight overflow-hidden text-sm">{children ?? ' '}</span>
  </div>
)

export const SkippedGuessStyle = ({ children }) => <i className="italic opacity-40">{children}</i>