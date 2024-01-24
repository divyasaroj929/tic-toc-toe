import React from "react";
import GameState from "../data";

const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <div className="reset-button" onClick={onReset}>
      Reset
    </div>
  );
};

export default Reset;
