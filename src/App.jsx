import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  return (
    <div className=" justify-center items-center bg-white  flex flex-col  min-w-screen min-h-screen leading-7	">
      <Header />
      <Hero />

      <div id="projects"></div>
      <Title className={"underline"}>Projelerim</Title>
      <Projects />

      <Contact />
    </div>
  );
}

export default App;
