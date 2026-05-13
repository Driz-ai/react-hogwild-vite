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
  const [hidden, setHidden] = useState([]);

  function hideHog(name) {
    setHidden([...hidden, name]);
  }

  function addHog(hog) {
    setHogs([...hogs, hog]);
  }

  let visibleHogs = hogs
    .filter(h => !hidden.includes(h.name))
    .filter(h => (showGreasedOnly ? h.greased : true))
    .sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : a.weight - b.weight
    );

  return (
    <div>
      <Nav
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <HogForm onAddHog={addHog} />

      <HogContainer hogs={visibleHogs} onHideHog={hideHog} />
    </div>
  );
}

export default App;