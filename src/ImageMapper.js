import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import * as utils from "./utils";
import * as styles from "./styles";

const useWindowResize = (handleWindowResize) => {
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
      handleWindowResize();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return dimensions;
};

const ImageMapper = ({ img, map }) => {
  const [dimensions, setDimensions] = useState({});
  const [currentShape, setCurrentShape] = useState(null);
  const [scaledAreas, setScaledAreas] = useState(null);
  const canvas = useRef();
  const image = useRef();
  let ctxRef = useRef();

  const handleWindowResize = () => {
    setDimensions({
      width: image.current.width,
      height: image.current.height,
    });
  };

  useWindowResize(handleWindowResize);
  // 3264 x 2176

  const scaleAreaCoordinates = useCallback(() => {
    let ratio = dimensions.width / img.width;
    let oldScaledAreas = [];
    const newlyScaledAreas = map.areas.map((area, index) => {
      oldScaledAreas.push([...area.coords]);
      let coords = area.coords.map((coord) => coord * ratio);
      return coords;
    });
    setScaledAreas(newlyScaledAreas);
  }, [dimensions, img.width, map.areas]);

  const drawShape = useCallback(() => {
    if (!ctxRef.current) return;
    let ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

    if (!currentShape) return;
    let { id, area } = currentShape;

    let scaledCoords = scaledAreas[id];
    if (area.shape === "rect") {
      utils.drawRect(ctx, area, scaledCoords);
    } else if (area.shape === "poly") {
      utils.drawPoly(ctx, area, scaledCoords);
    } else if (area.shape === "circle") {
      utils.drawCircle(ctx, area, scaledCoords);
    }
  }, [currentShape, scaledAreas]);

  useEffect(() => {
    drawShape();
  }, [drawShape]);

  useEffect(() => {
    if (!ctxRef.current) {
      ctxRef.current = canvas.current.getContext("2d");
    }

    scaleAreaCoordinates();
  }, [dimensions, scaleAreaCoordinates]);

  const handleImageLoad = () => {
    setDimensions({
      width: image.current.width,
      height: image.current.height,
    });
  };

  const handleMouseEnter = (area, index) => {
    setCurrentShape({ id: index, area });
  };

  const handleMouseLeave = () => {
    setCurrentShape(null);
  };

  return (
    <div style={styles.container}>
      <img
        style={styles.image}
        ref={image}
        src={img.src}
        alt={img.alt}
        onLoad={handleImageLoad}
        useMap={`#${map.name}`}
        width="100%"
        height="auto"
      />

      <map name={map.name}>
        {map.areas.map((area, index) => (
          <area
            key={index}
            shape={area.shape}
            coords={scaledAreas ? scaledAreas[index] : area.coords}
            alt={area.alt}
            onMouseEnter={() => {
              handleMouseEnter(area, index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(area, index);
            }}
            href="#"
          />
        ))}
      </map>
      <canvas
        width={dimensions.width ? dimensions.width : 300}
        height={dimensions.height ? dimensions.height : 150}
        id="image map highlights"
        ref={canvas}
        style={styles.canvas}
      >
        Your browser does not have canvas support. When hovering over an image
        map, the canvas will draw a shape over that image map with a given
        color, thereby highlighting it.
      </canvas>
    </div>
  );
};

ImageMapper.propTypes = {
  img: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired,
};

export default ImageMapper;
