import React from "react";

function HogCard({ hog, expanded, onExpand, onHide }) {
  return (
    <div
      aria-label="hog card"
      className="ui eight wide column card"
      onClick={onExpand}
    >
      <div className="image">
        <img src={hog.image} alt={`Photo of ${hog.name}`} />
      </div>

      <div className="content">
        <h3>{hog.name}</h3>

        {expanded && (
          <>
            <p>Specialty: {hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog["highest medal achieved"]}</p>
          </>
        )}
      </div>

      <button onClick={(e) => { e.stopPropagation(); onHide(); }}>
        Hide Me
      </button>
    </div>
  );
}

export default HogCard;