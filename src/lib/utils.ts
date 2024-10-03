import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mapValueToText = (value: string) => {
  switch (value) {
    case "yes":
      return "Sí";
    case "no":
      return "No";
    case "not-apply":
      return "No Aplica";
    default:
      return "";
  }
};

export const mapReasonToText = (value: string) => {
  switch (value) {
    case "photograph_mismatch":
      return "Fotografía del Cliente no coincide";
    case "blurred_photo":
      return "Fotografía borrosa o manipulada";
    case "no_visible_photo":
      return "Fotografía no visible";
    default:
      return "";
  }
};
