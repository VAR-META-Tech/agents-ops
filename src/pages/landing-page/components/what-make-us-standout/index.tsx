import { CommonTitle } from "@/components/common/common-title";
import { FEATURES } from "./utils/constants";
import { cn } from "@/lib/utils";
import CommonAnimationContainer from "@/components/common/common-animation-container";

export const WhatMakesUsStandout = () => {
  return (
    <div
      className={cn(
        "bg-[#1E1E1E] bg-[url(assets/images/right-linear.png),_url(assets/images/circle-frame-white.png)]",
        "bg-no-repeat bg-[length:100%_100%,1100px_1100px] bg-[position:calc(50%+500px)_0,calc(50%+750px)_112px]"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-16 py-28 text-white">
        <div className="mb-16 py-6">
          <div className="mb-3 max-[930px]:text-base max-[930px]:mb-0">
            [ Our Strength ]
          </div>
          <CommonTitle className="max-[930px]:text-3xl">
            What Makes Us Standout
          </CommonTitle>
        </div>

        <div className="flex flex-col gap-16">
          {FEATURES.map((feature, index) => (
            <CommonAnimationContainer
              key={index}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <div key={index} className="flex items-start gap-6">
                <div>{feature.icon}</div>
                <div className="max-w-[524px]">
                  <div className="text-2xl font-semibold mb-3 max-[980px]:text-xl">
                    {feature.title}
                  </div>
                  <div className="text-xl font-normal leading-8 max-[980px]:text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
