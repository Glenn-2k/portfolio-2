import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-800 text-white min-h-screen  w-full flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 pb-4 ">
        <h2 className="text-3xl font-bold tracking-wider text-center my-8">
          Contact
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-center">
            If you want to get in touch with me, feel free to send me an email
            at{" "}
            <a
              href="mailto:glenn.andre.kristiansen@gmail.com"
              className=" font-medium underline hover:text-neutral-400 transition-colors"
            >
              Glenn.andre.kristiansen@gmail.com
            </a>
          </p>
          <p className="text-center">You can also find me on </p>
          <motion.div
            className="flex text-3xl pt-4 justify-between w-20"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <a
              href="https://www.linkedin.com/in/glennkristiansen"
              target="blank"
              className="text-[#0A66C2]"
            >
              <FaLinkedin className="opacity-60  hover:opacity-100 hover:scale-110 transition-all ease-in-out " />
            </a>
            <a
              href="https://github.com/Glenn-2k"
              target="blank"
              className="text-[#F6F8FA]"
            >
              <FaGithub className="opacity-60  hover:opacity-100 hover:scale-110 transition-all ease-in-out " />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
