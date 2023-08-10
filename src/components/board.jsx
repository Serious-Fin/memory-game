import "./board.css";
import Card from "./Card.jsx";
import React from "react";

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

  for (let i = 0; i < 25; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    cards.push(<Card key={i} color={color} />);
  }

  return <div className="board">{cards}</div>;
}

export default Board;
