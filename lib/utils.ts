import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

function twMerge(classes: string) {
  return classes
}

export { twMerge }
