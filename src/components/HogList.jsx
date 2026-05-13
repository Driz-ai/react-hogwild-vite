import React from "react";
import HogCard from "./HogCard";

const HogList = ({ hogs, onHide }) => {
  return (
    <div>
      {hogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} onHide={onHide} />
      ))}
    </div>
  );
};

export default HogList;