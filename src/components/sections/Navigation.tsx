import Image from "next/image";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Skill Flow" width={32} height={32} className="w-8 h-8" />
            <span className="text-lg font-medium">Skill Flow</span>
          </a>
        </div>
        
        <nav className="flex items-center gap-6 text-sm">
          <a href="#features" className="text-foreground/60 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#agents" className="text-foreground/60 hover:text-foreground transition-colors">
            Agents
          </a>
          <a href="https://github.com/VintLin/skill-flow" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
