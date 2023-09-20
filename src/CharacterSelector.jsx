import { useState, useEffect } from "react";
import Character from "./Character";

const CharacterSelector = (props) => {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  // when selected option changes, store the selected character
  const handleCharacterChange = (event) => {
    setSelectedCharacter(event.target.value);
  };
  // when no character is selected (on first load) selected the first character in the dropdown
  useEffect(() => {
    if (!selectedCharacter && props.characters.length > 0) {
      setSelectedCharacter(props.characters[0].ShortName);
    }
  }, [props.characters]);

  return (
    <div>
      <label htmlFor="character">Select a character: </label>
      <select name="character" id="character" onChange={handleCharacterChange} value={selectedCharacter}>
        {props.characters.map((character) => (
          <option key={character.Id} value={character.ShortName}>{character.ShortName}</option>
        ))}
      </select>
      <Character
        ShortName={selectedCharacter}
      />

    </div>
  );
};

export default CharacterSelector;
