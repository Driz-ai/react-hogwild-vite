import React from "react";
import HogCard from "./HogCard";

function HogContainer({ hogs }) {
  return (
    <div>
      {hogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default HogContainer;