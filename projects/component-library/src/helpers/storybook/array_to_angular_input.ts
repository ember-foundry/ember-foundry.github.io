export const array_to_angular_input = (array: string[]): string => {
  return `['${array.join("','")}']`
}
