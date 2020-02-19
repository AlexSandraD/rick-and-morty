import React from "react";
import { ILocation } from "../interfaces";

export default function LocationsList(props: any): Array<JSX.Element> {
  const { locations } = props;

  return (
    locations &&
    locations.map((location: ILocation) => {
      return (
        <section key={location.id} className="location-box">
          <p>Name: {location.name}</p>
          <p>type: {location.type}</p>
          <p>dimension: {location.dimension}</p>
        </section>
      );
    })
  );
}
