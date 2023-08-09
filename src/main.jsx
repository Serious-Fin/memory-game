import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Card from "./components/Card.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card
      value={"17"}
      isFlipped={false}
      onClick={() => console.log("flipped")}
    />
  </React.StrictMode>
);
