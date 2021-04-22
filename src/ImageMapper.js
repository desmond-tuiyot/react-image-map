import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as utils from "./utils";

const ImageMapper = ({ img, map }) => {
  const [dimensions, setDimensions] = useState({});
  const [shapes, setShapes] = useState([]);
  const canvas = useRef();
  const image = useRef();
  let ctxRef = useRef();

  // 3264 x 2176

  // useEffect(() => {
  //   if (ctxRef.current) {
  //     const ctx = ctxRef.current;
  //     ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
  //     shapes.forEach((area) => {

  //     });
  //   }
  // }, [shapes]);

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

  const handleMouseEnter = (event, area, id) => {
    console.log(event.type);
    // console.log(utils.updateShapesState(shapes, area, event.type, id));
    // console.log(event.target);
    // const newShapes = utils.updateShapesState(shapes, area, event.type, id);
    // setShapes(newShapes);

    if (!ctxRef.current) return;
    let ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    if (area.shape === "rect") {
      ctx.fillStyle = "rgba(200,0,0,0.4)";
      let [x, y, width, height] = utils.getFillRectBounds(area.coords);
      ctx.fillRect(x, y, width, height);
    } else if (area.shape === "poly") {
      ctx.fillStyle = "rgba(200,0,0,0.4)";
      let coords = area.coords.split(",");
      ctx.beginPath();
      ctx.moveTo(coords[0], coords[1]);
      for (let i = 2; i < coords.length; i += 2) {
        ctx.lineTo(coords[i], coords[i + 1]);
      }
      ctx.fill();
    }
  };

  const handleMouseLeave = () => {
    if (!ctxRef.current) return;
    let ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
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
            onMouseEnter={(event) => {
              handleMouseEnter(event, area, index);
            }}
            onMouseLeave={(event) => {
              handleMouseLeave(event, area, index);
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
