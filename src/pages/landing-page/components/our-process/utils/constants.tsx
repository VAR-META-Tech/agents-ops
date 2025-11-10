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
      "Begin with a deep dive into your business needs. We assess current workflows, identify pain points, and map AI agent opportunities—e.g., automating 60-70% of repetitive tasks. This phase includes stakeholder interviews, data audits, and ROI projections to ensure alignment with enterprise goals.",
    icon: <img src={searchBookIcon} alt="Discovery" />,
  },
  {
    id: 2,
    title: "Design",
    subtitle: "[ Architecture Planning ]",
    description:
      "Develop the agent’s blueprint, integrating multi-agent orchestration for collaborative systems (e.g., hierarchical agents where one plans and others carry out subtasks). We outline tools, APIs, and human-in-the-loop safeguards, developing best practices for reusable components to enhance efficiency by 20-40%.",
    icon: <img src={codepenIcon} alt="Design" />,
  },
  {
    id: 3,
    title: "Development",
    subtitle: "[ Building Core Agents ]",
    description:
      "Develop the agents using flexible frameworks that support both single and multi-agent configurations. Emphasize modular coding practices and ensure thorough testing for precision and edge cases. The agents should be capable of understanding and handling independently, while also incorporating feedback mechanisms.",
    icon: <img src={terminalSquareIcon} alt="Development" />,
  },
  {
    id: 4,
    title: "Integration",
    subtitle: "[ Seamless Deployment ]",
    description:
      "Connect agents to your existing systems (e.g., CRMs, APIs, or cloud platforms). We handle secure data flows and compatibility, mitigating risks like inaccuracies (noted by 52% of organizations in McKinsey surveys) through observability tools.",
    icon: <img src={dataIcon} alt="Integration" />,
  },
  {
    id: 5,
    title: "Optimization",
    subtitle: "[ Performance Tuning ]",
    description:
      "Refine agents post-launch with real-world data, A/B testing, and iterations aiming for 95%+ user acceptance. Incorporate McKinsey-recommended metrics for productivity gains (e.g., 3.0x annual lift) and scalability evaluations.",
    icon: <img src={slidersWhiteIcon} alt="Optimization" />,
  },
  {
    id: 6,
    title: "Support",
    subtitle: "[ Governance & Maintenance ]",
    description:
      "Provide ongoing monitoring, updates, and governance frameworks for compliance, bias mitigation, and long-term sustainability. This ensures agents evolve with your business, supporting hybrid human-AI teams and reducing cycle times by 30-50%.",
    icon: <img src={cursorClickWhiteIcon} alt="Support" />,
  },
];
