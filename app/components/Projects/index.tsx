import Card from "./Card";

export default function Projects() {
  return (
    <section className="">
      <h2 className="mb-1">Projects</h2>
      <p>Some description</p>
      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </section>
  );
}
