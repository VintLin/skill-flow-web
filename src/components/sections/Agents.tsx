import Image from "next/image";

const agents = [
  { name: "Claude Code", icon: "/icons/claude-code.svg" },
  { name: "Cursor", icon: "/icons/cursor.svg" },
  { name: "Windsurf", icon: "/icons/windsurf.svg" },
  { name: "GitHub Copilot", icon: "/icons/copilot.svg" },
  { name: "Gemini CLI", icon: "/icons/gemini.svg" },
  { name: "Codex", icon: "/icons/codex.svg" },
  { name: "OpenCode", icon: "/icons/opencode.svg" },
  { name: "Kilo Code", icon: "/icons/kilo.svg" },
  { name: "Trae", icon: "/icons/trae.svg" },
  { name: "Antigravity", icon: "/icons/antigravity.svg" },
];

export function Agents() {
  return (
    <section id="agents" className="w-full max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-medium mb-12">Supported Agents</h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-6 animate-scroll">
          {[...agents, ...agents].map((agent, index) => (
            <div
              key={`${agent.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-4 py-2 bg-black rounded-full border border-border/50 hover:border-border transition-colors"
            >
              <Image
                src={agent.icon}
                alt={agent.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <p className="text-sm font-medium whitespace-nowrap">{agent.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
