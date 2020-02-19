import React from "react";

export default function HomePage() {
  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <section className="home-page">
        <img
          src="https://images.hdqwalls.com/download/rick-and-morty-uy-2560x1600.jpg"
          alt="rick and morty"
        />
      </section>
    </React.Suspense>
  );
}
