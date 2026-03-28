export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is skill-flow?",
    answer:
      "skill-flow is a universal skills manager for AI coding agents. It provides a unified way to install, manage, and share skills across different AI agents like Claude Code, Cursor, Windsurf, and more.",
  },
  {
    question: "Who is skill-flow for?",
    answer:
      "skill-flow is designed for developers who use AI coding agents and want to organize, share, and reuse their skills across different agents and projects. Whether you're a solo developer or part of a team, skill-flow helps you maintain consistent workflows.",
  },
  {
    question: "Does skill-flow require specific models or platforms?",
    answer:
      "No, skill-flow is agent-agnostic. It works with any AI coding agent that supports external skills or prompts. The agents themselves handle the actual AI processing.",
  },
  {
    question: "Is skill-flow open source?",
    answer:
      "Yes, skill-flow is completely open source. You can find the source code on GitHub and contribute to its development.",
  },
  {
    question: "Will you support more agents in the future?",
    answer:
      "Yes, we're constantly working on adding support for new agents. Our goal is to make skill-flow the universal standard for AI agent skill management.",
  },
];
