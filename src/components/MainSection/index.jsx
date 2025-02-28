import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";

function MainSection() {
  return (
    <div className="bg-slate-700">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default MainSection;
