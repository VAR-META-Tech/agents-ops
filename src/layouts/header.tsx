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
  return (
    <div className="flex justify-between items-center max-w-[1280px] h-[92px] mx-auto max-[1330px]:px-6 ">
      <div>
        <img src={agentOpsLogo} className="min-w-[125px] h-[24px]" alt="AgentOps" />
      </div>

      <div className="flex items-center justify-end gap-4 w-full max-[1330px]:justify-between max-[1330px]:ml-12 max-[930px]:justify-end">
        <ul className="flex items-center gap-5 font-medium text-base max-[930px]:hidden">
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Expertise</a>
          </li>
          <li>
            <a href="/">Our Team</a>
          </li>
          <li>
            <a href="/">How it works</a>
          </li>
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="">
            <CommonButton className="rounded-lg w-9 h-9 !p-2 !flex !items-center !justify-center !hidden max-[930px]:!block" variant="outline">
              <MenuIcon />
            </CommonButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-white border border-[#E6E6E6] rounded-3xl p-4 mt-3 z-50"
            align="start"
          >
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer p-1 text-base hover:bg-[#dadada]">
                <a href="/">Services</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-1 text-base hover:bg-[#dadada]">
                <a href="/">Expertise</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-1 text-base hover:bg-[#dadada]">
                <a href="/">Our Team</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-1 text-base hover:bg-[#dadada]">
                <a href="/">How it works</a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <CommonButton
          className="ml-5 min-w-32 h-11 text-sm px-3 max-[930px]:ml-0 max-[930px]:h-9"
          variant="outline"
        >
          <span className="pt-1">Contact us</span>
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
