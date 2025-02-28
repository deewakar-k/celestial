import { Dock } from "@/components/dock/dock";
import Footer from "@/components/footer/footer";
import Bento from "@/components/grid/bento-grid";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <div className="w-full mb-28">
        <Navbar />
      </div>
      <div className="w-full mb-56">
        <Hero />
      </div>
      <div className="w-full flex-grow mb-48">
        <Bento />
      </div>
      <div className="w-full mb-8">
        <Dock />
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}
