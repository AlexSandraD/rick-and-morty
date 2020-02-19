import React from "react";

export default function Locations() {
  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="location-section">Locations</div>
    </React.Suspense>
  );
}
