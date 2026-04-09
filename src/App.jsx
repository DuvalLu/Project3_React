import { useState } from "react";
import SithList from "./components/SithList";
import "./App.css";

function App() {
  const [sith, setSith] = useState([
    {
      id: 1,
      name: "Darth Maul",
      vanquished: false,
      sithImage: "/Project3_React/Images/Maul.jpeg",
      jediImage: "/Project3_React/Images/Obi.jpg",
    },
    {
      id: 2,
      name: "Count Dooku",
      vanquished: false,
      sithImage: "/Project3_React/Images/Dooku.jpg",
      jediImage: "/Project3_React/Images/Anakin.jpg",
    },
    {
      id: 3,
      name: "Darth Vader",
      vanquished: false,
      sithImage: "/Project3_React/Images/Vader.jpg",
      jediImage: "/Project3_React/Images/Luke.png",
    },
    {
      id: 4,
      name: "Emperor Palpatine",
      vanquished: false,
      sithImage: "/Project3_React/Images/Palpatine.jpg",
      jediImage: "/Project3_React/Images/Rey.jpg",
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
