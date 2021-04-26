import { useRef, useState } from "react";
import PropTypes from "prop-types";

import * as styles from "./styles";
import { useWindowResize, useScaledCoordinates, useDrawShape } from "./hooks";

const ImageMapper = ({
  img,
  map,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onLoad,
}) => {
  const [dimensions, setDimensions] = useState({});
  const [currentShape, setCurrentShape] = useState(null);
  const scaledAreas = useScaledCoordinates(dimensions.width, img.width, map);
  const canvas = useRef();
  const image = useRef();
  let contextRef = useRef();
  useDrawShape(contextRef, canvas, currentShape, scaledAreas);

  const updateImageDimensions = () => {
    setDimensions({
      width: image.current.width,
      height: image.current.height,
    });
  };
  useWindowResize(updateImageDimensions);
  // 3264 x 2176

  const handleImageLoad = () => {
    // update context ref
    contextRef.current = canvas.current.getContext("2d");

    // set initial dimensions
    setDimensions({
      width: image.current.width,
      height: image.current.height,
    });
    onLoad();
  };

  const handleMouseEnter = (area, index) => {
    setCurrentShape({ id: index, area });
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setCurrentShape(null);
    onMouseLeave();
  };

  const handleClick = () => {
    onClick();
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
            onClick={handleClick}
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
