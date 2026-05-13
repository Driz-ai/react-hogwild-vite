import { useState } from "react";

function HogForm({ onAddHog }) {
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

    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="weight">Weight:</label>
      <input
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        id="specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />

      <label htmlFor="greased-form">Greased?</label>
      <input
        id="greased-form"
        type="checkbox"
        checked={greased}
        onChange={(e) => setGreased(e.target.checked)}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;