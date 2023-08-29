import { createRoot } from "react-dom/client";
import Character from "./Character";
import { useEffect, useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);

  async function requestCharacters() {
    const result = await fetch("http://127.0.0.1:8000/character");
    const json = await result.json();
    setCharacters(JSON.parse(json));
  }

  useEffect(() => {
    requestCharacters().then((r) => r);
  }, []);

  return (
    <div>
      <h1>Tekken 8 Frame Data</h1>
      {characters.map((character) => (
        <Character
          key={character.id}
          id={character.id}
          full_name={character.full_name}
          sex={character.sex}
        />
      ))}
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        Hello
      </button>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
