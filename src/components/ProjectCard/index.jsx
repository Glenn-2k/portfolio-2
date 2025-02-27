import PropTypes from "prop-types";

Projectcard.propTypes = {
  project: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

function Projectcard({ project, image, description, liveUrl, repoUrl }) {
  return (
    <div className="hover:shadow-2xl transition ease-in-out rounded-2xl p-6 flex flex-col items-center text-center  max-w-sm mx-auto">
      <img src={image} className="w-full h-40 bg-red-500 rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">{project}</h3>
      <p className="text-sm">{description}</p>
      <div className="mt-4 flex justify-evenly w-full">
        <a
          href={liveUrl}
          target="blank"
          className="text-gray-100 cursor-pointer capitalize"
        >
          live link
        </a>
        <a
          href={repoUrl}
          target="blank"
          className="text-gray-100 cursor-pointer capitalize"
        >
          Repo
        </a>
      </div>
    </div>
  );
}

export default Projectcard;
