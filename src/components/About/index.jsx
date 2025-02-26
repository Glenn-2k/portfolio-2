import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { FaHtml5, FaJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-800 text-white w-full h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-8">Who am I?</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://avatars.githubusercontent.com/u/128032061?v=4"
              alt="Image of me"
              className="rounded-full mx-auto max-w-3xs"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, erat in sollicitudin fermentum, odio libero condimentum
              metus, et vehicula nunc nunc sit amet libero. Curabitur nec ex nec
              eros tincidunt finibus. Donec nec consectetur libero. Nullam ut
              nunc nec nunc tincidunt fermentum. Nulla facilisi. Proin ut
              lacinia nunc. Cras vestibulum, felis nec ultrices ultricies, erat
              libero condimentum nunc, ac luctus nunc nunc ac justo. Nullam
              consectetur, nunc nec ultricies tristique, nunc nunc
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
