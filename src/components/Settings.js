import React from "react"

const WORD_LENGTHS = ["5", "10", "15"]

const Settings = ({
  settings: { wordLength: currentWordLength, ...settings },
  setSettings,
  getNewWord
}) => (
  <div>
    <div style={{ paddingRight: 20 }}>Word length</div>
    <div style={{ display: "flex", marginTop: 20 }}>
      {WORD_LENGTHS.map((wordLength, index) => (
        <div
          key={wordLength}
          style={{
            border: "white solid",
            padding: 14,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 40,
            height: 40,
            borderRadius: 100,
            marginRight: index !== WORD_LENGTHS - 1 && 20,
            backgroundColor: wordLength === currentWordLength && "lightblue"
          }}
          onClick={() => {
            setSettings({ ...settings, wordLength })
            getNewWord(wordLength)
          }}
        >
          {wordLength}
        </div>
      ))}
    </div>
  </div>
)

export default Settings
