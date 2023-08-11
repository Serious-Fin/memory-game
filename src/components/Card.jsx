import "./Card.css";
import { useState, useEffect } from "react";

function Card({ color, clickedColors, setClickedColors }) {
  function handleClick() {
    if (clickedColors.has(color)) {
      console.log("You lose!");
      setClickedColors(new Set());
      return;
    } else {
      console.log(`You clicked ${color}!`);
    }

    const newClickedColors = new Set(clickedColors);
    newClickedColors.add(color);
    setClickedColors(newClickedColors);
  }

  useEffect(() => {}, [color]);

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default Card;
