import React from "react";
import Tile from "./Tile";
import Strick from "./Strick";
const TicTocToe = ({ tile, onTileClick, playerTurn, strikeClass }) => {
  return (
    <>
      <div className="container">
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(0)}
          values={tile[0]}
          // className={"right-border bottom-border"}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(1)}
          values={tile[1]}
          // className={"right-border bottom-border"}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(2)}
          values={tile[2]}
          // className={"bottom-border"}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(3)}
          values={tile[3]}
          // className={"right-border bottom-border"}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(4)}
          values={tile[4]}
          // className={"right-border bottom-border"}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(5)}
          values={tile[5]}
          // className={"bottom-border"}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(6)}
          values={tile[6]}
          // className={"right-border"}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(7)}
          values={tile[7]}
          // className={"right-border"}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(8)}
          values={tile[8]}
        />
        <Strick strikeClass={strikeClass} />
      </div>
    </>
  );
};

export default TicTocToe;
