import React, { useState } from "react"
import WordHandler from "./components/WordHandler"
import Footer from "./components/Footer"
import "./App.css"

import wordList from "./wordList.json"
import Settings from "./components/Settings"
import createWordState from "./utils/createWordState"

const getRandomIndex = wordLength =>
  parseInt(Math.random() * wordList[wordLength].length)

const getRandomWord = wordLength =>
  wordList[wordLength][getRandomIndex(wordLength)]

const getNewWordState = wordLength => createWordState(getRandomWord(wordLength))

const App = function() {
  const [settings, setSettings] = useState({
    wordLength: "5"
  })
  const [showSettings, setShowSettings] = useState(true)
  const [timers, setTimers] = useState({ start: false, end: false })
  const [wordState, setWordState] = useState(
    getNewWordState(settings.wordLength)
  )
  const getNewWord = customWordLength =>
    setWordState(getNewWordState(customWordLength || settings.wordLength))

  return (
    <div className="App">
      <div className="App-root">
        <div
          style={{
            fontSize: 17,
            paddingTop: 10,
            width: "100%",
            textAlign: "right",
            paddingRight: 10,
            color: "lightblue"
          }}
          onClick={() => setShowSettings(!showSettings)}
        >
          {showSettings ? "Close" : "Show settings"}
        </div>
        {showSettings ? (
          <Settings
            setSettings={setSettings}
            settings={settings}
            getNewWord={getNewWord}
          />
        ) : (
          <WordHandler
            wordState={wordState}
            setWordState={setWordState}
            timers={timers}
            setTimers={setTimers}
            getNewWord={getNewWord}
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
