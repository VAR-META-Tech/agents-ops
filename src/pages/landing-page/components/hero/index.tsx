import aiAgentsPlusIcon from "@/assets/svg/ai-agents-plus.svg";
import { CommonButton } from "@/components/common/common-button";
import arrowDownIcon from "@/assets/svg/arrow-down.svg";
import arrowTopRightWhiteIcon from "@/assets/svg/arrow-top-right-white.svg";
import { CommonTitle } from "@/components/common/common-title";
import { cn, handleScroll } from "@/lib/utils";
import Lottie from "lottie-react";
import heroEffects from "@/assets/lotties/hero-effects.json";

export const Hero = () => {
  return (
    <div className=" bg-[url(assets/images/linear.png)] bg-no-repeat bg-cover overflow-hidden">
      <div className="pt-20 min-w-[320px] relative">
        <div
          className={cn(
            "bg-[url(assets/images/circle-frame-white-v2.png)] bg-no-repeat bg-[size:1150px_1150px]",
            "h-[1150px] w-[1150px] top-[50%] left-[50%] translate-x-[calc(-50%)] translate-y-[calc(-50%+500px)] absolute animate-spin-slow"
          )}
        />
        <div>
          <div className="relative z-10 min-w-[320px] max-sm:px-3">
            <h1 className="text-5xl font-semibold flex items-center justify-center gap-2 max-lg:flex-col max-lg:text-3xl">
              Unlock the Power of
              <img
                className="pt-3 max-lg:w-[156px] max-lg:mb-2"
                src={aiAgentsPlusIcon}
                alt="AI Agents Plus"
              />
            </h1>
            <CommonTitle className="text-5xl text-center mt-2 max-lg:text-3xl">
              Transform Your Business Today
            </CommonTitle>
            <p className="text-2xl font-normal leading-9 text-center mt-6 max-lg:text-lg">
              AI agents can automate 60-70% of employee time spent on tasks
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10 relative z-10">
            <CommonButton
              className="min-w-32 h-11 text-sm pr-3 pl-4 gap-1 border-none"
              onClick={() => handleScroll("contact")}
            >
              <span>Contact us</span>
              <img
                className="w-5 h-5"
                src={arrowTopRightWhiteIcon}
                alt="Arrow Top Right White"
              />
            </CommonButton>
            <CommonButton
              className="min-w-32 h-11 text-sm pr-3 pl-4 gap-1"
              variant="outline"
              onClick={() => handleScroll("services")}
            >
              <span>Learn more</span>
              <img className="w-5 h-5" src={arrowDownIcon} alt="Arrow Down" />
            </CommonButton>
          </div>

          <div
            className={cn(
              "max-w-[1280px] mx-auto p-16 pt-24 h-[470px]",
              "flex items-center justify-center mt-12 relative z-10"
            )}
          >
            {/* <img src={rectangleChainIcon} alt="Rectangle Chain" /> */}
            <Lottie
              animationData={heroEffects}
              className="w-[400px] absolute top-[50%] left-[50%] translate-x-[calc(-50%+20px)] translate-y-[calc(-50%+120px)]"
            />
          </div>
          {/* <div
            className={cn(
              "bg-[url(assets/images/net-background.png)] bg-cover bg-no-repeat max-w-[1280px] mx-auto p-16 pt-24",
              "flex items-center justify-center mt-12 relative bg-white z-10 rounded-t-[50px]"
            )}
          >
            <img src={rectangleChainIcon} alt="Rectangle Chain" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
