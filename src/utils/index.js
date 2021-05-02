import produce from "immer";

export const noop = () => {};

// TODO: write unit test for this
export const getFillRectBounds = (coords) => {
  let [left, top, right, bottom] = coords;
  return [left, top, right - left, bottom - top];
};

export const drawRect = (ctx, shape, scaledCoords = undefined) => {
  let coords = scaledCoords ? scaledCoords : shape.coords;

  let [x, y, width, height] = getFillRectBounds(coords);

  ctx.fillStyle = shape.fillColor;
  ctx.strokeStyle = shape.strokeColor;
  ctx.lineWidth = 10;

  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
};

export const drawPoly = (ctx, shape, scaledCoords = undefined) => {
  let coords = scaledCoords ? scaledCoords : shape.coords;

  ctx.fillStyle = shape.fillColor;
  ctx.strokeStyle = shape.strokeColor;
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.moveTo(coords[0], coords[1]);
  for (let i = 2; i < coords.length; i += 2) {
    ctx.lineTo(coords[i], coords[i + 1]);
  }
  ctx.fill();
  ctx.stroke();
};

export const drawCircle = (ctx, shape, scaledCoords = undefined) => {
  let coords = scaledCoords ? scaledCoords : shape.coords;
  const [x, y, radius] = coords;

  ctx.fillStyle = shape.fillColor;
  ctx.strokeStyle = shape.strokeColor;
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);

  ctx.fill();
  ctx.stroke();
};

export const drawShape = (ctx, area, scaledCoords) => {
  if (area.shape === "rect") {
    drawRect(ctx, area, scaledCoords);
  } else if (area.shape === "poly") {
    drawPoly(ctx, area, scaledCoords);
  } else if (area.shape === "circle") {
    drawCircle(ctx, area, scaledCoords);
  }
};

export const drawAllShapes = (contextRef, canvas, map, scaledAreas) => {
  if (!contextRef.current) return;
  let ctx = contextRef.current;
  ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
  map.areas.forEach((area, index) => {
    let scaledCoords = scaledAreas[index];
    if (area.shape === "rect") {
      drawRect(ctx, area, scaledCoords);
    } else if (area.shape === "poly") {
      drawPoly(ctx, area, scaledCoords);
    } else if (area.shape === "circle") {
      drawCircle(ctx, area, scaledCoords);
    }
  });
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
