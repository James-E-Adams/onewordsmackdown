import React from "react";
import "./styles.css";

const ScreenContainer = ({ children }) => (
  <div className="App">
    <div className="App-root">{children} </div>
  </div>
);

export default ScreenContainer;
