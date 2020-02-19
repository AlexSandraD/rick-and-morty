import React from "react";

export default function Episodes() {
  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="episode-section">Episodes</div>
    </React.Suspense>
  );
}
