import React from "react"
import compose from "recompose/compose"

const rowStyle = {
  display: "flex"
}

const MistakeRow = ({ mistakeKey, mistakeCount }) => (
  <div style={rowStyle}>
    <div style={{ marginRight: 10 }}>{mistakeKey}</div>
    <div>{mistakeCount}</div>
  </div>
)
const Mistakes = ({ mistakes, setMistakes, ...props }) => (
  <div {...props}>
    {Object.keys(mistakes).map(mistake => (
      <MistakeRow mistakeKey={mistake} mistakeCount={mistakes[mistake]} />
    ))}
  </div>
)

export default compose()(Mistakes)
