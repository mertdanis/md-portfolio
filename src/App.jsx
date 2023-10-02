import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" justify-center items-center bg-white  flex flex-col  min-w-screen min-h-screen leading-7	">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
