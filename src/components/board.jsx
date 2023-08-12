import "./board.css";
import Card from "./Card.jsx";
import { useState } from "react";
import Header from "./Header.jsx";

const colors = [
  "#FF5733",
  "#C70039",
  "#900C3F",
  "#FFC300",
  "#DAF7A6",
  "#00CC99",
  "#8E44AD",
  "#3498DB",
  "#2ECC71",
  "#F39C12",
  "#16A085",
  "#E74C3C",
  "#9B59B6",
  "#2980B9",
  "#27AE60",
  "#E67E22",
  "#1ABC9C",
  "#D35400",
  "#2C3E50",
  "#3498DB",
  "#27AE60",
  "#FF5733",
  "#1ABC9C",
];

function Board() {
  const cards = [];

  const [clickedColors, setClickedColors] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleCardClick(color) {
    if (clickedColors.has(color)) {
      setClickedColors(new Set());
      setCurrentScore(0);
      return;
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
    }

    const newClickedColors = new Set(clickedColors);
    newClickedColors.add(color);
    setClickedColors(newClickedColors);
  }

  for (let i = 0; i < 25; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    cards.push(<Card key={i} color={color} handleClick={handleCardClick} />);
  }

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <div className="board">{cards}</div>
    </>
  );
}

export default Board;
