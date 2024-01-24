import React from "react";

const Tile = ({ className, values, onClick, playerTurn }) => {
  let hoverClass = null;
  if (values == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <>
      <div className={`tile ${className} ${hoverClass}`} onClick={onClick}>
        {values}
      </div>
    </>
  );
};

export default Tile;
