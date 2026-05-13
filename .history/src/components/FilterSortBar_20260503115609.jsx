function FilterSortBar({
  greasedOnly,
  setGreasedOnly,
  sortBy,
  setSortBy,
}) {
  return (
    <div>
      {/* FILTER */}
      <label htmlFor="greased">
        Greased Pigs Only?
      </label>
      <input
        id="greased"
        type="checkbox"
        checked={greasedOnly}
        onChange={() => setGreasedOnly(!greasedOnly)}
      />

      {/* SORT */}
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default FilterSortBar;