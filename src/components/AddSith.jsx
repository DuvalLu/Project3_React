import { useState } from "react";

function AddSith({ roster, addSith }) {
  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    if (selected === "") return;
    addSith(Number(selected));
    setSelected("");
  };

  return (
    <div>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Enter villain to vanquish for a surprise...</option>
        {roster.map((oneSith) => (
          <option key={oneSith.id} value={oneSith.id}>
            {oneSith.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddSith;
