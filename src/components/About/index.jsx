import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { FaHtml5, FaJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-800 text-white w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-heading tracking-wider  font-bold text-center mb-8 ">
          Who am I?
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://avatars.githubusercontent.com/u/128032061?v=4"
              alt="Image of me"
              className="rounded-full mx-auto max-w-3xs"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-4 leading-relaxed font-body">
              <span className="block font-bold text-lg">
                Hi there! My name is Glenn, and I&apos;m a front-end developer.
              </span>
              I have a passion for crafting beautiful and functional web
              experiences.
              <span className="block mt-2">
                Having completed my studies in Frontend Development at Noroff,
                I’ve built a good foundation in HTML, CSS, JavaScript, Tailwind,
                and React.
              </span>
              <span className="block mt-2">
                I’m always eager to learn, explore new technologies, and take on
                exciting challenges. Below, you&apos;ll find some of my
                projects—each representing a step in my journey, as they were
                some of my school assignments.
              </span>
              <span className="block mt-2 font-semibold">
                I&apos;m currently looking for opportunities to bring my
                problem-solving skills to a team that values eagerness to learn.
                If you&apos;re looking for a dedicated front-end developer with
                a curious mindset, let’s connect!
              </span>
            </p>

            <div className="flex justify-center">
              <ul className="flex pt-6 gap-4 text-3xl">
                <li>
                  <FaHtml5 className="opacity-60  hover:opacity-100 hover:scale-110 hover:text-[#E34F26] transition-all ease-in-out " />
                </li>
                <li>
                  <FaCss3Alt className="opacity-60  hover:opacity-100 hover:scale-110 hover:text-[#1572B6] transition-all ease-in-out " />
                </li>
                <li>
                  <FaJs className="opacity-60  hover:opacity-100 hover:scale-110 hover:text-[#F7DF1E] transition-all ease-in-out " />
                </li>
                <li>
                  <FaReact className="opacity-60  hover:opacity-100 hover:scale-110 hover:text-[#61DAFB] transition-all ease-in-out " />
                </li>
                <li>
                  <RiTailwindCssFill className="opacity-60  hover:opacity-100 hover:scale-110 hover:text-[#06B6D4] transition-all ease-in-out " />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
