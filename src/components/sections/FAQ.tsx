import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is skill-flow?",
    answer: "skill-flow is a universal management system for AI agent skills. It helps you organize, share, and reuse skills across different AI coding agents like Claude Code, Cursor, and more.",
  },
  {
    question: "Who should use skill-flow?",
    answer: "skill-flow is designed for developers and teams who work with multiple AI coding agents and want to maintain consistent, reusable skills across their workflow.",
  },
  {
    question: "Is it dependent on specific models or platforms?",
    answer: "No, skill-flow is designed to be platform-agnostic and works with various AI coding agents. It focuses on skill management rather than being tied to any specific model or platform.",
  },
  {
    question: "Is it open source?",
    answer: "Yes, skill-flow is open source and available on GitHub. Contributions and feedback are welcome.",
  },
  {
    question: "Will there be documentation and more integrations?",
    answer: "Yes, we're actively working on comprehensive documentation and expanding support for more AI agents and ecosystem integrations.",
  },
];

export function FAQ() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-medium mb-12">FAQ</h2>
      
      <Accordion className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/70">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
