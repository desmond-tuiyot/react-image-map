import ImageMapper from "../ImageMapper";
import { map } from "./maps";

const Demo = () => {
  return (
    <ImageMapper
      img={map.img}
      map={map.map}
      onClick={map.onClick}
      onMouseEnter={map.onMouseEnter}
      onMouseLeave={map.onMouseLeave}
      onLoad={map.onLoad}
    />
  );
};

export default Demo;
