import GlennLogo from "../assets/GlennLogo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={GlennLogo}
        alt="logo"
        className="h-8 w-auto m-4 pl-6 cursor-pointer hover:skew-2 hover:scale-105 transform transition duration-500 ease-in-out"
      />
    </div>
  );
};

export default Logo;
