import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes with proper precedence.
 * Use for composing component classNames.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
