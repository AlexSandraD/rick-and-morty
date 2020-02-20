/* eslint-disable no-loop-func */
export const fetchCharactersAction = async (dispatch: any) => {
  //   const data = await fetch("https://rickandmortyapi.com/api/character");
  //   const dataJSON = await data.json();
  //   return dispatch({
  //     type: "FETCH_CHARACTERS",
  //     payload: dataJSON.results
  //   });
  fetch(`https://rickandmortyapi.com/api/character/`)
    .then(res => res.json())
    .then(data => {
      let characters = data.results;
      const totalPages = data.info.pages;

      if (totalPages > 1) {
        for (var i = 2; i <= totalPages; i++) {
          let page = i;
          fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
            .then(res => res.json())
            .then(data => {
              characters = characters.concat(data.results);
              if (page === totalPages) {
                return dispatch({
                  type: "FETCH_CHARACTERS",
                  payload: characters
                });
              }
            });
        }
      } else {
        return dispatch({
          type: "FETCH_CHARACTERS",
          payload: characters
        });
      }
    })
    .catch(err => {
      console.log("err", err);
    });
};

export const fetchEpisodesAction = async (dispatch: any) => {
  fetch(`https://rickandmortyapi.com/api/episode/`)
    .then(res => res.json())
    .then(data => {
      let episodes = data.results;
      const totalPages = data.info.pages;

      if (totalPages > 1) {
        for (var i = 2; i <= totalPages; i++) {
          let page = i;
          fetch(`https://rickandmortyapi.com/api/episode/?page=${i}`)
            .then(res => res.json())
            .then(data => {
              episodes = episodes.concat(data.results);
              if (page === totalPages) {
                return dispatch({
                  type: "FETCH_EPISODES",
                  payload: episodes
                });
              }
            });
        }
      } else {
        return dispatch({
          type: "FETCH_EPISODES",
          payload: episodes
        });
      }
    })
    .catch(err => {
      console.log("err", err);
    });
};

export const fetchLocationsAction = async (dispatch: any) => {
  fetch(`https://rickandmortyapi.com/api/location/`)
    .then(res => res.json())
    .then(data => {
      let locations = data.results;
      const totalPages = data.info.pages;

      if (totalPages > 1) {
        for (var i = 2; i <= totalPages; i++) {
          let page = i;
          fetch(`https://rickandmortyapi.com/api/location/?page=${i}`)
            .then(res => res.json())
            .then(data => {
              locations = locations.concat(data.results);
              if (page === totalPages) {
                return dispatch({
                  type: "FETCH_LOCATIONS",
                  payload: locations
                });
              }
            });
        }
      } else {
        return dispatch({
          type: "FETCH_LOCATIONS",
          payload: locations
        });
      }
    })
    .catch(err => {
      console.log("err", err);
    });
};
