import produce from "immer";

// TODO: write unit test for this
export const getFillRectBounds = (coordsString) => {
  let [left, top, right, bottom] = coordsString.split(",");
  return [left, top, right - left, bottom - top];
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
