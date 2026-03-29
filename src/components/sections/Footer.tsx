export function Footer() {
  return (
    <footer className="w-full border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-medium">skill-flow</h3>
            <p className="text-sm text-muted-foreground">
              Universal AI Agent Skills Management
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="https://github.com/VintLin/skill-flow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:underline transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://vintlin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:underline transition-colors"
            >
              VintLin
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 VintLin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
