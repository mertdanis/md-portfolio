import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-white text-black flex flex-col  min-w-screen min-h-screen">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
