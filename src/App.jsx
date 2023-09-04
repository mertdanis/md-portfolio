import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white flex justify-center items-center min-w-full min-h-full">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
