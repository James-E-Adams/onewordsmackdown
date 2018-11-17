import React from "react"

const WordGoal = ({ progress, remaining }) => (
  <div className="word-goal">
    <span className="word-progress"> {progress} </span>
    <span className="word-remaining"> {remaining} </span>
  </div>
)
export default WordGoal
