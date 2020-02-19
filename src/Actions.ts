export const fetchCharactersAction = async (dispatch: any) => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_CHARACTERS",
    payload: dataJSON.results
  });
};

export const fetchEpisodesAction = async (dispatch: any) => {
  const data = await fetch("https://rickandmortyapi.com/api/episode");
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_EPISODES",
    payload: dataJSON.results
  });
};

export const fetchLocationsAction = async (dispatch: any) => {
  const data = await fetch("https://rickandmortyapi.com/api/location/");
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_LOCATIONS",
    payload: dataJSON.results
  });
};
