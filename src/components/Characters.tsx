import React from "react";

export default function Characters() {
  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="character-section">Characters</div>
    </React.Suspense>
  );
}
