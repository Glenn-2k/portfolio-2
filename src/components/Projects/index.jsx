import Projectcard from "../ProjectCard";
import biddable from "../../assets/SP2Screen.png";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-600 text-white h-screen w-full flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Projectcard
            image={biddable}
            project="Biddable."
            description="Biddable. was made as to answer the task of creating a auction website for our semester project"
            liveUrl={"https://glennsp2.netlify.app/"}
            repoUrl={"https://github.com/Glenn-2k/SP2"}
          />
          <Projectcard />
          <Projectcard />
        </div>
      </div>
    </section>
  );
}

export default Projects;
