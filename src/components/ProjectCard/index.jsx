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
      className=" rounded-2xl px-0 md:p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className=" transition-transform duration-300 hover:shadow-2xl hover:scale-105  rounded-2xl p-6 flex flex-col justify-between items-center text-center sm:h-80 md:h-100  max-w-80 mx-auto">
        <img src={image} className="w-full h-40  bg-red-500 rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-2">{project}</h3>
        <p className="text-sm">{description}</p>
        <div className="mt-4 flex justify-evenly w-full">
          <a
            href={liveUrl}
            target="blank"
            className="text-gray-100 cursor-pointer capitalize text-xl"
          >
            <FaExternalLinkAlt
              className="opacity-60  hover:opacity-100 hover:scale-110 transition-all ease-in-out "
              aria-label="live demo icon"
            />
          </a>
          <a
            href={repoUrl}
            target="blank"
            className="text-gray-100 cursor-pointer text-xl capitalize"
          >
            <FaGithub
              className="opacity-60  hover:opacity-100 hover:scale-110 transition-all ease-in-out "
              aria-label="github repo icon"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projectcard;
