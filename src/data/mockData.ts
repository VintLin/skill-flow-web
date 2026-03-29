import type { GroupCard } from '@/types/skillflow';

export const mockData: GroupCard[] = [
  {
    id: "pbakaus-impeccable",
    title: "impeccable",
    subtitle: "by pbakaus",
    metaLine: "41 skills · Updated 2 hours ago",
    isPinned: true,
    skills: [
      { id: "adapt", label: "adapt", description: "Adapt designs to work across different screen sizes", isEnabled: true },
      { id: "animate", label: "animate", description: "Add purposeful animations and micro-interactions", isEnabled: true },
      { id: "arrange", label: "arrange", description: "Improve layout, spacing, and visual rhythm", isEnabled: true },
      { id: "audit", label: "audit", description: "Run technical quality checks", isEnabled: false },
      { id: "bolder", label: "bolder", description: "Amplify safe designs to be more visually interesting", isEnabled: true },
      { id: "clarify", label: "clarify", description: "Improve unclear UX copy and microcopy", isEnabled: false },
      { id: "colorize", label: "colorize", description: "Add strategic color to monochromatic features", isEnabled: true },
      { id: "critique", label: "critique", description: "Evaluate design from a UX perspective", isEnabled: true },
      { id: "polish", label: "polish", description: "Final quality pass before shipping", isEnabled: true },
      { id: "typeset", label: "typeset", description: "Improve typography", isEnabled: true }
    ],
    targets: [
      { id: "claude-code", label: "claude-code", shortLabel: "CC", isEnabled: true }
    ]
  },
  {
    id: "garrytan-gstack",
    title: "gstack",
    subtitle: "by garrytan",
    metaLine: "29 skills · Updated 5 hours ago",
    isPinned: true,
    skills: [
      { id: "browse", label: "browse", description: "Browse web content", isEnabled: true },
      { id: "autoplan", label: "autoplan", description: "Automatic planning", isEnabled: true },
      { id: "canary", label: "canary", description: "Canary deployments", isEnabled: true },
      { id: "careful", label: "careful", description: "Careful mode for critical operations", isEnabled: true },
      { id: "investigate", label: "investigate", description: "Investigate issues", isEnabled: true },
      { id: "qa", label: "qa", description: "Quality assurance", isEnabled: true },
      { id: "review", label: "review", description: "Code review", isEnabled: true },
      { id: "ship", label: "ship", description: "Ship to production", isEnabled: true }
    ],
    targets: [
      { id: "codex", label: "codex", shortLabel: "CDX", isEnabled: true },
      { id: "opencode", label: "opencode", shortLabel: "OC", isEnabled: true }
    ]
  },
  {
    id: "obra-superpowers",
    title: "superpowers",
    subtitle: "by obra",
    metaLine: "14 skills · Updated 1 day ago",
    isPinned: false,
    skills: [
      { id: "brainstorming", label: "brainstorming", description: "Brainstorming sessions", isEnabled: true },
      { id: "executing-plans", label: "executing-plans", description: "Execute development plans", isEnabled: true },
      { id: "systematic-debugging", label: "systematic-debugging", description: "Systematic debugging", isEnabled: true },
      { id: "using-git-worktrees", label: "using-git-worktrees", description: "Use git worktrees", isEnabled: true },
      { id: "writing-plans", label: "writing-plans", description: "Write development plans", isEnabled: true }
    ],
    targets: [
      { id: "opencode", label: "opencode", shortLabel: "OC", isEnabled: true }
    ]
  }
];
