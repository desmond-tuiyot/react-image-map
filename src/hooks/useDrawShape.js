import { useEffect } from "react";
import { drawShape } from "../utils";

const useDrawShape = (contextRef, canvas, currentShape, scaledAreas) => {
  useEffect(() => {
    if (!contextRef.current) return;
    let ctx = contextRef.current;
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

    if (!currentShape) return;

    let { id, area } = currentShape;
    let scaledCoords = scaledAreas[id];
    drawShape(ctx, area, scaledCoords);
  }, [canvas, contextRef, currentShape, scaledAreas]);
};

export default useDrawShape;
