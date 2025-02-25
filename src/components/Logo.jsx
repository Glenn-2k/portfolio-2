import GlennLogo from "../assets/GlennLogo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={GlennLogo}
        alt="logo"
        className="h-12 w-auto m-4 pl-6 cursor-pointer"
      />
    </div>
  );
};

export default Logo;
