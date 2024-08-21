import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";

function Sections() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default Sections;
