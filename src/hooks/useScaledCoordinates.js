import { useState, useEffect } from "react";

const useScaledCoordinates = (currentWidth, originalWidth, map) => {
  const [scaledAreas, setScaledAreas] = useState(null);

  useEffect(() => {
    let ratio = currentWidth / originalWidth;
    const newlyScaledAreas = map.areas.map((area) => {
      let coords = area.coords.map((coord) => coord * ratio);
      return coords;
    });
    setScaledAreas(newlyScaledAreas);
  }, [currentWidth, originalWidth, map.areas]);

  return scaledAreas;
};

export default useScaledCoordinates;
