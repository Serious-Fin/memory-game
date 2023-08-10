import "./board.css";
import Card from "./Card.jsx";
import React from "react";

function Board() {
  const cards = [];

  for (let i = 0; i < 25; i++) {
    cards.push(<Card key={i} />);
  }

  return <div className="board">{cards}</div>;
}

export default Board;
