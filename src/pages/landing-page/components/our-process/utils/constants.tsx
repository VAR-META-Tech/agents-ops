import codepenIcon from "@/assets/svg/codepen-icon.svg";
import dataIcon from "@/assets/svg/data-icon.svg";
import searchBookIcon from "@/assets/svg/search-book-icon.svg";
import slidersWhiteIcon from "@/assets/svg/sliders-white-icon.svg";
import terminalSquareIcon from "@/assets/svg/terminal-square-icon.svg";
import cursorClickWhiteIcon from "@/assets/svg/cursor-click-white-icon.svg";

export const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "[ Workflow Assessment ]",
    description:
      "We start with an in-depth analysis of your operations to identify automation opportunities and performance bottlenecks. Through stakeholder interviews, data audits, and ROI modeling, we define where AI agents can deliver the greatest impact.",
    icon: <img src={searchBookIcon} alt="Discovery" />,
  },
  {
    id: 2,
    title: "Design",
    subtitle: "[ Architecture Planning ]",
    description:
      "We architect the solution, outlining the agent ecosystem, orchestration model, and integration points. This phase establishes best practices for governance, human oversight, and reusable components - ensuring long-term efficiency and scalability.",
    icon: <img src={codepenIcon} alt="Design" />,
  },
  {
    id: 3,
    title: "Development",
    subtitle: "[ Building Core Agents ]",
    description:
      "Our engineers develop modular, enterprise-grade AI agents using flexible frameworks for both single and multi-agent systems. Each agent undergoes rigorous testing to ensure precision, adaptability, and seamless collaboration.",
    icon: <img src={terminalSquareIcon} alt="Development" />,
  },
  {
    id: 4,
    title: "Integration",
    subtitle: "[ Seamless Deployment ]",
    description:
      "We deploy agents into your existing systems - connecting CRMs and data pipelines through secure APIs and containerized infrastructure. Observability tools maintain transparency, compatibility, and compliance throughout the process.",
    icon: <img src={dataIcon} alt="Integration" />,
  },
  {
    id: 5,
    title: "Optimization",
    subtitle: "[ Performance Tuning ]",
    description:
      "After launch, we analyze real-world performance to fine-tune behaviors, improve adoption, and enhance productivity. Continuous A/B testing and feedback loops ensure measurable ROI and sustained operational gains.",
    icon: <img src={slidersWhiteIcon} alt="Optimization" />,
  },
  {
    id: 6,
    title: "Support",
    subtitle: "[ Governance & Maintenance ]",
    description:
      "We provide continuous monitoring, updates, and governance oversight to keep your AI agents performing at their peak. Our lifecycle management framework ensures compliance, resilience, and ongoing business alignment.",
    icon: <img src={cursorClickWhiteIcon} alt="Support" />,
  },
];
