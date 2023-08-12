import "./Header.css";

function Header({ currentScore, highScore }) {
  return (
    <header>
      <h1>Memory Game</h1>
      <p>
        Click on color to earn points, but don&apos;t click on any more than
        once!
      </p>
      <div className="scores">
        <span className="current-score">Current Score: {currentScore}</span>
        <span className="high-score">High Score: {highScore}</span>
      </div>
    </header>
  );
}

export default Header;
