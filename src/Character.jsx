import React, { useEffect, useState } from "react";

const Character = (props) => {
  const [character, setCharacter] = useState({});
  const [characterImage, setCharacterImage] = useState(null);

  async function requestCharacterData () {
    if (props.ShortName !== "") {
      const result = await fetch(`http://localhost:8888/api/character?name=${props.ShortName}`);
      const data = await result.json();
      setCharacter(data[0]);
    }
  }

  useEffect(() => {
    requestCharacterData();
  }, [props.ShortName]);

  useEffect(() => {
    if (character.ShortName) {
      // Dynamically import the image based on character.ShortName
      import(`./images/${character.ShortName}.png`)
        .then((image) => setCharacterImage(image.default))
        .catch((error) => console.error("Error loading image: ", error));
    }
  }, [character.ShortName]);

  return (
    <div>
      <div className="relative">
        <img src={characterImage}
             alt={character.ShortName}
             className="bg-amber-500 pb-5 pt-5" />
        <div className="absolute top-5 left-5">
          <h1 className="text-3xl">{character.LongName}</h1>
          <ul className="list-disc pl-5">
            <li className="text-base">{character.FightingStyle}</li>
            <li className="text-base">{character.Nationality}</li>
            <li className="text-base">{character.Height}cm</li>
            <li className="text-base">{character.Weight}kg</li>
            <li className="text-base">{character.Gender === "m" ? "Male" : "Female"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
