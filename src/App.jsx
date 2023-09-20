import { createRoot } from "react-dom/client";
import CharacterSelector from "./CharacterSelector";
import { useEffect, useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);

  async function requestCharacters () {
    const result = await fetch("http://localhost:8888/api/characterWithId");
    setCharacters(await result.json());
  }

  useEffect(() => {
    requestCharacters().then((r) => r);
  }, []);

  return (
    <div>
      <h1>Tekken 8 Frame Data</h1>
      <CharacterSelector
        characters={characters}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
