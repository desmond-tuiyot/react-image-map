export const getFillRectBounds = (coordsString) => {
  let [left, top, right, bottom] = coordsString.split(",");
  return [left, top, right - left, bottom - top];
};
