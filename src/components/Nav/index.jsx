import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl ml-4"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 bg-teal-950 w-full shadow-md flex flex-col items-center space-y-4 py-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-blue-500"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
