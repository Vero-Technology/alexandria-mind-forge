import alexandriaLogo from "@/assets/alexandria-logo.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      <div className="flex items-center h-14 px-6">
        <img src={alexandriaLogo} alt="Alexandria" className="h-8" />
        <div className="flex items-center justify-center gap-10 flex-1">
          <a href="#solutions" className="font-sans text-sm text-white hover:text-white transition-colors">
            Solutions
          </a>
          <a href="#contact" className="font-sans text-sm text-white hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;