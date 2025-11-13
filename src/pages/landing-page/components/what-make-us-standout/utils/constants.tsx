import zapFastIcon from "@/assets/svg/zap-fast-icon.svg";
import futureProofIcon from "@/assets/svg/future-proof-icon.svg";
import cursorClickWhiteIcon from "@/assets/svg/cursor-click-white-icon.svg";
import buildingIcon from "@/assets/svg/building-icon.svg";

export const FEATURES = [
  {
    title: "High-density Talents",
    description:
      "Led by two PhDs and one MS in AI and NLP, our team brings deep research expertise and hands-on engineering excellence - ensuring every solution is both scientifically rigorous and commercially effective.",
    icon: (
      <img
        className="w-16 h-16 min-w-16 min-h-16"
        src={cursorClickWhiteIcon}
        alt="Zap Fast"
      />
    ),
  },
  {
    title: "Speed",
    description:
      "From concept to deployment in weeks, not months. Our streamlined, natural language–driven approach accelerates implementation and shortens time-to-value.",
    icon: (
      <img
        className="w-16 h-16 min-w-16 min-h-16"
        src={zapFastIcon}
        alt="Future Proof"
      />
    ),
  },
  {
    title: "Flexibility",
    description:
      "Built to adapt. Our modular architecture integrates with any environment - on-premise, cloud, or hybrid - scaling seamlessly as your needs evolve.",
    icon: (
      <img
        className="w-16 h-16 min-w-16 min-h-16"
        src={futureProofIcon}
        alt="Cursor Click White"
      />
    ),
  },
  {
    title: "Enterprise-grade Quality",
    description:
      "Designed for reliability, security, and compliance. Every AI agent meets enterprise benchmarks for performance, governance, and trust.",
    icon: (
      <img
        className="w-16 h-16 min-w-16 min-h-16"
        src={buildingIcon}
        alt="Building"
      />
    ),
  },
];
