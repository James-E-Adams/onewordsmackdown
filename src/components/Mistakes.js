import React from "react"
import compose from "recompose/compose"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const rowStyle = {
  display: "flex",
  alignItems: "center"
}

const rightMargin10 = {
  marginRight: 10
}
const rightMargin20 = {
  marginRight: 20
}

const letterStyle = {
  fontWeight: 900,
  fontSize: 40
}

const firstLetterStyle = {
  ...rightMargin10,
  ...letterStyle
}
const secondLetterStyle = {
  ...rightMargin20,
  ...letterStyle
}
const toStyle = {
  ...rightMargin10,
  fontSize: 20
}

const MistakeRow = ({ mistakeKey, mistakeCount }) => (
  <div style={rowStyle}>
    <div style={{ width: 200, ...rowStyle }}>
      <div style={firstLetterStyle}>{mistakeKey[0]}</div>
      <div style={toStyle}>
        {" "}
        <FontAwesomeIcon icon={faArrowRight} />{" "}
      </div>
      <div style={secondLetterStyle}> {mistakeKey[1]} </div>
    </div>
    <div>{mistakeCount}</div>
  </div>
)

// const seedMistakes = {
//   al: 25,
//   bo: 30,
//   ba: 30,
//   bb: 30,
//   bc: 30,
//   bd: 30,
//   be: 30,
//   bf: 30,
//   bg: 30,
//   bh: 30,
//   bi: 30,
//   bj: 30,
//   bk: 30,
//   ce: 30,
//   cf: 30,
//   cg: 30,
//   ch: 30,
//   ci: 30,
//   cj: 30,
//   ck: 30
// }

const Mistakes = ({ mistakes, setMistakes, ...props }) => {
  // const mistakes = seedMistakes //TODO
  const mistakeKeys = Object.keys(mistakes)

  return (
    <div style={{ paddingTop: 20, maxWidth: 500 }} {...props}>
      {mistakeKeys.map(mistake => (
        <MistakeRow mistakeKey={mistake} mistakeCount={mistakes[mistake]} />
      ))}
      {!mistakeKeys.length
        ? "No mistakes found. Go on, mess up. It's okay not to be perfect all the time!"
        : null}
    </div>
  )
}

export default compose()(Mistakes)
