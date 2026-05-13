import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      aria-label="hog card"
      className="ui eight wide column card"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="image">
        <img src={hog.image} alt={`Photo of ${hog.name}`} />
      </div>

      <div className="content">
        <h3>{hog.name}</h3>

        {showDetails && (
          <>
            <p>Specialty: {hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog["highest medal achieved"]}</p>
          </>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onHide();
        }}
      >
        Hide Me
      </button>
    </div>
  );
}

export default HogCard;