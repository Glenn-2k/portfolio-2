import Projectcard from "../ProjectCard";
import biddable from "../../assets/SP2Screen.png";
import batcommerce from "../../assets/jsframeworks.png";
import holidaze from "../../assets/pescreen.png";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-slate-600 text-white min-h-screen w-full flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} // Animates when it enters the viewport
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section
        id="projects"
        className="bg-gradient-to-b from-slate-800 to-slate-700 text-white min-h-screen  w-full flex flex-col justify-center"
      >
        <div className="container mx-auto px-4 pb-4 ">
          <h2 className="text-3xl font-bold tracking-wider text-center my-8">
            Projects
          </h2>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-6  max-w-5xl mx-auto">
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
              image={holidaze}
              alt="Holidaze project"
              project="Holidaze"
              description="Holidaze was made for our final exam at FED at Noroff. The task was to create a website for a booking service"
              liveUrl={"https://pe2-glenn.netlify.app/"}
              repoUrl={"https://github.com/Glenn-2k/project-exam-2-glenn"}
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default Projects;
