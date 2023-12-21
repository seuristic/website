import { Fan } from "@/ui/icons";

export default function Home() {
  return (
    <div className="text-9xl h-screen flex justify-center items-center font-bold">
      Hello world
      <Fan size={100} color="red" weight="duotone" />
    </div>
  );
}
