import React from "react";

const wordGoalStyle = {
  fontSize: 50
};

const wordProgressStyle = {
  color: "darkslategray"
};

const wordRemainingStyle = {
  color: "white"
};
const WordGoal = ({ progress, remaining }) => (
  <div style={wordGoalStyle}>
    <span style={wordProgressStyle}>{progress}</span>
    <span style={wordRemainingStyle}>{remaining}</span>
  </div>
);
export default WordGoal;
