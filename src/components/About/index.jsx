import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { FaHtml5, FaJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const paragraphs = [
  "Hi there! My name is Glenn, and I'm a front-end developer. I have a passion for crafting beautiful and functional web experiences.",
  "Having completed my studies in Frontend Development at Noroff, I’ve built a good foundation in HTML, CSS, JavaScript, Tailwind, and React.",
  "I’m always eager to learn, explore new technologies, and take on exciting challenges. Below, you'll find some of my projects—each representing a step in my journey, as they were some of my school assignments.",
  "I'm currently looking for opportunities to bring my problem-solving skills to a team that values eagerness to learn. If you're looking for a dedicated front-end developer with a curious mindset, let’s connect!",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.9 },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <motion.section
      id="about"
      className="bg-gradient-to-b from-slate-800 to-slate-700 text-white  w-full min-h-screen flex flex-col items-center justify-center"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl tracking-wider font-heading font-bold text-center mb-24">
          Who am I?
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://avatars.githubusercontent.com/u/128032061?v=4"
              alt="Image of me"
              className="rounded-full mb-12 mx-auto max-w-3xs shadow-xl shadow-blue-500/20"
            />
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              className="text-lg font-body leading-relaxed space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {paragraphs.map((para, index) => (
                <motion.p key={index} variants={textVariants}>
                  {para.split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              ))}
            </motion.div>

            <div className="flex justify-center my-8">
              <ul className="flex pt-6 gap-4 text-3xl">
                <li>
                  <FaHtml5 className="opacity-60 hover:opacity-100 hover:scale-110 hover:text-[#E34F26] transition-all ease-in-out" />
                </li>
                <li>
                  <FaCss3Alt className="opacity-60 hover:opacity-100 hover:scale-110 hover:text-[#1572B6] transition-all ease-in-out" />
                </li>
                <li>
                  <FaJs className="opacity-60 hover:opacity-100 hover:scale-110 hover:text-[#F7DF1E] transition-all ease-in-out" />
                </li>
                <li>
                  <FaReact className="opacity-60 hover:opacity-100 hover:scale-110 hover:text-[#61DAFB] transition-all ease-in-out" />
                </li>
                <li>
                  <RiTailwindCssFill className="opacity-60 hover:opacity-100 hover:scale-110 hover:text-[#06B6D4] transition-all ease-in-out" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
