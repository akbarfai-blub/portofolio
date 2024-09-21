import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import RecentWork from "./components/RecentWork";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <RecentWork />
      <Contact />
    </div>
  );
}

export default App;
