import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/project/Project";
import Skill from "./components/skills/Skill";

function App() {
  return (
    <div className="app">
      <Home />
      <NavBar />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
