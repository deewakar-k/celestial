import { Dock } from "@/components/dock/dock";
import Bento from "@/components/grid/bento-grid";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <Hero />
      <Bento />
      <Dock />
    </main>
  );
}
