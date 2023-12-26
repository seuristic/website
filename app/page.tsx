import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-default-950 text-default-50">
      <Navbar />
      <main className="h-screen">
        <h1 className="text-5xl font-bold text-center">Hello world</h1>
      </main>
    </div>
  );
}
