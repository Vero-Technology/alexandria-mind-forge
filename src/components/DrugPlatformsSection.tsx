import { Search, AlertTriangle, Timer } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Search, Not Intelligence",
    description: "Both platforms return lists of records. Whether KRAS G12C is worth pursuing in pancreatic cancer requires cross-referencing trials, safety data, patents, and deal history. That is still your problem to do manually.",
  },
  {
    icon: AlertTriangle,
    title: "Their AI Inherits the Problem",
    description: "The Cortellis AI assistant has no cross-dataset reasoning. Citeline's spans 3 databases for general clinical research, but never crosses into the safety, patent, and deal data that BD teams need for asset evaluation.",
  },
  {
    icon: Timer,
    title: "Not Built for Deal Speed",
    description: "Both platforms are built for running structured research projects over days or weeks. There is no way of reaching a verdict on an asset quickly.",
  },
];

const DrugPlatformsSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
            The Landscape
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            The Problem with Drug Intelligence Platforms
          </h2>
          <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
            Cortellis and Citeline are great at indexing data, terrible at answering questions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="border border-border rounded-xl p-8 bg-card text-center"
              >
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl tracking-tight mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DrugPlatformsSection;
