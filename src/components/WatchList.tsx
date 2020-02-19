import React from "react";

export default function WatchList() {
  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="favourite-section">WatchList</div>
    </React.Suspense>
  );
}
