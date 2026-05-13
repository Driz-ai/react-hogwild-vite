

function HogForm({ onAddHog }) {
  const [form, setForm] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
import { useState } from "react";
    onAddHog({
      ...form,
      weight: Number(form.weight),
      image: "https://via.placeholder.com/150",
      "highest medal achieved": "none",
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name:</label>
      <input name="name" value={form.name} onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input name="weight" value={form.weight} onChange={handleChange} />

      <label htmlFor="specialty">Specialty:</label>
      <input name="specialty" value={form.specialty} onChange={handleChange} />

      <label htmlFor="greased">Greased?</label>
      <input
        type="checkbox"
        name="greased"
        checked={form.greased}
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;