function FilterSortBar({
  greasedOnly,
  setGreasedOnly,
  sortBy,
  setSortBy,
}) {
  return (
    <div>

      {/* FILTER */}
      <label htmlFor="greased-filter">
        Greased Pigs Only?
      </label>
      <input
        id="greased-filter"
        type="checkbox"
        checked={greasedOnly}
        onChange={() => setGreasedOnly(!greasedOnly)}
      />

      {/* SORT */}
      <label htmlFor="sort-by">
        Sort by:
      </label>
      <select
        id="sort-by"
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