export interface Skill {
  id: string;
  label: string;
  description?: string;
  isEnabled: boolean;
}

export interface Target {
  id: string;
  label: string;
  shortLabel: string;
  isEnabled: boolean;
}

export interface GroupCard {
  id: string;
  title: string;
  subtitle: string;
  metaLine: string;
  isPinned: boolean;
  skills: Skill[];
  targets: Target[];
}
