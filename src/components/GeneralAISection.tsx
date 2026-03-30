import { XCircle, HelpCircle, Shield } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "No Ground Truth",
    description: (
      <>
        General LLMs generate answers from parametric memory; there's no structured source to anchor to.{" "}
        <span className="font-semibold text-foreground">47% of AI-generated medical citations are fabricated.</span>
      </>
    ),
  },
  {
    icon: HelpCircle,
    title: "They Don't Have the Right Data",
    description: "The datasets that actually inform drug decisions (FAERS, Orange Book, AACT, EMA EPARs) are not in their training data.",
  },
  {
    icon: Shield,
    title: "Data Security Risk",
    description: (
      <>
        <span className="font-semibold text-foreground">13 of the top 20</span> pharma companies have banned ChatGPT, citing concerns that sensitive internal data could leak to competitors.
      </>
    ),
  },
];

const GeneralAISection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
            Why Not General AI
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            The Problem with General AI
          </h2>
          <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
            ChatGPT and Perplexity are not built for pharma
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

export default GeneralAISection;
