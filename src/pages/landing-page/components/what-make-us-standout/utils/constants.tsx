import zapFastIcon from "@/assets/svg/zap-fast-icon.svg";
import futureProofIcon from "@/assets/svg/future-proof-icon.svg";
import cursorClickWhiteIcon from "@/assets/svg/cursor-click-white-icon.svg";
import buildingIcon from "@/assets/svg/building-icon.svg";

export const FEATURES = [
  {
    title: "Get up and running quickly",
    description:
      "We use natural language instructions to set up new workflows in minutes, not months.",
    icon: <img className="w-16 h-16" src={zapFastIcon} alt="Zap Fast" />,
  },
  {
    title: "Accurate & reliable",
    description:
      "Using our proprietary model, we provide more accurate and reliable workflows than competitors.",
    icon: <img className="w-16 h-16" src={cursorClickWhiteIcon} alt="Future Proof" />,
  },
  {
    title: "Future-proof",
    description:
      "Our workflows are resilient to changes in your environment, and require no maintenance or upkeep.",
    icon: <img className="w-16 h-16" src={futureProofIcon} alt="Cursor Click White" />,
  },
  {
    title: "Enterprise wide",
    description:
      "Unlock value across your organization—empowering every department, from HR to Operations.",
    icon: <img className="w-16 h-16" src={buildingIcon} alt="Building" />,
  },
];