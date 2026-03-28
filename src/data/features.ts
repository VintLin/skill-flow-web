export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: "organization",
    title: "Skill Organization",
    description:
      "Centralize and manage all your skills in one place. No more hunting through config directories or losing track of which agent has which skill.",
    icon: "folder",
  },
  {
    id: "workflow",
    title: "Workflow Clarity",
    description:
      "Structure and visualize your skill workflows. Understand at a glance how skills connect and flow through your development process.",
    icon: "git-branch",
  },
  {
    id: "compatibility",
    title: "Cross-Agent Compatibility",
    description:
      "Works seamlessly with Claude Code, Cursor, Windsurf, GitHub Copilot, and more. Share skills across all your coding agents.",
    icon: "users",
  },
  {
    id: "extensible",
    title: "Lightweight & Extensible",
    description:
      "Minimal overhead with maximum flexibility. Built to be lean enough for personal projects but powerful enough for team workflows.",
    icon: "zap",
  },
];
