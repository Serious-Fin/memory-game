import "./Card.css";
import { useState, useEffect } from "react";

function Card({ color }) {
  const [isClicked, setIsClicked] = useState(false);
  const [cardColor, setCardColor] = useState(color);

  function handleClick() {
    setIsClicked(true);
    setCardColor("#b8b8b8");
    console.log("clicked");
  }

  useEffect(() => {}, [cardColor]);

  return (
    <div
      className={`card ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
      style={{ backgroundColor: cardColor }}
    ></div>
  );
}

export default Card;
