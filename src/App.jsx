import { createRoot } from "react-dom/client";
import CharacterSelector from "./CharacterSelector";
import { StrictMode, useEffect, useState } from "react";

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
    <>
      <header>
        <div className="bg-amber-200">
          <h1 className="text-5xl text-center">Frame Data</h1>
          <p className="text-center text-l">I am a dragon!</p>
        </div>
      </header>
      <div>
        <CharacterSelector characters={characters} />
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
