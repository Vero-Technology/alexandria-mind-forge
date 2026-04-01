const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="font-serif text-white text-lg tracking-tight">Alexandria</span>
        <div className="flex items-center gap-8">
          <a href="#solutions" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
            Solutions
          </a>
          <a href="#contact" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;