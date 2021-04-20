import PropTypes from "prop-types";

const ImageMapper = ({ img, map }) => {
  return (
    <>
      <img
        src={img.src}
        alt={img.alt}
        useMap={`#${map.name}`}
        width={img.width}
        height="auto"
      />
      <map name={map.name}>
        {map.areas.map((area, index) => (
          <area
            key={index}
            shape={area.shape}
            coords={area.coords}
            alt={area.alt}
            href="#"
          />
        ))}
      </map>
    </>
  );
};

ImageMapper.propTypes = {
  img: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired,
};

export default ImageMapper;
