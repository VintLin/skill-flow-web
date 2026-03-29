const steps = [
  {
    number: "01",
    title: "Define Skills",
    description: "Define or collect skills for your AI agents.",
  },
  {
    number: "02",
    title: "Organize",
    description: "Structure and manage your skills in one place.",
  },
  {
    number: "03",
    title: "Integrate",
    description: "Connect with your favorite AI coding agents.",
  },
  {
    number: "04",
    title: "Share & Reuse",
    description: "Scale your workflow and share with your team.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-medium mb-12">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="space-y-3">
            <div className="text-4xl font-medium text-muted-foreground/50">{step.number}</div>
            <h3 className="text-xl font-medium">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
