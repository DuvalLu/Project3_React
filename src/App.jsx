import { useState } from "react";
import SithList from "./components/SithList";
import "./App.css";

function App() {
  const [sith, setSith] = useState([
    {
      id: 1,
      name: "Darth Maul",
      vanquished: false,
      sithImage: "/Images/Maul.jpeg",
      jediImage: "/Images/Obi.jpg",
    },
    {
      id: 2,
      name: "Count Dooku",
      vanquished: false,
      sithImage: "/Images/Dooku.jpg",
      jediImage: "/Images/Anakin.jpg",
    },
    {
      id: 3,
      name: "Darth Vader",
      vanquished: false,
      sithImage: "/Images/Vader.jpg",
      jediImage: "/Images/Luke.png",
    },
    {
      id: 4,
      name: "Emperor Palpatine",
      vanquished: false,
      sithImage: "/Images/Palpatine.jpg",
      jediImage: "/Images/Rey.jpg",
    },
  ]);

  return (
    <div>
      <h1>Vanquish the Sith!</h1>
      <SithList sith={sith} />
    </div>
  );
}

export default App;
