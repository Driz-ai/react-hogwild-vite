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

// import React, { useState } from "react";
// import Nav from "./Nav";
// import HogCard from "./HogCard";
// import AddHogForm from "./AddHogForm";
// import hogs from "../porkers_data";





export default function App() {
  const [hogsList, setHogsList] = useState(hogs);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hidden, setHidden] = useState([]);

  function hideHog(name) {
    setHidden((prev) => [...prev, name]);
  }

  function addHog(newHog) {
    setHogsList((prev) => [...prev, newHog]);
  }

  const displayed = hogsList
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

      <label htmlFor="greased">
        Greased Pigs Only?
        <input
          id="greased"
          type="checkbox"
          onChange={() => setGreasedOnly(!greasedOnly)}
        />
      </label>

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

      <AddHogForm onAdd={addHog} />

      <div className="ui grid container">
        {displayed.map((hog) => (
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