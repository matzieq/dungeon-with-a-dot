import React from "react";
import DungeonWalls from "./components/DungeonWalls";
import "./App.scss";

const App = () => {
  const walls = [
    [1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0]
  ];
  return (
    <div className="game">
      <DungeonWalls walls={walls} />
    </div>
  );
};

export default App;
