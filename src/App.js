import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      {/* <CharacterList characterData={data} /> */}
    </div>
  );
}

// function CharacterList(props) {
//   return (
//     <div className="characters">
//       <h2>List of Characters:</h2>
//       {props.characterData.map(character => {
//         return <Character character={character} key={character.id} />;
//       })}
//     </div>
//   );
// }

// function Character(props) {
//   console.log(props);
//   return (
//     <div className="character">
//       <img src={props.character.image} alt="character" />
//       <div className="character-content">
//         <h3>Name: {props.character.name}</h3>
//         <h4>Species: {props.character.species}</h4>
//         <h4>Location: {props.character.location.name}</h4>
//       </div>
//     </div>
//   );
// }

export default App;
