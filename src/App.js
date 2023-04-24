import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  app: {
    display: "flex",
    height: "100%",
    backgroundColor: "#044B7F",
    color: "white",
  },
  nav: {
    width: "40%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "75px",
  },
  links: {},
};

function App() {
  return (
    <div style={styles.app}>
      <div className="navbar" style={styles.nav}>
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
