import React, { useState } from "react";

function AddHogForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      ...formData,
      weight: Number(formData.weight),
      image: "https://via.placeholder.com/200",
    });

    setFormData({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
    });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input id="weight" name="weight" value={formData.weight} onChange={handleChange} />

      <label htmlFor="specialty">Specialty:</label>
      <input id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} />

      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        name="greased"
        type="checkbox"
        checked={formData.greased}
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;