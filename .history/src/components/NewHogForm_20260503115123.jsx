

import { useState } from "react";

function NewHogForm({ addHog }) {
  const [form, setForm] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input name="name" id="name" onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input name="weight" id="weight" onChange={handleChange} />

      <label htmlFor="specialty">Specialty:</label>
      <input name="specialty" id="specialty" onChange={handleChange} />

      <label htmlFor="greased">Greased?</label>
      <input
        type="checkbox"
        id="greased"
        name="greased"
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default NewHogForm;