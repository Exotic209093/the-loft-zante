import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
        <About />
        <Drinks />
        <FullMenu />
        <Events />
        <Visit />
      </main>
      <Footer />
    </>
  );
}