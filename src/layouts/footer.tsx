// import React from "react";
import agentsOpsLogoWhite from "@/assets/images/agents-ops-logo-white.png";
import locationIcon from "@/assets/svg/location-icon.svg";
import phoneIcon from "@/assets/svg/phone-icon.svg";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <div className="bg-[#001344] py-16 px-6 text-white">
      <div className="max-w-[1280px] mx-auto min-w-[380px] flex justify-between max-[1140px]:flex-col">
        <div className="flex flex-col items-start justify-between">
          <img className="mb-12" src={agentsOpsLogoWhite} alt="AgentOps" />

          <div
            className={cn(
              "flex flex-col items-start gap-7 max-[1140px]:grid",
              "max-[1140px]:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] max-[1140px]:w-full max-[1140px]:gap-10 max-[1140px]:mb-10"
            )}
          >
            <div>
              <div className="flex items-center gap-1 mb-2">
                <img src={locationIcon} alt="Location" />
                <span className="font-semibold text-xl">Hanoi Head Office</span>
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                16th floor, HL Tower 82 Duy
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                Tan, Dich Vong Ward, Cau Giay, Hanoi
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-2">
                <img src={locationIcon} alt="Location" />
                <span className="font-semibold text-xl">Da Nang</span>
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                68 Xo Viet Nghe Tinh,
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                Hoa Cuong Nam, Cam Le, Da Nang
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-2">
                <img src={phoneIcon} alt="Location" />
                <span className="font-semibold text-xl">Contact</span>
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                +84 96 450 83 84
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] w-full max-[1280px]:max-w-[700px]">
          <div className="text-[#7C89AE] font-semibold text-2xl mb-4">
            Ready to start your build?
          </div>

          <div className="text-4xl font-semibold leading-12 mb-14">
            Contact@var-meta.com
          </div>

          <ul className="text-base leading-[26px] font-normal flex flex-col gap-3">
            <li>Services</li>
            <li>Expertise</li>
            <li>Our Team</li>
            <li>How it works</li>
          </ul>

          <div className="flex items-center justify-between text-base leading-[26px] font-normal mt-[70px] max-[700px]:flex-col max-[700px]:items-start gap-2">
            <div>©2025 Var-meta All Rights Serviced</div>

            <div className="flex gap-4">
              <div>Terms and Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
