import { CommonTitle } from "@/components/common/common-title";
import React from "react";
import { WORKFLOW_STEPS } from "./utils/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CommonChip } from "@/components/common/common-chip";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CommonAnimationContainer from "@/components/common/common-animation-container";
import { cn } from "@/lib/utils";

export const OurProcess = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const handlePrevious = () => {
    api?.scrollPrev();
    setCanScrollPrev(api?.canScrollPrev() || false);
    setCanScrollNext(api?.canScrollNext() || true);
  };

  const handleNext = () => {
    api?.scrollNext();
    setCanScrollNext(api?.canScrollNext() || false);
    setCanScrollPrev(api?.canScrollPrev() || true);
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto py-10 max-[1400px]:mx-6">
        <div className="mb-10 pl-6 flex items-center justify-between max-[615px]:min-w-[320px]">
          <CommonTitle className="max-[930px]:text-3xl">
            Our Process
          </CommonTitle>

          <div className="flex gap-8 max-[615px]:gap-4">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-[#7C89AE] hover:border-[#7C89AE]"
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="!w-6 !h-6" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-[#7C89AE] hover:border-[#7C89AE]"
              disabled={!canScrollNext}
            >
              <ArrowRight className="!w-6 !h-6" />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "p-8 pr-0 bg-[url(assets/images/net-background.png)] bg-[#E6E6E6] bg-cover bg-no-repeat",
            "border border-[#E6E6E6] rounded-[48px] min-w-[320px] max-[450px]:p-4"
          )}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="w-full !max-w-[1280px]">
              {WORKFLOW_STEPS.map((step, index) => (
                <CarouselItem
                  key={index}
                  className="max-w-[515px] max-[615px]:max-w-[350px] max-[450px]:max-w-[300px]"
                >
                  <CommonAnimationContainer
                    key={index}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="p-1">
                      <Card className="h-[530px] w-[500px] relative bg-[#1E1E1E] text-white rounded-4xl max-[615px]:w-[330px] max-[615px]:h-[550px] max-[450px]:w-[284px] max-[450px]:h-[650px]">
                        <CardHeader className="flex items-start gap-4">
                          <CommonChip className="w-[68px] h-[68px] bg-transparent text-white max-[450px]:min-w-10 max-[450px]:w-10 max-[450px]:min-h-10 max-[450px]:!h-10">
                            {step.id}
                          </CommonChip>
                          <div className="h-16 flex flex-col justify-between">
                            <CardDescription className="text-xl font-normal text-white max-[615px]:text-lg">
                              {step.subtitle}
                            </CardDescription>
                            <CardTitle className="text-4xl font-semibold leading-12 max-[615px]:text-3xl">
                              {step.title}
                            </CardTitle>
                          </div>
                        </CardHeader>

                        <CardContent className="flex pt-6">
                          <span className="text-xl font-normal leading-8">
                            {step.description}
                          </span>
                          <span className="absolute bottom-8 right-8 max-[615px]:hidden">
                            {step.icon}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CommonAnimationContainer>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
