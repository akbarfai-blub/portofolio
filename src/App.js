import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RecentWork from "./components/RecentWork";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <RecentWork />
      <Contact />
    </div>
  );
}

export default App;
