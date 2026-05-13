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
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import HogForm from "./HogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function handleHideHog(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  let displayedHogs = hogs
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .filter((hog) => (showGreasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.weight - b.weight;
      }
    });

  return (
    <div>
      <Nav
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <HogForm onAddHog={handleAddHog} />

      <HogContainer hogs={displayedHogs} onHideHog={handleHideHog} />
    </div>
  );
}

export default App;