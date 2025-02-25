import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" top-0 left-0 w-full shadow-md p-4 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
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
        </nav>
      )}
    </div>
  );
}

export default Navbar;
