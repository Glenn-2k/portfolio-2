import Logo from "../Logo";

function Header() {
  return (
    <header className="bg-teal-950 sticky top-0 flex-wrap z-[20] mx-auto w-full flex justify-between items-center text-white">
      <Logo />
    </header>
  );
}

export default Header;
