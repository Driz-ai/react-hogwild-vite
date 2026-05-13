import { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddHog({
      ...formData,
      weight: parseFloat(formData.weight),
      image: "https://via.placeholder.com/150",
      "highest medal achieved": "none",
    });

    setFormData({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input name="weight" value={formData.weight} onChange={handleChange} />

      <label htmlFor="specialty">Specialty:</label>
      <input
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
      />

      <label htmlFor="greased">Greased?</label>
      <input
        type="checkbox"
        name="greased"
        checked={formData.greased}
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

HogForm;