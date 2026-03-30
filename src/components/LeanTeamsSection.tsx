import { Users, Zap, TrendingUp } from "lucide-react";

const points = [
  {
    icon: Users,
    stat: "1 analyst",
    label: "does the work of 5",
    description: "Alexandria replaces the manual cross-referencing, data assembly, and synthesis steps that typically require a full research team.",
  },
  {
    icon: Zap,
    stat: "Hours",
    label: "not weeks",
    description: "Queries that used to require days of spreadsheet work, multiple platform logins, and senior review are answered in a single prompt.",
  },
  {
    icon: TrendingUp,
    stat: "No training",
    label: "required",
    description: "Natural language in, structured intelligence out. New team members are productive on day one. No function codes, no certifications, no onboarding cost.",
  },
];

const LeanTeamsSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
            Built for Lean Teams
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Enterprise Intelligence, Startup Team Size
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Whether you're a two-person BD team or a 200-person R&D department, Alexandria scales to match.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="border border-border rounded-xl p-8 bg-card">
                <Icon className="w-5 h-5 text-primary mb-6" strokeWidth={1.5} />
                <div className="mb-4">
                  <span className="text-3xl font-display text-foreground">{item.stat}</span>
                  <span className="text-sm text-muted-foreground ml-2">{item.label}</span>
                </div>
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

export default LeanTeamsSection;
