import { Dock } from "@/components/dock/dock";
import Footer from "@/components/footer/footer";
import Bento from "@/components/grid/bento-grid";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="mb-28">
        <Navbar />
      </div>
      <div className="mb-56">
        <Hero />
      </div>
      <div className="flex-grow mb-48">
        <Bento />
      </div>
      <div className="mb-16">
        <Dock />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
