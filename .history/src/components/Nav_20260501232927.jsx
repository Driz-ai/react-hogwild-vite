export default function Nav({ showGreasedOnly, setShowGreasedOnly, sortBy, setSortBy }) {
  return (
    <div>
      <label htmlFor="greased">Greased Pigs Only?</label>
      <input
        id="greased"
        type="checkbox"
        checked={showGreasedOnly}
        onChange={(e) => setShowGreasedOnly(e.target.checked)}
      />

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

 




