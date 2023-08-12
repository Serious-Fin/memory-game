import "./Card.css";

function Card({ color, handleClick }) {
  function handleCardClick() {
    handleClick(color);
  }

  return (
    <div
      className="card"
      onClick={handleCardClick}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default Card;
