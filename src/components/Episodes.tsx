import React from "react";
import { Store } from "../Store";
import { fetchEpisodesAction } from "../Actions";
import { IEpisodeProps } from "../interfaces";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default function Episodes() {
  const { state, dispatch } = React.useContext(Store);



  React.useEffect(() => {
    state.episodes.length === 0 && fetchEpisodesAction(dispatch);
  }, [dispatch, state.episodes.length]);

  const props: IEpisodeProps = {
    episodes: state.episodes,
    // toggleFavAction,
    // favourites: state.favourites,
    store: { state, dispatch }
  };

  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="episode-section">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
}
