import React from "react"

const HighScores = ({ highScores, setHighScores }) => (
  <div
    style={{
      width: 400,
      textAlign: "left",
      paddingLeft: 20,
      boxSizing: "border-box"
    }}
  >
    <div style={{ textDecoration: "underline", marginBottom: 5 }}>
      High scores
    </div>
    {Object.keys(highScores).map(wordLength => (
      <div key={wordLength}>
        <span> {wordLength} letters</span>{" "}
        <span style={{ fontWeight: 700, marginRight: 5 }}>
          {highScores[wordLength].time}s
        </span>
        <span style={{ fontWeight: 700 }}>({highScores[wordLength].word})</span>
      </div>
    ))}
    <span
      onClick={() => setHighScores({})}
      style={{ color: "lightblue", paddingTop: 20 }}
    >
      {" "}
      Reset{" "}
    </span>
  </div>
)

export default HighScores
