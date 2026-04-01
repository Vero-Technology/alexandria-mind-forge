const HeroSection = () => {
  return (
    <section className="relative w-full aspect-video overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/ALgyYN3beWw?autoplay=1&mute=1&loop=1&playlist=ALgyYN3beWw&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1"
          className="absolute inset-0 w-full h-full pointer-events-none"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          title="Background video"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex items-center min-h-full">
        {/* Eyebrow */}
        <div className="animate-fade-up mb-8">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-white/70">
            <span className="font-medium text-white">Alexandria</span>
            <span> — AI-Native Research Terminal</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl mb-8 text-white">
          Reasoning Across the Global R&D Landscape.
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-1 text-lg md:text-xl max-w-2xl text-white/70 leading-relaxed">
          Eliminate the workflow of manual cross-referencing. Move from raw data to technical synthesis in hours, not weeks.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
