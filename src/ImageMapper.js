import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ImageMapper = ({ img, map }) => {
  const [dimensions, setDimensions] = useState({});
  const canvas = useRef();
  const image = useRef();
  let ctx = useRef();

  // 3264 x 2176

  useEffect(() => {
    ctx.current = canvas.current.getContext("2d");
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
    console.log("called handle image load first");
    setDimensions({
      width: image.current.width,
      height: image.current.height,
    });
  };

  const handleMouseEnter = (area) => {
    if (!canvas.current) return;

    if (area.shape === "rect") {
      ctx.current.fillStyle = "rgba(200,0,0,0.4)";
      let [left, top, right, bottom] = area.coords.split(",");
      ctx.current.fillRect(left, top, right - left, bottom - top);
    }
  };

  const handleMouseLeave = (area) => {};

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
