import React from "react";

function Star({
  index,
  handlMouseEnter,
  hoveredRating,
  handleMouseLeave,
  handlemouse
}) {
  const isSelected = hoveredRating >= index;
  return (
    <span
      onMouseDown={() => handlemouse(index)}
      onMouseEnter={() => handlMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      style={{ color: isSelected && "gold" }}
      className="fa fa-lg fa-star checked"
    ></span>
  );
}

export default Star;
