function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-600 text-white h-screen w-full flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="hover:shadow-2xl transition ease-in-out rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-full h-40 bg-red-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
            <div className="mt-4 flex justify-evenly w-full">
              <a className="text-gray-100 cursor-pointer">Repo</a>
              <a className="text-gray-100 cursor-pointer">Repo</a>
              <a className="text-gray-100 cursor-pointer">Repo</a>
            </div>
          </div>
          <div className="hover:shadow-2xl transition ease-in-out rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-full h-40 bg-red-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
            <div className="mt-4 flex justify-evenly w-full">
              <a className="text-gray-100 cursor-pointer">Repo</a>
              <a className="text-gray-100 cursor-pointer">Repo</a>
              <a className="text-gray-100 cursor-pointer">Repo</a>
            </div>
          </div>
          <div className="hover:shadow-2xl transition ease-in-out rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-full h-40 bg-red-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
            <div className="mt-4 flex justify-evenly w-full">
              <a className="text-gray-100 cursor-pointer">Repo</a>
              <a className="text-gray-100 cursor-pointer">Repo</a>
              <a className="text-gray-100 cursor-pointer">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
