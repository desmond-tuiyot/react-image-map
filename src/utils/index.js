import produce from "immer";

// TODO: write unit test for this
export const getFillRectBounds = (coordsString) => {
  let [left, top, right, bottom] = coordsString.split(",");
  return [left, top, right - left, bottom - top];
};

export const drawRect = (ctx, shape) => {
  ctx.fillStyle = shape.fill;
  let [x, y, width, height] = getFillRectBounds(shape.coords);
  ctx.fillRect(x, y, width, height);
};

export const drawPoly = (ctx, shape) => {
  ctx.fillStyle = shape.fill;
  let coords = shape.coords.split(",");
  ctx.beginPath();
  ctx.moveTo(coords[0], coords[1]);
  for (let i = 2; i < coords.length; i += 2) {
    ctx.lineTo(coords[i], coords[i + 1]);
  }
  ctx.fill();
};

export const drawCircle = (ctx, shape) => {
  ctx.fillStyle = shape.fill;
  const [x, y, radius] = shape.coords.split(",");
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
};

// TOOD: write unit test for this
export const updateShapesState = produce((draft, area, event, id) => {
  if (event === "mouseenter") {
    draft.push({ id, ...area });
  } else if (event === "mouseleave") {
    const index = draft.findIndex((item) => item.id === id);
    if (index !== -1) draft.splice(index, 1);
  }
});
