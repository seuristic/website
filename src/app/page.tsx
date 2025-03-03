import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Button className="mt-10">SERVICES</Button>
    </main>
  );
}
