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

import { useState } from "react";
import hogData from "../porkers_data";
import Nav from "./Nav";
import HogList from "./HogList";
import HogForm from "./HogForm";

function App() {
  const [hogs, setHogs] = useState(hogData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function handleHideHog(name) {
    setHiddenHogs((prev) => [...prev, name]);
  }

  function handleAddHog(newHog) {
    setHogs((prev) => [...prev, newHog]);
  }

  let displayedHogs = [...hogs];

  // filter
  if (greasedOnly) {
    displayedHogs = displayedHogs.filter((hog) => hog.greased);
  }

  // hide
  displayedHogs = displayedHogs.filter(
    (hog) => !hiddenHogs.includes(hog.name)
  );

  // sort
  if (sortBy === "name") {
    displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    displayedHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div>
      <Nav />

      {/* FILTER */}
      <label htmlFor="greased">Greased Pigs Only?</label>
      <input
        id="greased"
        type="checkbox"
        checked={greasedOnly}
        onChange={(e) => setGreasedOnly(e.target.checked)}
      />

      {/* SORT */}
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>

      {/* FORM */}
      <HogForm onAddHog={handleAddHog} />

      {/* LIST */}
      <HogList hogs={displayedHogs} onHideHog={handleHideHog} />
    </div>
  );
}

export default App;