import React from "react";
import { Store } from "../Store";
import { fetchLocationsAction } from "../Actions";
import { ILocationProps } from "../interfaces";

const LocationsList = React.lazy<any>(() => import("./LocationsList"));

export default function Locations() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.locations.length === 0 && fetchLocationsAction(dispatch);
  }, [dispatch, state.locations.length]);

  const props: ILocationProps = {
    locations: state.locations,
    store: { state, dispatch }
  };

  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="location-section">
        <LocationsList {...props} />
      </div>
    </React.Suspense>
  );
}
