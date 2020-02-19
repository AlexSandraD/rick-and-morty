/**
|--------------------------------------------------
| All of our interfaces
|--------------------------------------------------
*/

export interface IState {
  characters: Array<ICharacter>;
  episodes: Array<IEpisode>;
  locations: Array<ILocation>;
}

export interface IAction {
  type: string;
  payload: ICharacter[] | IEpisode[] | ILocation[] | [] | any;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: [];
  url: string;
  created: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
  url: string;
  created: string;
}

export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: [];
    url: string;
    created: string;
  }

export type Dispatch = React.Dispatch<IAction>;

export interface ICharacterProps {
    characters: Array<ICharacter>;
    store: { state: IState; dispatch: any };
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: any };
}

export interface ILocationProps {
    locations: Array<ILocation>;
    store: { state: IState; dispatch: any };
  }
