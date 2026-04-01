const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-center gap-10 h-14">
          <a href="#solutions" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
            Solutions
          </a>
          <a href="#contact" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
            Contact
          </a>
      </div>
    </nav>
  );
};

export default Navbar;