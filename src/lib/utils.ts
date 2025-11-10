import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (targetId: string) => {
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
