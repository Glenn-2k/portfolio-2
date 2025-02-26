import About from "../About";
import Projects from "../Projects";

function MainSection() {
  return (
    <div className="bg-slate-700 h-screen flex flex-col justify-center items-center gap-4">
      <About />
      <Projects />
    </div>
  );
}

export default MainSection;
