import { Fragment, useEffect, useState } from "react"

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

const TimerStyle = ({ children }) => (<div className="flex flex-row justify-center text-center w-full">{children}</div>)
const DigitStyle = ({ children }) => (<div className="">{children}</div>)
const Colon = () => (<div className="">:</div>)

export function Timer({ deadline }) {
    const [time, setTime] = useState(deadline - Date.now())

    useEffect(() => {
      const interval = setInterval(() => setTime(Math.max(0, deadline - Date.now())), 1000)
      return () => clearInterval(interval)
    }, [deadline])

    return (
      <TimerStyle>
        {Object.entries({
          Hours: (time / HOUR) % 24,
          Minutes: (time / MINUTE) % 60,
          Seconds: (time / SECOND) % 60,
        }).map(([label, value], idx) => (<Fragment key={label}>

          { !!idx && <Colon /> }
          <DigitStyle>{`${Math.floor(value)}`.padStart(2, "0")}</DigitStyle>

        </Fragment>))}
      </TimerStyle>
    );
};