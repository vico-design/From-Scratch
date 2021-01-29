import React from "react";
import "./styles.css";

interface ICardProps {
  character: {
    gender: string;
    id: number;
    image: string;
    name: string;
    species: string;
    status: string;
    location: { name: string; url: string };
  };
}

const Card = ({ character }: ICardProps) => {
  return (
    <div className="card-container" key={character.id}>
      <div className="character-id-container">
        <span className="character-id">{character.id}</span>
      </div>
      <img className="card-image" src={character.image} />
      <h1>{character.name}</h1>
    </div>
  );
};

export default Card;
