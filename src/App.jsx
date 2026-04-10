import { useState } from "react";
import SithList from "./components/SithList";
import AddSith from "./components/AddSith";
import SithShowcase from "./components/SithShowcase";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import "./App.css";

const SITH_ROSTER = [
  {
    id: 1,
    name: "Darth Maul",
    jediName: "Defeated by Obi-Wan Kenobi",
    sithImage: "/Project3_React/Images/Maul.jpeg",
    jediImage: "/Project3_React/Images/Obi.jpg",
  },
  {
    id: 2,
    name: "Count Dooku",
    jediName: "Defeated by Anakin Skywalker",
    sithImage: "/Project3_React/Images/Dooku.jpg",
    jediImage: "/Project3_React/Images/Anakin.jpg",
  },
  {
    id: 3,
    name: "Darth Vader",
    jediName: "Defeated by Luke Skywalker",
    sithImage: "/Project3_React/Images/Vader.jpg",
    jediImage: "/Project3_React/Images/Luke.png",
  },
  {
    id: 4,
    name: "Emperor Palpatine",
    jediName: "Defeated by Rey",
    sithImage: "/Project3_React/Images/Palpatine.jpg",
    jediImage: "/Project3_React/Images/Rey.jpg",
  },
];

function App() {
  const [sith, setSith] = useState([]);

  const addSith = (id) => {
    const selected = SITH_ROSTER.find((oneSith) => oneSith.id === id);
    const alreadyAdded = sith.some((oneSith) => oneSith.id === id);
    if (alreadyAdded) return;
    setSith([...sith, { ...selected, vanquished: false }]);
  };

  const vanquishSith = (id) => {
    setSith(
      sith.map((oneSith) =>
        oneSith.id === id ? { ...oneSith, vanquished: true } : oneSith,
      ),
    );
  };

  const deleteSith = (id) => {
    setSith(sith.filter((oneSith) => oneSith.id !== id));
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Vanquish the Sith!</h1>
              <SithShowcase roster={SITH_ROSTER} />
              <AddSith roster={SITH_ROSTER} addSith={addSith} />
              <SithList
                sith={sith}
                vanquishSith={vanquishSith}
                deleteSith={deleteSith}
              />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
