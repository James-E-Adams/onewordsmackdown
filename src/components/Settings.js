import React from "react";
import withHandlers from "recompose/withHandlers";

const WORD_LENGTHS = ["5", "10", "15"];

const Settings = ({
  settings: { wordLength: currentWordLength },
  setWordLengthFy
}) => (
  <div>
    <div style={{ paddingRight: 20 }}>Word length</div>
    <div className="nes-select">
      {WORD_LENGTHS.map(wordLength => (
        <label key={wordLength} style={{ display: "block" }}>
          <input
            type="radio"
            className="nes-radio"
            onClick={setWordLengthFy(wordLength)}
            checked={wordLength === currentWordLength}
          />
          <span>{wordLength}</span>
        </label>
      ))}
    </div>
  </div>
);

const setWordLengthFy = ({
  setSettings,
  settings: { wordLength: currentWordLength, ...settings },
  getNewWord
}) => wordLength => () => {
  setSettings({ ...settings, wordLength });
  getNewWord(wordLength);
};

export default withHandlers({ setWordLengthFy })(Settings);
