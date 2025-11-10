import questionBookIcon from "@/assets/svg/question-book-icon.svg";
import terminalIcon from "@/assets/svg/terminal-icon.svg";
import cursorClickIcon from "@/assets/svg/cursor-click-icon.svg";
import slidersIcon from "@/assets/svg/sliders-icon.svg";

export const SERVICES = [
  {
    no: 1,
    title: "AI Agent Strategy Consulting",
    description: "From evaluating your current setup to identifying AI agent implementation opportunities, we provide tailored consulting for successful collaboration. Our AI agent consulting encompasses determining the ideal AI agent type for your needs, selecting the appropriate LLM, identifying the required prompt engineering technique, defining the necessary tech stack, assessing integration options, and more.",
    icon: <img src={questionBookIcon} alt="AI Agent Strategy Consulting" />,
  },
  {
    no: 2,
    title: "Custom AI Agent Development",
    description: "Using cutting-edge platforms such as AutoGen Studio and crewAI, we develop personalized AI agents designed specifically for your business requirements. Whether you're looking for virtual assistance, automation of tasks, or support in decision-making, our team builds AI agents that are customized for your immediate needs while remaining adaptable to future shifts in your business environment.",
    icon: <img src={terminalIcon} alt="Custom AI Agent Development" />,
  },
  {
    no: 3,
    title: "AI Agent Integration",
    description: "Whether you prefer single-agent or multi-agent systems, we ensure your solution’s seamless integration into your workflows. Using advanced techniques in API architecture, microservices, and containerization, we streamline data flow, reduce latency, and foster smooth collaboration between AI agents and your current systems, establishing an efficient workflow.",
    icon: <img src={cursorClickIcon} alt="AI Agent Integration" />,
  },
  {
    no: 4,
    title: "Continuous Improvement and Maintenance",
    description: "We focus on continuous improvement and maintenance, ensuring the AI agent continuously iterates and maintains the agent workflow. Our developers engage in regular model fine-tuning and performance monitoring to keep the AI solution at its peak efficiency. This approach guarantees that your business benefits from consistently optimized and up-to-date AI capabilities.",
    icon: <img src={slidersIcon} alt="Continuous Improvement and Maintenance" />,
  },
];
