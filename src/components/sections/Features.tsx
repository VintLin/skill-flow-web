const features = [
  {
    title: "Skill Management",
    description: "Unified management of scattered skill configurations across different agents.",
  },
  {
    title: "Workflow Clarity",
    description: "Visualize and structure your agent workflows for better understanding.",
  },
  {
    title: "Cross-Agent Compatible",
    description: "Works seamlessly with Claude Code, Cursor, Windsurf, Copilot, and more.",
  },
  {
    title: "Lightweight & Extensible",
    description: "Minimal footprint with powerful extensibility for your needs.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-medium mb-12">Core Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 bg-card border border-border rounded-lg hover:border-foreground/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
