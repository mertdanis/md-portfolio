import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center min-w-screen min-h-screen">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
