import "./Card.css";
import { useState, useEffect } from "react";

function Card({ color, clickedColors, setClickedColors, score, setScore }) {
  function handleClick() {
    if (clickedColors.has(color)) {
      setClickedColors(new Set());
      setScore(0);
      console.log(`You lose! Score reset to 0`);
      return;
    } else {
      console.log(`You clicked ${color}!`);
      console.log(`Your score is ${score + 1}!`);
      setScore(score + 1);
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
