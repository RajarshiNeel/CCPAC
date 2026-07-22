import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Small helper used everywhere to combine Tailwind classes safely.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
