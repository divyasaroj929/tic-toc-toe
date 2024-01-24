import React from "react";
import GameState from "../data";

const GameOver = ({ gameState }) => {
  console.log(gameState);
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.PlayerOWins:
      return <div className="game-over"> O-Win</div>;
    case GameState.PlayerXWins:
      return <div className="game-over"> X-Win</div>;
    case GameState.draw:
      return <div className="game-over"> Draw</div>;
    default:
      return <></>;
  }
};

export default GameOver;
