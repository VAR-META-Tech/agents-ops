import { CommonTitle } from "@/components/common/common-title";
import { SERVICES } from "./utils/constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CommonChip } from "@/components/common/common-chip";
import CommonAnimationContainer from "@/components/common/common-animation-container";

export const OurServices = () => {
  return (
    <div className="py-14 px-6 bg-[url(assets/images/ellipse-linear.png)] bg-no-repeat bg-cover bg-[position:-300px_-450px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <CommonTitle className="pl-6 max-[930px]:text-3xl">
            Our Services
          </CommonTitle>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(625px,_1fr))] gap-7 mt-10 max-[676px]:grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]">
          {SERVICES.map((service, index) => (
            <CommonAnimationContainer
              key={service.no}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="rounded-[44px] h-full pb-8 px-2">
                <CardHeader className="flex items-center justify-between gap-4">
                  <CommonChip>{service.no}</CommonChip>
                  <div>{service.icon}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold mb-4">
                    {service.title}
                  </div>

                  <p className="text-xl font-normal leading-8">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
