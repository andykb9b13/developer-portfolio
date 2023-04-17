import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/andykb9b13">Github</a>
          </li>
          <li>
            <a href="www.linkedin.com/in/andy-kleindienst">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.facebook.com/andy.kleindienst.1/">FaceBook</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
