import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Main />
      <About />
      <Projects />
      <Contact />
      <Resume />
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
