import ImageMapper from "../ImageMapper";

const imageMap = {
  img: {
    src:
      "https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    alt: "Drew Graham Dancing",
    width: 800,
  },
  map: {
    name: "dance-image-map",
    areas: [
      {
        alt: "rect1",
        shape: "rect",
        coords: "10, 10, 40, 60",
        // onClick: () => {},
      },
    ],
  },
};

const DemoRect = () => {
  return <ImageMapper img={imageMap.img} map={imageMap.map} />;
};

export default DemoRect;
