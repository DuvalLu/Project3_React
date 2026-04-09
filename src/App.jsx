import { useState } from "react";
import "./App.css";

function App() {
  const [sith, setSith] = useState([
    { id: 1, name: "Darth Maul", vanquished: false },
    { id: 2, name: "Darth Dooku", vanquished: false },
    { id: 3, name: "Darth Vader", vanquished: false },
    { id: 4, name: "Emperor Palpatine", vanquished: false },
  ]);

  return (
    <div>
      <h1>Vanquish the Sith!</h1>
    </div>
  );
}

export default App;
