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
import HogContainer from "./HogContainer";
import hogData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogData);

  return (
    <div className="App">
      <Nav />
      <HogContainer hogs={hogs} />
    </div>
  );
}

export default App;