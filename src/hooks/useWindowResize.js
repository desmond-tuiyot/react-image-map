import { useState, useEffect } from "react";

// handleWindowResize is optional - add whatever
// function you wanna call when window dimensions change
const useWindowResize = (onWindowResize = (f) => f) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      onWindowResize();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return dimensions;
};

export default useWindowResize;
