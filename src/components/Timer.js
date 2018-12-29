import React, { useEffect, useState } from "react"

import calculateTimeLength from "../utils/calculateTimeLength"

const Timer = ({ timers: { start, end }, style, hasHighScore }) => {
  const [key, setKey] = useState(true)
  // quickest and dirtiest way to force the rerender
  useEffect(() => {
    const keyInterval = setInterval(() => setKey(!key), 100)
    return () => clearInterval(keyInterval)
  })

  return (
    <div style={{ marginBottom: 10, ...style }}>
      {start ? (
        <React.Fragment>
          {calculateTimeLength(start, end ? end : new Date())}s
        </React.Fragment>
      ) : !hasHighScore ? (
        <div style={{ marginBottom: 10 }}>
          Type the word on the screen. Go on! :)
        </div>
      ) : null}
    </div>
  )
}

export default Timer
