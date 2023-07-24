import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/project/Project";
import Skill from "./components/skills/Skill";

function App() {
  return (
    <div className="app">
      <Header />
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
