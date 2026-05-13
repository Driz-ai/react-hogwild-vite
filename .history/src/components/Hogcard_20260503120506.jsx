import { useState } from "react";

function HogCard({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      aria-label="hog card"
      className="ui eight wide column card"
      onClick={() => setShowDetails(!showDetails)}
    >
      <h3>{hog.name}</h3>

      <img
        src={hog.image}
        alt={`Photo of ${hog.name}`}
      />

      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>{hog["highest medal achieved"]}</p>
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          hideHog(hog.name);
        }}
      >
        Hide Me
      </button>
    </div>
  );
}

export default HogCard;

