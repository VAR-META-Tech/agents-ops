import questionBookIcon from "@/assets/svg/question-book-icon.svg";
import terminalIcon from "@/assets/svg/terminal-icon.svg";
import cursorClickIcon from "@/assets/svg/cursor-click-icon.svg";
import slidersIcon from "@/assets/svg/sliders-icon.svg";

export const SERVICES = [
  {
    no: 1,
    title: "AI Agent Strategy Consulting",
    description:
      "We help enterprises design an AI agent roadmap that aligns with their business objectives. From assessing current systems to defining governance, selecting the optimal agent architecture and LLM foundation, we ensure your AI initiatives are scalable, secure, and strategically sound.",
    icon: <img src={questionBookIcon} alt="AI Agent Strategy Consulting" />,
  },
  {
    no: 2,
    title: "Custom AI Agent Development",
    description:
      "We build production-grade AI agents engineered for performance and adaptability. Leveraging advanced frameworks such as AutoGen Studio and crewAI, our solutions go beyond automation - enabling intelligent assistants, decision-support tools, and workflow optimizers that drive efficiency and innovation.",
    icon: <img src={terminalIcon} alt="Custom AI Agent Development" />,
  },
  {
    no: 3,
    title: "AI Agent Integration",
    description:
      "Our engineers integrate AI agents seamlessly into complex enterprise environments. Through secure API orchestration, microservices, and containerized infrastructure, we connect your AI systems and data pipelines into a unified, intelligent ecosystem.",
    icon: <img src={cursorClickIcon} alt="AI Agent Integration" />,
  },
  {
    no: 4,
    title: "Continuous Improvement and Maintenance",
    description:
      "AI performance evolves over time - so do we. We keep your AI agents performing at their best through continuous monitoring, fine-tuning, and model optimization. Our proactive lifecycle management ensures your solutions stay reliable, compliant, and aligned with your strategic priorities.",
    icon: (
      <img src={slidersIcon} alt="Continuous Improvement and Maintenance" />
    ),
  },
];
