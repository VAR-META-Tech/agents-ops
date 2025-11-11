import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (targetId: string, offset: number = 92) => {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const elementTop =
      targetElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    });
  }
};
