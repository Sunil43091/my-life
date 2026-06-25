import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Journey from "./Journey";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Stats from "./Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Journey />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
