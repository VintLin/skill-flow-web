export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "GUI Preview", href: "#gui-preview" },
  { label: "Agents", href: "#agents" },
  { label: "Changelog", href: "#changelog" },
  { label: "Docs", href: "#docs" },
];

export const siteConfig = {
  name: "skill-flow",
  description: "Universal AI Agent Skills",
  github: "https://github.com/VintLin/skill-flow",
};
