import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import logo1 from "@/assets/logo_white_4k_fixed.png";
import logo2 from "@/assets/hcm-big-d.png";
import logo3 from "@/assets/bank-of-america.png";

// ===== MANUAL LOGO SIZING =====
const logos = [
  { src: logo1, alt: "Immuno Cure", height: 28, offsetY: 0 },
  { src: logo2, alt: "HutchMed", height: 22, offsetY: -5 },
  { src: logo3, alt: "Bank of America", height: 38, offsetY: 0 },
];
// ===============================

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoBlocked, setVideoBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      setVideoBlocked(true);
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a1a]">
      {/* Video background — covers entire section */}
      {videoBlocked ? (
        <img
          src="/hero-poster.jpg"
          alt=""
          className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          poster="/hero-poster.jpg"
          className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/hero-video-4k.webm" type="video/webm" />
        </video>
      )}

      {/* Coming Soon */}
      <div className="relative z-20 bg-white text-black text-center py-2 md:py-2.5 text-xs font-medium tracking-wide">
        Coming Soon
      </div>

      {/* Navbar */}
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col justify-center flex-1">
        <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl mb-8 text-white">
          Reasoning Across the Global R&D Landscape.
        </h1>
        <p className="animate-fade-up-delay-1 text-lg md:text-xl max-w-2xl text-white/70 leading-relaxed">
          Eliminate the workflow of manual cross-referencing. Move from raw data to technical synthesis in hours, not weeks.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-up-delay-1 mt-6 inline-flex items-center px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-200 w-fit"
        >
          Book a Call
        </a>
      </div>

      {/* Bottom accredited bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-3 md:py-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10">
          <span className="text-white/70 text-xs md:text-base tracking-wide">Accredited by executives from</span>
          <div className="flex items-center gap-6 md:gap-10">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="object-contain opacity-80 md:scale-125"
                style={{ height: logo.height, transform: `translateY(${logo.offsetY}px)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
