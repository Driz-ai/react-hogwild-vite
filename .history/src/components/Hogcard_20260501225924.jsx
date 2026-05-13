import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div aria-label="hog card" className="ui card">
      <div onClick={() => setShowDetails(!showDetails)}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3>{hog.name}</h3>
        </div>
      </div>

      {showDetails && (
        <div className="extra content">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}

      <div className="extra content">
        <button
          className="ui button"
          onClick={() => onHideHog(hog.name)}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;