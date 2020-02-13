import React, { useState } from "react";
import DungeonWalls from "./components/DungeonWalls";
import Menu from "./components/Menu";
import "./App.scss";

const App = () => {
  const walls = [
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 1, 0]
  ];

  const [gameState, setGameState] = useState("Menu");
  const componentToRender = () => {
    switch (gameState) {
      case "Menu":
        return <Menu />;
      case "Game":
        return <DungeonWalls walls={walls} />;
      default:
        return null;
    }
  };
  return <div className="game">{componentToRender()}</div>;
};

export default App;
