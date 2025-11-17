import zapFastIcon from "@/assets/svg/zap-fast-black.svg";
import uploadIcon from "@/assets/svg/upload-black.svg";
import cursorClickIcon from "@/assets/svg/cursor-click-black.svg";
import buildingIcon from "@/assets/svg/building-black.svg";

export const FEATURES = [
  {
    title: "Speed",
    description:
      "We use natural language instructions to set up new workflows in minutes, not months.",
    icon: (
      <img
        className="w-16 h-16 min-w-16 min-h-16"
        src={zapFastIcon}
        alt="Zap Fast"
      />
    ),
  },
  {
    title: "High-density Talents",
    description:
      "Using our proprietary model, we provide more accurate and reliable workflows than competitors.",
    icon: (
      <img
        className="w-16 h-16 min-w-16 min-h-16"
        src={cursorClickIcon}
        alt="Cursor Click"
      />
    ),
  },
  {
    title: "Flexibility",
    description:
      "Our workflows are resilient to changes in your environment, and require no maintenance or upkeep.",
    icon: (
      <img
        className="w-16 h-16 min-w-16 min-h-16"
        src={uploadIcon}
        alt="Upload"
      />
    ),
  },
  {
    title: "Enterprise-grade Quality",
    description:
      "Unlock value across your organization—empowering every department, from HR to Operations.",
    icon: (
      <img
        className="w-16 h-16 min-w-16 min-h-16"
        src={buildingIcon}
        alt="Building"
      />
    ),
  },
];
