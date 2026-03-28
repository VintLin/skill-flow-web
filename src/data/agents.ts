export interface Agent {
  id: string;
  name: string;
  icon: string;
}

export const agents: Agent[] = [
  { id: "claude-code", name: "Claude Code", icon: "/agents/claude-code.svg" },
  { id: "cursor", name: "Cursor", icon: "/agents/cursor.svg" },
  { id: "windsurf", name: "Windsurf", icon: "/agents/windsurf.svg" },
  { id: "copilot", name: "GitHub Copilot", icon: "/agents/github-copilot.svg" },
  { id: "gemini-cli", name: "Gemini CLI", icon: "/agents/gemini-cli.svg" },
  { id: "codex", name: "OpenAI Codex", icon: "/agents/codex.png" },
  { id: "opencode", name: "OpenCode", icon: "/agents/opencode.svg" },
  { id: "kilo-code", name: "Kilo Code", icon: "/agents/kilo-code.svg" },
  { id: "trae", name: "Trae", icon: "/agents/trae.svg" },
  { id: "antigravity", name: "Antigravity", icon: "/agents/antigravity.svg" },
];
