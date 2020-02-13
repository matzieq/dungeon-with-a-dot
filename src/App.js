import React from "react";
import DungeonWalls from "./components/DungeonWalls";
import "./App.scss";

const App = () => {
  const walls = [
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 1, 0]
  ];
  return (
    <div className="game">
      <DungeonWalls walls={walls} />
      <p style={{ fontSize: "6vh" }}>Something</p>
    </div>
  );
};

export default App;
