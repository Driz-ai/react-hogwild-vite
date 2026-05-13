// import React from "react";
// import Nav from "./Nav";

// import hogs from "../porkers_data";

// function App() {
// 	return (
// 		<div className="App">
// 			<Nav />
// 		</div>
// 	);
// }

// export default App;


import React, { useState } from "react";
import Nav from "./Nav";
import hogsData from "../porkers_data";
import HogCard from "./HogCard";
import AddHogForm from "./AddHogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hidden, setHidden] = useState([]);

  const handleHide = (name) => {
    setHidden([...hidden, name]);
  };

  const handleAddHog = (hog) => {
    setHogs([...hogs, hog]);
  };

  const displayedHogs = hogs
    .filter((hog) => !hidden.includes(hog.name))
    .filter((hog) => (greasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />

      {/* FILTER + SORT CONTROLS */}
      <div style={{ margin: "10px" }}>
        <label htmlFor="greased">
          Greased Pigs Only?
          <input
            id="greased"
            type="checkbox"
            onChange={() => setGreasedOnly(!greasedOnly)}
          />
        </label>

        <br />

        <label htmlFor="sort">
          Sort by:
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">name</option>
            <option value="weight">weight</option>
          </select>
        </label>
      </div>

      {/* ADD FORM */}
      <AddHogForm onAdd={handleAddHog} />

      {/* HOG GRID */}
      <div className="ui grid container">
        {displayedHogs.map((hog) => (
          <HogCard
            key={hog.name}
            hog={hog}
            onHide={() => handleHide(hog.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
