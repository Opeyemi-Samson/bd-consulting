import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely, resolving conflicts (e.g. "p-2 p-4" -> "p-4").
 * Standard shadcn/ui convention used across every component in this project.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
