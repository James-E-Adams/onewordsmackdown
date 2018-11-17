import React from "react"
import withHandlers from "recompose/withHandlers"
import lifecycle from "recompose/lifecycle"
import compose from "recompose/compose"

import WordGoal from "./WordGoal.js"
import createWordState from "../utils/createWordState"

const WordHandler = ({ wordState }) => <WordGoal {...wordState} />

const onKeyDown = ({
  wordState: { remaining, word, progress },
  setTimers,
  timers,
  getNewWord,
  setWordState
}) => ({ key }) => {
  const upcomingLetter = remaining[0]
  if (key === upcomingLetter) {
    const nextWordState = createWordState(word, progress + upcomingLetter)
    progress === "" && setTimers({ start: new Date(), end: false }) //first letter
    if (remaining === key) {
      setTimers({ ...timers, end: new Date() }) //last letter
      remaining === key && getNewWord()
      return
    }
    setWordState(nextWordState)
  } else {
    //maybe do something here later
  }
}

export default compose(
  withHandlers({ onKeyDown }),
  lifecycle({
    componentDidMount() {
      this.listener = document.addEventListener("keydown", this.props.onKeyDown)
    },
    componentWillUnmount() {
      document.removeEventListener("keydown", this.listener)
    }
  })
)(WordHandler)
