import { useState, useEffect } from "react";
import TicTocToe from "./component/TicTocToe";
import GameState from "./data";
import "./App.css";
import GameOver from "./component/GameOver";
import Reset from "./component/Reset";

const Player_X = "x";
const Player_0 = "0";

const winingCombo = [
  // row side
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  // column
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  // diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1 " },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

const checkWinner = (tile, setStrikeClass, setGameState) => {
  for (const { combo, strikeClass } of winingCombo) {
    const tileValue1 = tile[combo[0]];
    const tileValue2 = tile[combo[1]];
    const tileValue3 = tile[combo[2]];
    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === Player_X) {
        setGameState(GameState.PlayerXWins);
      } else {
        setGameState(GameState.PlayerOWins);
      }
      return;
    }
  }
  const areAllTilesfiledIn = tile.every((tile) => tile !== null);

  if (areAllTilesfiledIn) {
    setGameState(GameState.draw);
  }
};

function App() {
  const [tile, setTile] = useState(Array(9).fill(null));

  const [playerTurn, setPlayerTurn] = useState(Player_X);

  const [strikeClass, setStrikeClass] = useState();

  const [gameState, setGameState] = useState(GameState.inProgress);

  useEffect(() => {
    checkWinner(tile, setStrikeClass, setGameState);
  }, [tile]);

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tile[index] != null) {
      return;
    }
    console.log(index);

    const newTiles = [...tile];
    console.log(newTiles);

    newTiles[index] = playerTurn;
    console.log(newTiles);

    setTile(newTiles);

    if (playerTurn === Player_X) {
      setPlayerTurn(Player_0);
    } else {
      setPlayerTurn(Player_X);
    }
  };
  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTile(Array(9).fill(null));
    setPlayerTurn(Player_X);
    setStrikeClass(null);
    console.log("reset");
  };

  return (
    <>
      <div className="Home-container">
        <h1 className="title">TicTocToe</h1>
        <TicTocToe
          playerTurn={playerTurn}
          onTileClick={handleTileClick}
          tile={tile}
          strikeClass={strikeClass}
        />
        <GameOver gameState={gameState} />
        <Reset gameState={gameState} onReset={handleReset} />
      </div>
    </>
  );
}

export default App;
