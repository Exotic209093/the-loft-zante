import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Drinks from "@/components/Drinks";
import FullMenu from "@/components/FullMenu";
import Events from "@/components/Events";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Drinks />
        <FullMenu />
        <Events />
        <Visit />
      </main>
      <Footer />
    </>
  );
}