import { GuiPreview } from "./GuiPreview";

export function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 md:py-40 min-h-screen">
      <GuiPreview />
      <div className="max-w-4xl space-y-8">
        <div className="space-y-4">
            <div className="text-[15px] lg:text-[19px] tracking-tight font-mono font-medium uppercase text-foreground/60 mb-4">
              Universal AI Agent Skills
            </div>
            <pre className="text-[12px] lg:text-[15px] tracking-[-1px] leading-[125%] text-foreground select-none whitespace-pre font-[family-name:'Fira_Mono']">
{`███████╗██╗  ██╗██╗██╗     ██╗         ███████╗██╗      ██████╗ ██╗    ██╗
██╔════╝██║ ██╔╝██║██║     ██║         ██╔════╝██║     ██╔═══██╗██║    ██║
███████╗█████╔╝ ██║██║     ██║         █████╗  ██║     ██║   ██║██║ █╗ ██║
╚════██║██╔═██╗ ██║██║     ██║         ██╔══╝  ██║     ██║   ██║██║███╗██║
███████║██║  ██╗██║███████╗███████╗    ██║     ███████╗╚██████╔╝╚███╔███╔╝
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝    ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝`}
            </pre>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Install, manage, and share skills across every major coding agent — Claude Code, Cursor, Copilot, and more.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/VintLin/skill-flow"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View on GitHub
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent/10 transition-colors"
            >
              See Features
            </a>
          </div>
        </div>
    </section>
  );
}
