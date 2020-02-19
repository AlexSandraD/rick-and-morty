import React from "react";
import { IEpisode } from "../interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes } = props;

  return (
    episodes &&
    episodes.map((episode: IEpisode) => {
      return (
        <section key={episode.id} className="episode-box">
          <p>Name: {episode.name}</p>
          <p>air_date: {episode.air_date}</p>
          <p>episode: {episode.episode}</p>
        </section>
      );
    })
  );
}
