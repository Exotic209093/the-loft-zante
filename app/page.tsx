import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Drinks from "@/components/Drinks";
import Events from "@/components/Events";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Gallery />
        <Drinks />
        <Events />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
