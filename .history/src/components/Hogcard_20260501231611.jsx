import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div aria-label="hog card" className="ui card">
      <div onClick={() => setShowDetails(!showDetails)}>
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} />
      </div>

      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}

      <button onClick={() => onHideHog(hog.name)}>
        Hide Me
      </button>
    </div>
  );
}

export default HogCard;