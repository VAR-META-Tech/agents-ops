import { CommonTitle } from "@/components/common/common-title";
import { HOW_IT_WORKS } from "./utils/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CommonChip } from "@/components/common/common-chip";
import CommonAnimationContainer from "@/components/common/common-animation-container";
import { cn } from "@/lib/utils";

export const HowItWork = () => {
  return (
    <div className="bg-white px-6">
      <div className="max-w-[1280px] mx-auto py-20">
        <div className="mb-10 pl-6 max-md:pl-3">
          <CommonTitle className="max-lg:text-3xl">How It Works</CommonTitle>
        </div>

        <div
          className={cn(
            "gap-6 border border-[#E6E6E6] rounded-[48px] p-8 bg-[url(assets/images/net-background.png)] bg-cover bg-no-repeat",
            "grid grid-cols-3 min-w-[320px] max-lg:grid-cols-2 max-md:grid-cols-1"
          )}
        >
          {HOW_IT_WORKS.map((item, index) => (
            <CommonAnimationContainer
              key={index}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="gap-2 rounded-4xl">
                <CardHeader>{item.image}</CardHeader>
                <CardContent>
                  <CardTitle>
                    <div className="flex items-center gap-2">
                      <CommonChip className="w-12 h-12 min-w-12 min-h-12 bg-white">
                        <span>{item.id}</span>
                      </CommonChip>
                      <span className="text-2xl font-semibold">
                        {item.title}
                      </span>
                    </div>
                  </CardTitle>
                </CardContent>
              </Card>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
