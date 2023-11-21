import React, { useState } from "react";
import Star from "./components/Star";
import "./App.css";

function App() {
  const [stars] = useState([1, 2, 3, 4, 5]);
  const [hoveredRating, setHoveredRating] = useState(-1);
  const [rating, setRating] = useState(-1);

  const handlMouseEnter = index => {
    setHoveredRating(index);
  };

  const handleMouseLeave = index => {
    setHoveredRating(rating);
  };

  const setMouseRating = index => {
    setRating(index);
  };

  return (
    <div className="App">
      <h1>Add a Rating</h1>
      <div className="stars">
        {stars.map((item, index) => {
          return (
            <Star
              key={index}
              index={index}
              hoveredRating={hoveredRating}
              handlMouseEnter={handlMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handlemouse={setMouseRating}
            />
          );
        })}
        <p>Rating: {rating + 1}</p>
      </div>
    </div>
  );
}

export default App;
