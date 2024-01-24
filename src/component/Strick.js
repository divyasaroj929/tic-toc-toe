import React from "react";

const Strick = ({ strikeClass }) => {
  console.log(strikeClass);
  return (
    <>
      <div className={`strike ${strikeClass}`}></div>
    </>
  );
};

export default Strick;
