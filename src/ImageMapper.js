import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import * as utils from "./utils";

const ImageMapper = ({ img, map }) => {
  const [dimensions, setDimensions] = useState({});
  const [currentShape, setCurrentShape] = useState(null);
  const canvas = useRef();
  const image = useRef();
  let ctxRef = useRef();

  // 3264 x 2176

  const drawShape = useCallback(() => {
    if (!ctxRef.current) return;
    let ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

    if (!currentShape) return;

    if (currentShape.shape === "rect") {
      utils.drawRect(ctx, currentShape);
    } else if (currentShape.shape === "poly") {
      utils.drawPoly(ctx, currentShape);
    } else if (currentShape.shape === "circle") {
      utils.drawCircle(ctx, currentShape);
    }
  }, [currentShape]);

  useEffect(() => {
    drawShape();
  }, [drawShape]);

  useEffect(() => {
    ctxRef.current = canvas.current.getContext("2d");
  }, [dimensions]);

  let canvasStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    pointerEvents: "none",
  };

  let containerStyle = {
    position: "relative",
    height: `${dimensions.height ? dimensions.height : 150}px`,
    width: `${dimensions.width ? dimensions.width : 300}px`,
  };

  let imgStyles = {
    position: "absolute",
    userSelect: "none",
    top: 0,
    left: 0,
    zIndex: 1,
  };

  const handleImageLoad = () => {
    setDimensions({
      width: image.current.width,
      height: image.current.height,
    });
  };

  const handleMouseEnter = (area) => {
    setCurrentShape(area);
  };

  const handleMouseLeave = () => {
    setCurrentShape(null);
  };

  return (
    <div style={containerStyle}>
      <img
        style={imgStyles}
        ref={image}
        src={img.src}
        alt={img.alt}
        onLoad={handleImageLoad}
        useMap={`#${map.name}`}
        width={3264}
        height="auto"
      />

      <map name={map.name}>
        {map.areas.map((area, index) => (
          <area
            key={index}
            shape={area.shape}
            coords={area.coords}
            alt={area.alt}
            onMouseEnter={() => {
              handleMouseEnter(area);
            }}
            onMouseLeave={() => {
              handleMouseLeave(area);
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
        style={canvasStyles}
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
