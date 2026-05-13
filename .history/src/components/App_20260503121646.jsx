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
import hogsData from "../porkers_data";

import Nav from "./Nav.jsx";
import HogList from "./HogList.jsx";
import FilterSortControls from "./FilterSortControls.jsx";
import HogForm from "./HogForm.jsx";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hidden, setHidden] = useState([]);

  const addHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const hideHog = (name) => {
    setHidden([...hidden, name]);
  };

  const visibleHogs = hogs
    .filter((hog) => !hidden.includes(hog.name))
    .filter((hog) => (greasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.weight - b.weight;
    });

  return (
    <div>
      <Nav />

      <FilterSortControls
        greasedOnly={greasedOnly}
        setGreasedOnly={setGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <HogForm addHog={addHog} />

      <HogList hogs={visibleHogs} hideHog={hideHog} />
    </div>
  );
}

export default App;