function About() {
  return (
    <section id="about" className="bg-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Who am I?</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://avatars.githubusercontent.com/u/128032061?v=4"
              alt="Image of me"
              className="rounded-full mx-auto max-h-64"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, erat in sollicitudin fermentum, odio libero condimentum
              metus, et vehicula nunc nunc sit amet libero. Curabitur nec ex nec
              eros tincidunt finibus. Donec nec consectetur libero. Nullam ut
              nunc nec nunc tincidunt fermentum. Nulla facilisi. Proin ut
              lacinia nunc. Cras vestibulum, felis nec ultrices ultricies, erat
              libero condimentum nunc, ac luctus nunc nunc ac justo. Nullam
              consectetur, nunc nec ultricies tristique, nunc nunc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
