import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ value, isFlipped, onClick }) {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-inner">{isFlipped ? "" : "Click to flip"}</div>
    </div>
  );
}

Card.PropTypes = {
  value: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
