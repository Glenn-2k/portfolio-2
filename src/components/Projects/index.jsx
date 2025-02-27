import Projectcard from "../ProjectCard";
import biddable from "../../assets/SP2Screen.png";
import batcommerce from "../../assets/jsframeworks.png";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-600 text-white min-h-screen  w-full flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 pb-4 ">
        <h2 className="text-3xl font-bold text-center my-8">Projects</h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8  max-w-5xl mx-auto">
          <Projectcard
            image={biddable}
            alt="Biddable project"
            project="Biddable."
            description="Biddable. was made as to answer the task of creating a auction website for our semester project"
            liveUrl={"https://glennsp2.netlify.app/"}
            repoUrl={"https://github.com/Glenn-2k/SP2"}
          />
          <Projectcard
            image={batcommerce}
            alt="Batcommerce website"
            project="BatCommerce"
            description="BatCommerce was made as to answer the task of creating a ecommerce website for our JS Frameworks course"
            liveUrl={"https://js-react-glenn.netlify.app/"}
            repoUrl={"https://github.com/Glenn-2k/JS-Frameworks-CA"}
          />
          <Projectcard
            image={biddable}
            alt="Biddable project"
            project="Biddable."
            description="Biddable. was made as to answer the task of creating a auction website for our semester project"
            liveUrl={"https://glennsp2.netlify.app/"}
            repoUrl={"https://github.com/Glenn-2k/SP2"}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
