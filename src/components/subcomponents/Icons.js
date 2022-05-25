// SVG Icons

export function InfoIcon({ className = "stroke-current w-full h-auto" }) {
  return (
    <svg className={className} aria-label="Info" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export function WarningIcon({ className = "stroke-current w-full h-auto" }) {
  return (
    <svg className={className} aria-label="Warning" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  )
}

export function NewWindowIcon({ className = "fill-current w-full h-auto" }) {
  return (
    <svg className={className} aria-label="Opens in new window" viewBox="0 0 44 44" role="img" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M 41.186 1.43 L 28.81 1.43 C 28.292 1.43 27.774 1.754 27.774 2.272 L 27.774 4.216 
          C 27.774 4.734 28.227 5.318 28.81 5.318 L 33.929 5.318 C 34.512 5.318 34.836 5.965 34.382 6.354 
          L 23.368 17.369 C 22.979 17.758 22.979 18.341 23.368 18.73 L 24.728 20.09 C 25.117 20.479 25.7 20.479 26.089 20.09 
          L 37.104 9.076 C 37.493 8.687 38.14 8.946 38.14 9.529 L 38.14 14.648 C 38.14 15.166 38.659 15.749 39.177 15.749 
          L 41.056 15.749 C 41.574 15.749 42.028 15.166 42.028 14.648 L 42.028 2.337 C 42.028 1.754 41.704 1.43 41.186 1.43 Z" />
        <path d="M 36.083 16.125 L 32.683 19.625 C 32.083 20.225 31.783 20.925 31.783 21.725 L 31.783 33.125 
          C 31.783 33.925 31.083 34.625 30.283 34.625 L 9.283 34.625 C 8.483 34.625 7.783 33.925 7.783 33.125 
          L 7.783 12.125 C 7.783 11.325 8.483 10.625 9.283 10.625 L 20.783 10.625 C 21.583 10.625 22.383 10.325 22.883 9.725 
          L 26.283 6.325 C 26.883 5.725 26.483 4.625 25.583 4.625 L 5.783 4.625 C 3.583 4.625 1.783 6.425 1.783 8.625 
          L 1.783 36.625 C 1.783 38.825 3.583 40.625 5.783 40.625 L 33.783 40.625 C 35.983 40.625 37.783 38.825 37.783 36.625 
          L 37.783 16.825 C 37.783 15.925 36.683 15.525 36.083 16.125 Z" />
      </g>
    </svg>
  )
}

export function NewGameIcon({ className = "fill-current w-full h-auto" }) {
  return (
    <svg className={className} aria-label="New Game" viewBox="0 0 752 752" role="img" xmlns="http://www.w3.org/2000/svg" >
      <path
        d="m522.81 281.29v-137.34h-374.13v449.9h374.13v-132.6h-37.887v94.715h-298.36v-374.13h298.36v99.453zm-165.75 94.715c0
        15.691-12.727 28.414-28.414 28.414-15.691 0-28.414-12.727-28.414-28.414 0-15.691 12.727-28.414 28.414-28.414s28.414 12.727
        28.414 28.414zm85.246 0c0 15.691-12.727 28.414-28.414 28.414-15.691 0-28.414-12.727-28.414-28.414 0-15.691 12.727-28.414
        28.414-28.414s28.414 12.727 28.414 28.414zm80.508 0c0 15.691-12.727 28.414-28.414 28.414-15.691 0-28.414-12.727-28.414-28.414
        0-15.691 12.727-28.414 28.414-28.414s28.414 12.727 28.414 28.414z"
      />
    </svg>
  )
}

export function StatsIcon({ className = "fill-current w-full h-auto" }) {
  return (
    <svg className={className} aria-label="Stats" viewBox="0 0 294 244" role="img" xmlns="http://www.w3.org/2000/svg" >
      <g>
        <path d="M30.5,228h47c5.247,0,9.5-4.253,9.5-9.5v-130c0-5.247-4.253-9.5-9.5-9.5h-47c-5.247,0-9.5,4.253-9.5,9.5v130
          C21,223.747,25.253,228,30.5,228z"/>
        <path d="M123.5,228h47c5.247,0,9.5-4.253,9.5-9.5v-195c0-5.247-4.253-9.5-9.5-9.5h-47c-5.247,0-9.5,4.253-9.5,9.5v195
          C114,223.747,118.253,228,123.5,228z"/>
        <path d="M216.5,228h47c5.247,0,9.5-4.253,9.5-9.5v-105c0-5.247-4.253-9.5-9.5-9.5h-47c-5.247,0-9.5,4.253-9.5,9.5v105
          C207,223.747,211.253,228,216.5,228z"/>
      </g>
    </svg>
  )
}

export function ShareIcon({ className = "fill-current w-full h-auto" }) {
  return (
    <svg className={className} aria-label="Share" viewBox="0 0 227.216 227.216" role="img" xmlns="http://www.w3.org/2000/svg" >
      <path
        d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317
        c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879
        C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258
        c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865
        c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865
        c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15
        c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879
        C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866
        c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216
        c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875
        C203.759,199.715,191.26,212.216,175.897,212.216z"
      />
    </svg>
  )
}
