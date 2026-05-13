// import React, { useState } from "react";
// import Nav from "./components/Nav";
// import hogsData from "../porkers_data";
// import HogList from "./components/HogList";
// import Controls from "./components/Controls";
// import HogForm from "./components/HogForm";


import React, { useState } from "react";
import Nav from "./components/Nav";
import hogsData from "./porkers_data";
import HogList from "./components/HogList";
import Controls from "./components/Controls";
import HogForm from "./components/HogForm";








function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function handleHide(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  const filteredHogs = hogs
    .filter((hog) => (greasedOnly ? hog.greased : true))
    .filter((hog) => !hiddenHogs.includes(hog.name));

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "weight") return a.weight - b.weight;
    return 0;
  });

  return (
    <div className="App">
      <Nav />

      <Controls
        greasedOnly={greasedOnly}
        setGreasedOnly={setGreasedOnly}
        setSortBy={setSortBy}
      />

      <HogForm onAddHog={handleAddHog} />

      <HogList hogs={sortedHogs} onHide={handleHide} />
    </div>
  );
}

export default App;