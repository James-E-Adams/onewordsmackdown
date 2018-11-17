import React, { useEffect, useState } from "react"

const Timer = ({ timers: { start, end }, style }) => {
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
          {((end ? end : new Date())["getTime"]() - start.getTime()) / 1000}s
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default Timer
