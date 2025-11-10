import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ICommonButton
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  buttonText?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const CommonButton = ({
  children,
  className,
  ...props
}: ICommonButton) => {
  return (
    <Button className={cn("border border-[#7C89AE] rounded-full h-10", className)} {...props}>
      {children}
    </Button>
  );
};
