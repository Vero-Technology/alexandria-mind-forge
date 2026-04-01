import alexandriaLogo from "@/assets/alexandria-logo.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      <div className="relative flex items-center h-14 px-6">
        <img src={alexandriaLogo} alt="Alexandria" className="h-8 absolute left-6" />
        <div className="flex items-center justify-center gap-10 w-full">
          <a href="#solutions" className="font-sans text-sm font-medium text-white drop-shadow-sm hover:text-white/80 transition-colors">
            Solutions
          </a>
          <a href="#contact" className="font-sans text-sm font-medium text-white drop-shadow-sm hover:text-white/80 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;