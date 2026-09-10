import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Drinks from "@/components/Drinks";
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
        <Events />
        <Visit />
      </main>
      <Footer />
    </>
  );
}