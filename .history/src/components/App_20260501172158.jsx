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
import hogData from "../porkers_data";
import HogCard from "./HogCard";

function App() {
  const [hogs, setHogs] = useState(hogData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hidden, setHidden] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const handleToggleGreased = () => {
    setGreasedOnly(!greasedOnly);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleHide = (name) => {
    setHidden([...hidden, name]);
  };

  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const filteredHogs = hogs
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

      {/* FILTER + SORT */}
      <div style={{ margin: "1rem" }}>
        <label htmlFor="greased">
          Greased Pigs Only?
          <input
            id="greased"
            type="checkbox"
            onChange={handleToggleGreased}
          />
        </label>

        <br />

        <label htmlFor="sort">
          Sort by:
          <select id="sort" value={sortBy} onChange={handleSort}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>

      {/* HOG LIST */}
      <div className="ui grid container">
        {filteredHogs.map((hog) => (
          <HogCard
            key={hog.name}
            hog={hog}
            expanded={expanded === hog.name}
            onExpand={() =>
              setExpanded(expanded === hog.name ? null : hog.name)
            }
            onHide={() => handleHide(hog.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
