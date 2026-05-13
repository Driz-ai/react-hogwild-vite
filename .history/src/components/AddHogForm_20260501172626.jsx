import React, { useState } from "react";

function AddHogForm({ onAdd }) {
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
    onAdd({
      ...form,
      weight: Number(form.weight),
      image: "https://via.placeholder.com/150",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input id="weight" name="weight" onChange={handleChange} />

      <label htmlFor="specialty">Specialty:</label>
      <input id="specialty" name="specialty" onChange={handleChange} />

      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        name="greased"
        type="checkbox"
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;