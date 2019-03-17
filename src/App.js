import branch from "recompose/branch";
import React from "react";
import renderComponent from "recompose/renderComponent";
import withState from "recompose/withState";
import compose from "recompose/compose";
import withHandlers from "recompose/withHandlers";
import withPropsOnChange from "recompose/withPropsOnChange";

import isMobile from "./utils/isMobile";
import wordList from "./wordList.json";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Mistakes from "./components/Mistakes";
import Settings from "./components/Settings";
import HighScores from "./components/HighScores";
import WordHandler from "./components/WordHandler";
import createWordState from "./utils/createWordState";
import MobileApologies from "./components/MobileApologies";
import ScreenContainer from "./components/ScreenContainer";

const getRandomIndex = wordLength =>
  parseInt(Math.random() * wordList[wordLength].length);

const getRandomWord = wordLength =>
  wordList[wordLength][getRandomIndex(wordLength)];

const getNewWordState = wordLength =>
  createWordState(getRandomWord(wordLength));

const marginLeftStyle = {
  marginLeft: "auto"
};

const App = ({
  getNewWord,
  goToSettings,
  highScores,
  setHighScores,
  showSettings,
  showMistakes,
  goToMistakes,
  setSettings,
  settings,
  mistakes,
  setMistakes,
  wordState,
  closeMistakes,
  closeSettings,
  setWordState,
  timers,
  setTimers,
  showInstructions
}) => {
  return (
    <ScreenContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 17,
          paddingTop: 10,
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <HighScores highScores={highScores} setHighScores={setHighScores} />
        <div style={{ fontSize: 40 }}>
          {showSettings ? "Settings" : showMistakes ? "Mistakes" : null}
        </div>
        <div
          style={{
            display: "flex",
            width: 400,
            paddingRight: 20
          }}
        >
          {!showMistakes && !showSettings ? (
            <React.Fragment>
              <Button onClick={goToSettings} style={marginLeftStyle}>
                Show settings
              </Button>
              <Button onClick={goToMistakes}>Show mistakes</Button>
            </React.Fragment>
          ) : (
            <Button
              onClick={showSettings ? closeSettings : closeMistakes}
              style={marginLeftStyle}
            >
              Close
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
      <Footer
        timers={timers}
        setTimers={setTimers}
        hasHighScore={Boolean(Object.keys(highScores).length)}
        showInstructions={showInstructions}
      />
    </ScreenContainer>
  );
};

const initialWordState = ({ settings }) => getNewWordState(settings.wordLength);

const goToMistakes = ({ setShowMistakes, showMistakes, settings }) => () => {
  setShowMistakes(!showMistakes);
  getNewWord(settings.wordLength);
};

const goToSettings = ({ setShowSettings, showSettings, settings }) => () => {
  setShowSettings(!showSettings);
  getNewWord(settings.wordLength);
};

const getNewWord = ({
  settings,
  setWordState,
  setTimers
}) => customWordLength => {
  setWordState(getNewWordState(customWordLength || settings.wordLength));
  setTimers({ start: false, end: false });
};

const closeSettings = ({ setShowSettings, getNewWord, settings }) => () => {
  setShowSettings(false);
  getNewWord(settings.wordLength);
};

const closeMistakes = ({ setShowMistakes, getNewWord, settings }) => () => {
  setShowMistakes(false);
  getNewWord(settings.wordLength);
};

const showInstructions = ({ showMistakes, showSettings }) => ({
  showInstructions: !showMistakes && !showSettings
});

export default compose(
  branch(isMobile, renderComponent(MobileApologies)), //Only done on first render out of laziness for now
  withState("settings", "setSettings", {
    wordLength: "10"
  }),
  withState("showSettings", "setShowSettings", false),
  withState("showMistakes", "setShowMistakes", false),
  withState("timers", "setTimers", { start: false, end: false }),
  withState("wordState", "setWordState", initialWordState),
  withState("mistakes", "setMistakes", {}),
  withState("highScores", "setHighScores", {}),
  withHandlers({
    getNewWord
  }),
  withHandlers({
    goToMistakes,
    goToSettings,
    closeSettings,
    closeMistakes
  }),
  withPropsOnChange(["showMistakes", "showSettings"], showInstructions)
)(App);
