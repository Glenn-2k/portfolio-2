import Logo from "../Logo";
import Navbar from "../Nav";

function Header() {
  return (
    <header className="bg-teal-950 sticky top-0 w-full z-20 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
