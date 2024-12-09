import "./App.css";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Project";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Skills />
      <Experience />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
