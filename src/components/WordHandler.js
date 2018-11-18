import React from "react"
import withHandlers from "recompose/withHandlers"
import lifecycle from "recompose/lifecycle"
import compose from "recompose/compose"

import WordGoal from "./WordGoal.js"
import createWordState from "../utils/createWordState"
import calculateTimeLength from "../utils/calculateTimeLength"

const WordHandler = ({ wordState }) => <WordGoal {...wordState} />

const onKeyDown = ({
  wordState: { remaining, word, progress },
  setTimers,
  timers,
  getNewWord,
  setWordState,
  handleHighScores,
  wordLength
}) => ({ key }) => {
  const upcomingLetter = remaining[0]
  if (key === upcomingLetter) {
    const nextWordState = createWordState(word, progress + upcomingLetter)
    progress === "" && setTimers({ start: new Date(), end: false }) //first letter
    if (remaining === key) {
      //last letter
      setTimers({ ...timers, end: new Date() })
      handleHighScores()
      getNewWord()
      return
    }
    setWordState(nextWordState)
  } else {
    //maybe do something here later on wrong key
  }
}

const handleHighScores = ({
  highScores,
  wordState: { word },
  setHighScores,
  timers: { start, end },
  wordLength
}) => () => {
  const newScore = calculateTimeLength(start, end)
  ;(!highScores[wordLength] || newScore < highScores[wordLength].time) &&
    setHighScores({
      ...highScores,
      [wordLength]: { time: newScore, word }
    })
}

export default compose(
  withHandlers({ handleHighScores }),
  withHandlers({ onKeyDown }),
  lifecycle({
    componentDidMount() {
      document.addEventListener("keydown", this.props.onKeyDown)
    },
    componentWillUnmount() {
      document.removeEventListener("keydown", this.props.onKeyDown)
    }
  })
)(WordHandler)
