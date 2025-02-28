import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

Projectcard.propTypes = {
  project: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

function Projectcard({ project, image, description, liveUrl, repoUrl }) {
  return (
    <motion.div
      className="bg-slate-700 rounded-2xl p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }} // Start slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
    >
      <div className="hover:shadow-2xl transition ease-in-out rounded-2xl p-6 flex flex-col items-center text-center  max-w-sm mx-auto">
        <img src={image} className="w-full h-40 bg-red-500 rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-2">{project}</h3>
        <p className="text-sm">{description}</p>
        <div className="mt-4 flex justify-evenly w-full">
          <a
            href={liveUrl}
            target="blank"
            className="text-gray-100 cursor-pointer capitalize text-xl"
          >
            <FaExternalLinkAlt className="opacity-60  hover:opacity-100 hover:scale-110 transition-all ease-in-out " />
          </a>
          <a
            href={repoUrl}
            target="blank"
            className="text-gray-100 cursor-pointer text-xl capitalize"
          >
            <FaGithub className="opacity-60  hover:opacity-100 hover:scale-110 transition-all ease-in-out " />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projectcard;
