import React from "react";
import { CommonTitle } from "@/components/common/common-title";
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
          <div className="pl-6 max-[676px]:pl-3">
            <CommonTitle className="max-[930px]:text-3xl">
              Our Expertise
            </CommonTitle>
          </div>
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
                  <CommonChip className="w-12 min-w-12 h-12 min-h-12 bg-white">
                    {index + 1}
                  </CommonChip>
                  <motion.div
                    className="origin-left text-2xl max-[1400px]:text-xl"
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
                    <div className="text-lg font-normal leading-8 max-[1400px]:text-lg">
                      {tab.description}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        <div className="bg-white rounded-3xl border border-[#E6E6E6] mt-10 mx-6 hidden max-[1100px]:block min-w-[320px]">
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
                  <CommonChip
                    className={cn(
                      "w-12 min-w-12 h-12 min-h-12 bg-white group-data-[state=active]:bg-[#1E1E1E] group-data-[state=active]:text-white",
                      "transition-colors duration-300 max-[430px]:w-10 max-[430px]:h-10 max-[430px]:min-w-10 max-[430px]:min-h-10"
                    )}
                  >
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
