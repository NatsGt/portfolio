import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Navbar from "./components/Navbar";
import Frontpage from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Frontpage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
