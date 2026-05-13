import React from "react";

function Nav({ showGreasedOnly, setShowGreasedOnly, sortBy, setSortBy }) {
  return (
    <div className="ui menu">
      <div className="item">
        <div className="ui checkbox">
          <input
            type="checkbox"
            id="greasedFilter"
            checked={showGreasedOnly}
            onChange={(e) => setShowGreasedOnly(e.target.checked)}
          />
          <label htmlFor="greasedFilter">Greased Only</label>
        </div>
      </div>

      <div className="item">
        <label htmlFor="sort">Sort By: </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default Nav;




