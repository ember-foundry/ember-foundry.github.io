export const browser_supports = (feature: 'startViewTransition')=> {

  if(feature === 'startViewTransition'){
    return document.startViewTransition !== undefined
  }

  return true;
}
