import React from "react";

const Controls = ({ greasedOnly, setGreasedOnly, setSortBy }) => {
  return (
    <div>
      <label htmlFor="greased">
        Greased Pigs Only?
        <input
          id="greased"
          type="checkbox"
          checked={greasedOnly}
          onChange={() => setGreasedOnly((prev) => !prev)}
        />
      </label>

      <label htmlFor="sort">
        Sort by:
        <select id="sort" onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
};

export default Controls;