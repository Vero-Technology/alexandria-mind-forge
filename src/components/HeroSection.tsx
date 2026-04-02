import Navbar from "@/components/Navbar";
import logo1 from "@/assets/logo_white_4k_fixed.png";
import logo2 from "@/assets/hcm-big-d.png";
import logo3 from "@/assets/bank-of-america.png";

// ===== MANUAL LOGO SIZING =====
// Adjust height (px) and vertical offset (px, negative = up) for each logo
const logos = [
  { src: logo1, alt: "Immuno Cure", height: 28, offsetY: 0 },
  { src: logo2, alt: "HutchMed", height: 22, offsetY: -5 },
  { src: logo3, alt: "Bank of America", height: 38, offsetY: 0 },
];
// ===============================

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <Navbar />
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/ALgyYN3beWw?autoplay=1&mute=1&loop=1&playlist=ALgyYN3beWw&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] min-w-full min-h-full pointer-events-none"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          title="Background video"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col justify-center min-h-full">
        <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl mb-8 text-white">
          Reasoning Across the Global R&D Landscape.
        </h1>
        <p className="animate-fade-up-delay-1 text-lg md:text-xl max-w-2xl text-white/70 leading-relaxed">
          Eliminate the workflow of manual cross-referencing. Move from raw data to technical synthesis in hours, not weeks.
        </p>
      </div>

      {/* Bottom accredited bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
          <span className="text-white/70 text-sm tracking-wide">Accredited by executives from</span>
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="object-contain opacity-80"
              style={{ height: logo.height, transform: `translateY(${logo.offsetY}px)` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
