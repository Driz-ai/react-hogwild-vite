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
import HogCard from "./HogCard";
import AddHogForm from "./AddHogForm";
import hogsData from "../porkers_data";

export default function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hidden, setHidden] = useState([]);

  function hideHog(name) {
    setHidden([...hidden, name]);
  }

  function addHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  const visibleHogs = hogs
    .filter((h) => !hidden.includes(h.name))
    .filter((h) => (greasedOnly ? h.greased : true))
    .sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : a.weight - b.weight
    );

  return (
    <div className="App">
      <Nav />

      {/* FILTER */}
      <label htmlFor="greased">
        Greased Pigs Only?
        <input
          id="greased"
          type="checkbox"
          onChange={() => setGreasedOnly(!greasedOnly)}
        />
      </label>

      {/* SORT */}
      <label htmlFor="sort">
        Sort by:
        <select
          id="sort"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">name</option>
          <option value="weight">weight</option>
        </select>
      </label>

      {/* FORM */}
      <AddHogForm onAdd={addHog} />

      {/* GRID */}
      <div className="ui grid container">
        {visibleHogs.map((hog) => (
          <HogCard
            key={hog.name}
            hog={hog}
            onHide={() => hideHog(hog.name)}
          />
        ))}
      </div>
    </div>
  );
}