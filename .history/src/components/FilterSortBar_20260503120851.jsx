// src/components/FilterSortControls.jsx
import React from "react";

function FilterSortControls({ greasedOnly, setGreasedOnly, sortBy, setSortBy }) {
  return (
    <div>

      <label htmlFor="greased">Greased Pigs Only?</label>
      <input
        id="greased"
        type="checkbox"
        checked={greasedOnly}
        onChange={() => setGreasedOnly(!greasedOnly)}
      />

      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name">name</option>
        <option value="weight">weight</option>
      </select>

    </div>
  );
}

export default FilterSortControls;