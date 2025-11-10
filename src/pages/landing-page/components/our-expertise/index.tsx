import React from "react";
import { CommonTitle } from "@/components/common/common-title";
import { CommonButton } from "@/components/common/common-button";
import arrowUpRightIcon from "@/assets/svg/arrow-up-right.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TABS, TABS_CONTENT } from "./utils/contants";
import { CommonChip } from "@/components/common/common-chip";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const OurExpertise = () => {
  const [activeTab, setActiveTab] = React.useState("expertise-1");

  return (
    <div>
      <div className="max-w-[1280px] mx-auto py-14">
        <div className="flex items-center justify-between px-6">
          <div className="pl-6">
            <div className="mb-3 max-[930px]:text-base max-[930px]:mb-0">
              [ Our Strength ]
            </div>
            <CommonTitle className="max-[930px]:text-3xl">
              Our Expertise
            </CommonTitle>
          </div>

          <CommonButton
            className="min-w-40 pr-3 pl-4 h-11 text-base font-medium leading-6 max-[930px]:text-sm max-[930px]:h-9 max-[930px]:min-w-36 max-[510px]:min-w-9 max-[510px]:p-2"
            variant="outline"
            value={activeTab}
          >
            <span className="max-[510px]:hidden">Learn more</span>
            <img
              className="w-5 h-5"
              src={arrowUpRightIcon}
              alt="Arrow Up Right"
            />
          </CommonButton>
        </div>

        <div className="bg-white rounded-[48px] border border-[#E6E6E6] mt-10 max-[1400px]:mx-6 max-[1100px]:hidden">
          <Tabs
            className="flex-row justify-between bg-[url(assets/images/net-background.png)] bg-cover bg-no-repeat"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="flex-col items-start bg-transparent p-10 h-[595px]">
              {TABS.map((tab, index) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    "text-xl font-normal w-[576px] pl-6 justify-start leading-8 data-[state=active]:font-semibold border-0 shadow-none! bg-transparent! gap-8 group",
                    "data-[state=active]:bg-[url(assets/images/bg-polygon.png)] data-[state=active]:bg-no-repeat data-[state=active]:bg-cover",
                    "max-[1280px]:w-[525px] max-[1280px]:gap-2 max-[1280px]:rounded-3xl"
                  )}
                >
                  <CommonChip className="w-12 h-12 bg-white">
                    {index + 1}
                  </CommonChip>
                  <motion.div
                    className="origin-left max-[1400px]:text-xl"
                    viewport={{ once: false }}
                    animate={{ scale: tab.value === activeTab ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                    initial={false}
                  >
                    {tab.label}
                  </motion.div>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="p-6">
              {TABS_CONTENT.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="max-w-[576px] bg-white border border-[#E6E6E6] rounded-3xl h-full p-8"
                >
                  <motion.div
                    key={tab.value}
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <div className="text-4xl font-semibold leading-12 mb-4 max-[1400px]:text-2xl">
                      {tab.title}
                    </div>
                    <div className="text-xl font-normal leading-8 max-[1400px]:text-lg">
                      {tab.description}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        <div className="bg-white rounded-3xl border border-[#E6E6E6] mt-10 mx-6 hidden max-[1100px]:block min-w-[380px]">
          <Tabs
            className="flex justify-between bg-[url(assets/images/net-background.png)] bg-cover bg-no-repeat"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="flex items-start bg-transparent p-10">
              {TABS.map((tab, index) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    "text-xl font-normal justify-start leading-8 data-[state=active]:font-semibold border-0 shadow-none! bg-transparent! gap-8 group pl-1"
                  )}
                >
                  <CommonChip className="w-12 h-12 bg-white group-data-[state=active]:bg-[#1E1E1E] group-data-[state=active]:text-white transition-colors duration-300">
                    {index + 1}
                  </CommonChip>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="p-6 pt-0">
              {TABS_CONTENT.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="max-w-[576px] bg-white border border-[#E6E6E6] rounded-3xl h-full p-8 max-[1400px]:max-w-full"
                >
                  <motion.div
                    key={tab.value}
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <div className="text-4xl font-semibold leading-12 mb-4 max-[1400px]:text-2xl">
                      {tab.title}
                    </div>
                    <div className="text-xl font-normal leading-8 max-[1400px]:text-lg">
                      {tab.description}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
