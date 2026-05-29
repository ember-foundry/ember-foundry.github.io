export const args_to_angular_inputs = (obj: Record<string, unknown>): string => {
  return Object.keys(obj)
    .map(key => {
      if(obj[key] === undefined || obj[key] === null)
        return '';

      return `${key}="${obj[key]}"`
    })
    .filter(input => input !== '')
    .join(' ');
}
