import { CommonButton } from "@/components/common/common-button";
import agentOpsLogo from "@/assets/svg/agentsops-logo.svg";
import arrowUpRightIcon from "@/assets/svg/arrow-up-right.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementTop =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - 92,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-between items-center max-w-[1280px] h-[92px] mx-auto max-[1330px]:px-6 ">
      <div>
        <img
          src={agentOpsLogo}
          className="min-w-[125px] h-[24px]"
          alt="AgentOps"
        />
      </div>

      <div className="flex items-center justify-end gap-4 w-full max-[1330px]:justify-between max-[1330px]:ml-12 max-[930px]:justify-end">
        <ul className="flex items-center gap-5 font-medium text-base max-[930px]:hidden">
          <li>
            <span
              onClick={() => handleScroll("services")}
              className="cursor-pointer"
            >
              Services
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("expertise")}
              className="cursor-pointer"
            >
              Expertise
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("our-team")}
              className="cursor-pointer"
            >
              Our Team
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("how-it-work")}
              className="cursor-pointer"
            >
              How it works
            </span>
          </li>
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="">
            <CommonButton
              className="rounded-lg w-9 h-9 !p-2 !flex !items-center !justify-center !hidden max-[930px]:!block"
              variant="outline"
            >
              <MenuIcon />
            </CommonButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-white border border-[#E6E6E6] rounded-3xl p-4 mt-3 z-50"
            align="start"
          >
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer p-1 text-base hover:bg-[#dadada]">
                <span onClick={() => handleScroll("services")}>Services</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-1 text-base hover:bg-[#dadada]">
                <span onClick={() => handleScroll("expertise")}>Expertise</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-1 text-base hover:bg-[#dadada]">
                <span onClick={() => handleScroll("our-team")}>Our Team</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-1 text-base hover:bg-[#dadada]">
                <span onClick={() => handleScroll("how-it-work")}>
                  How it works
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <CommonButton
          className="ml-5 min-w-32 h-11 text-sm pr-3 pl-4 gap-1 max-[930px]:ml-0 max-[930px]:h-9"
          variant="outline"
        >
          <span>Contact us</span>
          <img
            className="w-5 h-5"
            src={arrowUpRightIcon}
            alt="Arrow Up Right"
          />
        </CommonButton>
      </div>
    </div>
  );
};
