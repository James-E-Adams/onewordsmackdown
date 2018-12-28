import branch from "recompose/branch"
import React, { useState } from "react"
import renderComponent from "recompose/renderComponent"

import "./App.css"
import wordList from "./wordList.json"
import Footer from "./components/Footer"
import Settings from "./components/Settings"
import HighScores from "./components/HighScores"
import WordHandler from "./components/WordHandler"
import createWordState from "./utils/createWordState"
import MobileApologies from "./components/MobileApologies"
import Button from "./components/Button"
import Mistakes from "./components/Mistakes"

const getRandomIndex = wordLength =>
  parseInt(Math.random() * wordList[wordLength].length)

const getRandomWord = wordLength =>
  wordList[wordLength][getRandomIndex(wordLength)]

const getNewWordState = wordLength => createWordState(getRandomWord(wordLength))

const App = () => {
  const [settings, setSettings] = useState({
    wordLength: "10"
  })
  const [showSettings, setShowSettings] = useState(false)
  const [showMistakes, setShowMistakes] = useState(false)
  const [timers, setTimers] = useState({ start: false, end: false })
  const [wordState, setWordState] = useState(
    getNewWordState(settings.wordLength)
  )
  const [mistakes, setMistakes] = useState({})
  const [highScores, setHighScores] = useState(
    // {
    //   "5": "0.000",
    //   "10": "",
    //   "15": "1.223"
    // }
    {}
  )
  const getNewWord = customWordLength =>
    setWordState(getNewWordState(customWordLength || settings.wordLength))

  return (
    <div className="App">
      <div className="App-root">
        <div
          style={{
            display: "flex",
            fontSize: 17,
            paddingTop: 10,
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <HighScores highScores={highScores} setHighScores={setHighScores} />
          <div
            style={{
              display: "flex"
            }}
          >
            {!showMistakes && (
              <Button onClick={() => setShowSettings(!showSettings)}>
                {showSettings ? "Close" : "Show settings"}
              </Button>
            )}
            {!showSettings && (
              <Button onClick={() => setShowMistakes(!showMistakes)}>
                {showMistakes ? "Close" : "Show Mistakes"}
              </Button>
            )}
          </div>
        </div>
        {showSettings ? (
          <Settings
            setSettings={setSettings}
            settings={settings}
            getNewWord={getNewWord}
          />
        ) : showMistakes ? (
          <Mistakes mistakes={mistakes} setMistakes={setMistakes} />
        ) : (
          <WordHandler
            wordState={wordState}
            setWordState={setWordState}
            timers={timers}
            setTimers={setTimers}
            getNewWord={getNewWord}
            wordLength={settings.wordLength}
            highScores={highScores}
            setHighScores={setHighScores}
            mistakes={mistakes}
            setMistakes={setMistakes}
          />
        )}
        <Footer timers={timers} setTimers={setTimers} />
      </div>
    </div>
  )
}

console["tapLog"] = (...yargs) => {
  console.log(...yargs)
  return yargs[yargs.length - 1]
}

const isMobile = () =>
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

export default branch(isMobile, renderComponent(MobileApologies))(App)
