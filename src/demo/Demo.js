import ImageMapper from "../ImageMapper";
import { map } from "./maps";

const Demo = () => {
  return <ImageMapper img={map.img} map={map.map} />;
};

export default Demo;
