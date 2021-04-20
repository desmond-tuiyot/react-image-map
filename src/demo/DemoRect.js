import ImageMapper from "../ImageMapper";
import { map } from "./maps";

const DemoRect = () => {
  return <ImageMapper img={map.img} map={map.map} />;
};

export default DemoRect;
