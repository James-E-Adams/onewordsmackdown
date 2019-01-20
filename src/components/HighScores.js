import React from "react"
import Button from "./Button"

const HighScores = ({ highScores, setHighScores }) => (
  <div
    style={{
      width: 400,
      textAlign: "left",
      paddingLeft: 20,
      boxSizing: "border-box",
      alignSelf: "normal"
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
    {Object.keys(highScores).length ? (
      <Button onClick={() => setHighScores({})} red style={{ marginTop: 20 }}>
        Reset
      </Button>
    ) : null}
  </div>
)

export default HighScores
