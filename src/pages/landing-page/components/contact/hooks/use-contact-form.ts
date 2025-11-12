import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";

const contactFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  companyName: z.string().min(1, { message: "Company Name is required" }),
  jobTitle: z.string().min(1, { message: "Job Title is required" }),
  country: z
    .object({
      label: z.string().min(1, { message: "Country is required" }),
      value: z.string().min(1, { message: "Country is required" }),
    })
    .nullable()
    .refine((data) => data !== null, { message: "Country is required" }),
  message: z.string().optional(),
});

const defaultValues: z.infer<typeof contactFormSchema> = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  jobTitle: "",
  country: null,
  message: "",
};

const GOOGLE_FORM_ENDPOINT =
  "https://docs.google.com/forms/d/e/1FAIpQLSea5XuIFlyZd_aJYSEL3lCsVWnBWC8gXA9TfqjeZGWpzUNAxg/formResponse";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    const payload = new URLSearchParams();
    payload.set("entry.1804555128", data.fullName);
    payload.set("entry.422420848", data.email);
    payload.set("entry.1127587790", data.phone);
    payload.set("entry.947328136", data.companyName);
    payload.set("entry.810394646", data.jobTitle);
    payload.set("entry.1127170555", data.country?.label ?? "");
    payload.set("entry.488728819", data.message ?? "");

    try {
      setIsSubmitting(true);
      await fetch(GOOGLE_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      toast.success("Contact form submitted successfully");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      toast.error("Contact form submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit,
  };
};
