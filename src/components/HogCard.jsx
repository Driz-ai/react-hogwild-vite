import React, { useState } from "react";

const HogCard = ({ hog, onHide }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={() => setShowDetails((prev) => !prev)}
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

      <button onClick={(e) => {
        e.stopPropagation();   // IMPORTANT
        onHide(hog.name);
      }}>
        Hide Me
      </button>
    </div>
  );
};

export default HogCard;



