import React from "react";
import PropTypes from "prop-types";

const DungeonWalls = ({ walls }) => {
  return (
    <div className="dungeon-walls">
      {walls[0][0] && (
        <div className="wall wall__back wall__back--leftmost"></div>
      )}
      {walls[0][1] && <div className="wall wall__back wall__back--left"></div>}
      {walls[0][2] && <div className="wall wall__back wall__back--mid"></div>}
      {walls[0][3] && <div className="wall wall__back wall__back--right"></div>}
      {walls[0][4] && (
        <div className="wall wall__back wall__back--rightmost"></div>
      )}
      {walls[1][1] && <div className="wall wall__mid wall__mid--left"></div>}
      {walls[1][2] && <div className="wall wall__mid wall__mid--center"></div>}
      {walls[1][3] && <div className="wall wall__mid wall__mid--right"></div>}
      {walls[2][1] && (
        <div className="wall wall__front wall__front--left"></div>
      )}
      {walls[2][3] && (
        <div className="wall wall__front wall__front--right"></div>
      )}
    </div>
  );
};

DungeonWalls.propTypes = {
  walls: PropTypes.array.isRequired
};
export default DungeonWalls;
