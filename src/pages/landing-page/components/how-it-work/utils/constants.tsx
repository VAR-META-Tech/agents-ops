import usePrompt from "@/assets/images/use-prompt.png";
import output from "@/assets/images/output.png";
import agentsProcess from "@/assets/images/agents-process.png";
  
export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "User Prompt",
    image: <img className="w-full h-[223px] object-cover rounded-2xl" src={usePrompt} alt="User Prompt" />,
  },
  {
    id: 2,
    title: "Agent Process",
    image: <img className="w-full h-[223px] object-cover rounded-2xl" src={agentsProcess} alt="Agent Process" />,
  },
  {
    id: 3,
    title: "Output",
    image: <img className="w-full h-[223px] object-cover rounded-2xl" src={output} alt="Output" />,
  },
];
