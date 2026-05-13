
import { useState } from "react";

function HogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(formData);
  };

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <label htmlFor="weight">Weight:</label>
      <input
        id="weight"
        type="number"
        value={formData.weight}
        onChange={(e) =>
          setFormData({ ...formData, weight: Number(e.target.value) })
        }
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        id="specialty"
        value={formData.specialty}
        onChange={(e) =>
          setFormData({ ...formData, specialty: e.target.value })
        }
      />

      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        type="checkbox"
        checked={formData.greased}
        onChange={() =>
          setFormData({ ...formData, greased: !formData.greased })
        }
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;