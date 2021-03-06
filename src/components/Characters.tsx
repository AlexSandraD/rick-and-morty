import React from "react";
import { Store } from "../Store";
import { fetchCharactersAction } from "../Actions";
import { ICharacterProps } from "../interfaces";
import TextField from "@material-ui/core/TextField";

const CharactersList = React.lazy<any>(() => import("./CharactersList"));

export default function Characters() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.characters.length === 0 && fetchCharactersAction(dispatch);
  }, [dispatch, state.characters.length]);

  const props: ICharacterProps = {
    characters: state.characters,
    store: { state, dispatch }
  };

  function onSearchInputChange(e: any) {
    console.log("Search changed ..." + e.target.value);
    // if (event.target.value) {
    //   this.setState({ searchString: event.target.value });
    // } else {
    //   this.setState({ searchString: "" });
    // }
    // this.getCourses();
  }

  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="character-section">
        <TextField
          style={{ paddingBottom: 20 }}
          id="searchInput"
          placeholder="Search"
          margin="normal"
          onChange={onSearchInputChange}
        />
        <div className="character-box">
          <CharactersList {...props} />
        </div>
      </div>
    </React.Suspense>
  );
}
