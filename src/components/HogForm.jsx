import React, { useState } from "react";

const HogForm = ({ onAddHog }) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const newHog = {
      name,
      weight: Number(weight),
      specialty,
      greased,
      image: "https://via.placeholder.com/150",
      "highest medal achieved": "bronze",
    };

    onAddHog(newHog);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Weight:
        <input onChange={(e) => setWeight(e.target.value)} />
      </label>

      <label>
        Specialty:
        <input onChange={(e) => setSpecialty(e.target.value)} />
      </label>

      <label>
        Greased?
        <input
          type="checkbox"
          onChange={() => setGreased((prev) => !prev)}
        />
      </label>

      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;