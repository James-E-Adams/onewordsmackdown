import React from "react"

const HighScores = ({ highScores, setHighScores }) => (
  <div style={{ paddingLeft: 20 }}>
    <div style={{ textDecoration: "underline", marginBottom: 5 }}>
      High scores
    </div>
    {Object.keys(highScores).map(wordLength => (
      <div key={wordLength}>
        <span> {wordLength} letters</span>{" "}
        <span style={{ fontWeight: 700 }}>{highScores[wordLength]}s</span>
      </div>
    ))}
  </div>
)

export default HighScores
