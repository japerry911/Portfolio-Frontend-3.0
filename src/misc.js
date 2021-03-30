export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const findIndex = (path, routesArray) => {
  const indexObject = routesArray.filter(
    (routeObject) => routeObject.link === path
  );

  if (indexObject.length > 0) {
    return indexObject[0].index;
  } else {
    return 0;
  }
};
