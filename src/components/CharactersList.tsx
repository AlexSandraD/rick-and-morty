import React from "react";
import { ICharacter } from "../interfaces";

export default function CharactersList(props: any): Array<JSX.Element> {
  const { characters } = props;

  return (
    characters &&
    characters.map((character: ICharacter) => {
      return (
        <section key={character.id} className="character-box">
          <img
            src={character.image}
            alt={`Rick and Morty ${character.name}`}
          />

          <p>Name: {character.name}</p>
        </section>
      );
    })
  );
}
