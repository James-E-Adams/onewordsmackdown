import React, { useState } from "react"
import WordHandler from "./components/WordHandler"
import Footer from "./components/Footer"
import "./App.css"

import wordList from "./wordList.json"
import Settings from "./components/Settings"
import createWordState from "./utils/createWordState"
import HighScores from "./components/HighScores"

const getRandomIndex = wordLength =>
  parseInt(Math.random() * wordList[wordLength].length)

const getRandomWord = wordLength =>
  wordList[wordLength][getRandomIndex(wordLength)]

const getNewWordState = wordLength => createWordState(getRandomWord(wordLength))

const App = () => {
  const [settings, setSettings] = useState({
    wordLength: "10"
  })
  const [showSettings, setShowSettings] = useState(true)
  const [timers, setTimers] = useState({ start: false, end: false })
  const [wordState, setWordState] = useState(
    getNewWordState(settings.wordLength)
  )
  const [highScores, setHighScores] = useState(false)
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
          onClick={() => setShowSettings(!showSettings)}
        >
          <HighScores highScores={highScores} setHighScores={setHighScores} />
          <button
            style={{
              color: "lightblue",
              marginLeft: "auto",
              marginRight: 20,
              fontSize: 20,
              borderRadius: 10
            }}
          >
            {showSettings ? "Close" : "Show settings"}
          </button>
        </div>
        {showSettings ? (
          <Settings
            setSettings={setSettings}
            settings={settings}
            getNewWord={getNewWord}
          />
        ) : (
          <WordHandler
            wordState={console.tapLog(wordState)}
            setWordState={setWordState}
            timers={timers}
            setTimers={setTimers}
            getNewWord={getNewWord}
            wordLength={settings.wordLength}
            highScores={highScores}
            setHighScores={setHighScores}
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

export default App
