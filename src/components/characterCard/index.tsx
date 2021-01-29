import React from "react";
import "./styles.css";

interface ICharacterInfo {
  character: {
    gender: string;
    id: number;
    image: string;
    name: string;
    species: string;
    location: { name: string; url: string };
  };
}

const CharacterCard = ({ character }: ICharacterInfo) => {
  return (
    <div className="card-component">
      <img className="card-image" key={character.id} src={character.image} />
    </div>
  );
};

export default CharacterCard;
