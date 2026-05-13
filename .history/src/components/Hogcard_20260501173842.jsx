import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [show, setShow] = useState(false);

  return (
    <div
      aria-label="hog card"
      className="ui eight wide column card"
      onClick={() => setShow(!show)}
    >
      <img src={hog.image} alt={`Photo of ${hog.name}`} />

      <h3>{hog.name}</h3>

      {show && (
        <>
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>{hog["highest medal achieved"]}</p>
        </>
      )}

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