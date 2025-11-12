import { FormProvider } from "react-hook-form";
import { useContactForm } from "../hooks/use-contact-form";
import { CommonInput } from "@/components/common/common-input";
import { CommonSelect } from "@/components/common/common-select";
import { COUNTRIES } from "../utils/constants";
import { CommonTextArea } from "@/components/common/common-text-area";
import { CommonButton } from "@/components/common/common-button";
import arrowTopRightWhiteIcon from "@/assets/svg/arrow-top-right-white.svg";

export const ContactForm = () => {
  const { form, isSubmitting, onSubmit } = useContactForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 max-[640px]:grid-cols-1">
          <CommonInput name="fullName" placeholder="Full Name *" />
          <CommonInput name="email" placeholder="Email *" />
          <CommonInput name="phone" placeholder="Phone *" />
          <CommonInput name="companyName" placeholder="Company Name *" />
          <CommonInput name="jobTitle" placeholder="Job Title *" />
          <CommonSelect
            name="country"
            placeholder="Country *"
            options={COUNTRIES}
          />
        </div>
        <CommonTextArea
          name="message"
          placeholder="Message"
          rows={4}
          className="resize-none mt-3 h-[190px]"
        />

        <CommonButton
          type="submit"
          className="min-w-[178px] mt-6 bg-transparent pl-4 pr-3 gap-1 h-11 hover:bg-[#0B1D4E]"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Sending..." : "Send us a message"}</span>
          <img src={arrowTopRightWhiteIcon} alt="Arrow Top Right White" />
        </CommonButton>
      </form>
    </FormProvider>
  );
};
