import React from "react";
import "./Background.css";

const Background = () => {
  // DRY-method (cool)
  const circles = Array.from({ length: 4 });

  return (
    <div className="background-container">
      {circles.map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
};

export default Background;
