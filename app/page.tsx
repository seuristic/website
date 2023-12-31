import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-default-950 text-default-50">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-32 md:py-32">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
