import produce from "immer";

// TODO: write unit test for this
export const getFillRectBounds = (coords) => {
  let [left, top, right, bottom] = coords;
  return [left, top, right - left, bottom - top];
};

export const drawRect = (ctx, shape) => {
  let [x, y, width, height] = getFillRectBounds(shape.coords);

  ctx.fillStyle = shape.fill;
  ctx.fillRect(x, y, width, height);
};

export const drawPoly = (ctx, shape) => {
  ctx.fillStyle = shape.fill;
  ctx.beginPath();
  ctx.moveTo(shape.coords[0], shape.coords[1]);
  for (let i = 2; i < shape.coords.length; i += 2) {
    ctx.lineTo(shape.coords[i], shape.coords[i + 1]);
  }
  ctx.fill();
};

export const drawCircle = (ctx, shape) => {
  const [x, y, radius] = shape.coords;

  ctx.fillStyle = shape.fill;
  ctx.beginPath();
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
