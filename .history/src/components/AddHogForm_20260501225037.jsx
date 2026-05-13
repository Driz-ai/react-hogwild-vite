<form onSubmit={handleSubmit}>
  <label htmlFor="name">Name</label>
  <input id="name" value={name} onChange={e => setName(e.target.value)} />

  <label htmlFor="specialty">Specialty</label>
  <input id="specialty" value={specialty} onChange={...} />

  <label htmlFor="weight">Weight</label>
  <input id="weight" type="number" onChange={...} />

  <label htmlFor="greased">Greased</label>
  <input id="greased" type="checkbox" onChange={...} />

  <label htmlFor="medal">Highest Medal</label>
  <input id="medal" onChange={...} />

  <button type="submit">Add Hog</button>
</form>