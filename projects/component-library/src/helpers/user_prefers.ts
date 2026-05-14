
export const user_prefers = (preference: 'reduced-motion') => {

  if(preference === 'reduced-motion') {
    return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
  }

  return false
}
