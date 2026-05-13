import React from "react";

function HogCard({ hog }) {
  return (
    <div aria-label="hog card" className="ui card">
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={`Photo of ${hog.name}`} />
    </div>
  );
}

export default HogCard;