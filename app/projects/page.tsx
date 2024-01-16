import React from "react";
import Card from "../components/Project/Card";

export default function Projects() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-20 md:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          illum placeat hic quidem sed quia fugiat eum similique perspiciatis
          excepturi laborum libero perferendis maxime, nobis fuga officia,
          aliquid possimus vero!
        </p>
      </div>
      <section className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {[...Array(5)].map((_, i) => (
          <Card key={i} />
        ))}
      </section>
    </main>
  );
}
