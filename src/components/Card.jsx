import React from "react";
import "./Card.css";
import { useState } from "react";

function Card() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
    console.log("clicked");
  }

  return (
    <div
      className={`card ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    ></div>
  );
}

export default Card;
