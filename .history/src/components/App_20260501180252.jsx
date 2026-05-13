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

import React from "react";

import Nav from "./Nav";
import HogCard from "./HogCard";
import AddHogForm from "./AddHogForm";
import hogs from "../porkers_data";

export default function App() {
  console.log("Nav:", Nav);
  console.log("HogCard:", HogCard);
  console.log("AddHogForm:", AddHogForm);
  console.log("hogs:", hogs);

  return <div>TEST</div>;
}