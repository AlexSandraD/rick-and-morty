import React from "react";
import { Store } from "../Store";
import { fetchCharactersAction } from "../Actions";
import { ICharacterProps } from "../interfaces";

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

  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="character-section">
        <CharactersList {...props} />
      </div>
    </React.Suspense>
  );
}
