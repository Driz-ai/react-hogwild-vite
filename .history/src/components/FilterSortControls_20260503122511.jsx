import { useState } from "react";

function HogForm({ addHog }) {
  const [form, setForm] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
    "highest medal achieved": ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(form);
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <label htmlFor="weight">Weight:</label>
      <input
        id="weight"
        type="number"
        value={form.weight}
        onChange={(e) => setForm({ ...form, weight: Number(e.target.value) })}
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        id="specialty"
        value={form.specialty}
        onChange={(e) => setForm({ ...form, specialty: e.target.value })}
      />

      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        type="checkbox"
        checked={form.greased}
        onChange={() => setForm({ ...form, greased: !form.greased })}
      />

      <label htmlFor="medal">Highest Medal Achieved:</label>
      <input
        id="medal"
        value={form["highest medal achieved"]}
        onChange={(e) =>
          setForm({ ...form, "highest medal achieved": e.target.value })
        }
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;