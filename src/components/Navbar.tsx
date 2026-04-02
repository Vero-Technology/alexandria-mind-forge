import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import alexandriaLogo from "@/assets/alexandria-logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [menuOpen]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setMenuOpen(false), 300);
  };

  return (
    <>
      <nav className="absolute top-8 md:top-9 left-0 right-0 z-20">
        <div className="relative flex items-center h-14 px-4 md:px-6">
          <img src={alexandriaLogo} alt="Alexandria" className="h-8 absolute left-4 md:left-6" />

          <div className="hidden sm:flex items-center justify-center gap-10 w-full">
            <a href="#solutions" className="font-sans text-sm font-medium text-white drop-shadow-sm hover:text-white/80 transition-colors">
              Solutions
            </a>
            <a href="#contact" className="font-sans text-sm font-medium text-white drop-shadow-sm hover:text-white/80 transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="sm:hidden absolute right-4 text-white"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col sm:hidden transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white text-black text-center py-2 text-xs font-medium tracking-wide">
            Coming Soon
          </div>
          <div className="flex items-center justify-between h-14 px-4 bg-black">
            <img src={alexandriaLogo} alt="Alexandria" className="h-8" />
            <button
              onClick={handleClose}
              className="text-white"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8 bg-black">
            <a
              href="#solutions"
              onClick={handleClose}
              className={`font-sans text-2xl font-medium text-white hover:text-white/70 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Solutions
            </a>
            <a
              href="#contact"
              onClick={handleClose}
              className={`font-sans text-2xl font-medium text-white hover:text-white/70 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
