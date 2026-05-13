import React, { useState } from "react";

export default function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleToggleDetails() {
    setShowDetails(!showDetails);
  }

  function handleHideClick(e) {
    e.stopPropagation();
    onHide();
  }

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={handleToggleDetails}
    >
      {/* IMAGE */}
      <img
        src={hog.image}
        alt={`Photo of ${hog.name}`}
      />

      {/* NAME (REQUIRED h3) */}
      <h3>{hog.name}</h3>

      {/* CONDITIONAL DETAILS */}
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>{hog["highest medal achieved"]}</p>
        </div>
      )}

      {/* HIDE BUTTON */}
      <button onClick={handleHideClick}>
        Hide Me
      </button>
    </div>
  );
}