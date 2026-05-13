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
import Nav from "./HogGrid";
import HogGrid from "./HogGrid";
import FilterSortBar from "./FilterSortBar";
import NewHogForm from "./NewHogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hidden, setHidden] = useState([]);

  const handleHide = (name) => {
    setHidden([...hidden, name]);
  };

  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const processedHogs = hogs
    .filter((hog) => !hidden.includes(hog.name))
    .filter((hog) => (greasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div>
      <Nav />

      <FilterSortBar
        greasedOnly={greasedOnly}
        setGreasedOnly={setGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <NewHogForm addHog={handleAddHog} />

      <div className="ui grid container">
        <HogGrid hogs={processedHogs} onHide={handleHide} />
      </div>
    </div>
  );
}

export default App;