import { CommonTitle } from "@/components/common/common-title";
import techStackImage from "@/assets/images/tech-stack.png";
import { Separator } from "@/components/ui/separator";

export const TechStack = () => {
  return (
    <div className="bg-white py-48 px-6 min-w-[320px]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center max-[1250px]:flex-col">
        <CommonTitle className="max-[980px]:text-3xl">
          Our Techstack
        </CommonTitle>

        <Separator
          className="!h-[216px] ml-12 max-[1250px]:hidden"
          orientation="vertical"
        />

        <Separator
          className="hidden max-[1250px]:block my-12"
          orientation="horizontal"
        />

        <img src={techStackImage} alt="Tech Stack" />
      </div>
    </div>
  );
};
