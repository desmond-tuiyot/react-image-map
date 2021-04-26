export const map = {
  src:
    "https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
  alt: "Drew Graham Dancing",
  originalWidth: 3464,
  img: {
    src:
      "https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    alt: "Drew Graham Dancing",
    width: 3264,
  },
  map: {
    name: "dance-image-map",
    areas: [
      {
        alt: "rect1",
        shape: "rect",
        // prettier-ignore
        coords: [10,10,40,60],
        fillColor: "rgba(200,0,0,0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
        lineWidth: 10,
      },

      {
        alt: "rect2",
        shape: "rect",
        // prettier-ignore
        coords: [120, 210, 160, 300],
        fillColor: "rgba(200,0,0,0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
      },
      {
        alt: "circle1",
        shape: "circle",
        // prettier-ignore
        coords: [210, 110, 53],
        fillColor: "rgba(0,200,0,0.4)",
        strokeColor: "rgba(200,100,0,0.4)",
      },
      {
        alt: "circle2",
        shape: "circle",
        // prettier-ignore
        coords: [337, 300, 44],
        fillColor: "rgba(0,200,0,0.4)",
        strokeColor: "rgba(10,0,100,0.4)",
      },
      {
        alt: "poly1",
        shape: "poly",

        // prettier-ignore
        coords: [25,33,27,300,128,240,128,94],
        fillColor: "rgba(0,0,200,0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
      },
      {
        alt: "poly2",
        shape: "poly",
        // prettier-ignore
        coords:
          [140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147],
        fillColor: "rgba(0,0,200,0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
      },
    ],
  },
  onClick: () => {
    console.log("on click");
  },
  onMouseEnter: () => {
    console.log("on mouse enter");
  },
  onMouseLeave: () => {
    console.log("on mouse leave");
  },
  onLoad: () => {
    console.log("on image load");
  },
};
export const map2 = {
  src:
    "https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
  alt: "Drew Graham Dancing",
  originalWidth: 3464,

  img: {
    src:
      "https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    alt: "Drew Graham Dancing",
    width: 3264,
  },
  map: {
    name: "dance-image-map",
    areas: [
      {
        alt: "rect1",
        shape: "rect",
        // prettier-ignore
        coords: [7,6,210,240],
        fillColor: "rgba(200, 0, 0, 0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
      },
      {
        alt: "rect2",
        shape: "rect",
        // prettier-ignore
        coords: [1360,820,1807,1071],
        fillColor: "rgba(200,0,0,0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
      },
      {
        alt: "rect3",
        shape: "rect",
        // prettier-ignore
        coords: [2092,907,2326,1155],
        fillColor: "rgba(200,0,0,0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
      },
      {
        alt: "rect4",
        shape: "rect",
        // prettier-ignore
        coords: [2231,1319,2467,1659],
        fillColor: "rgba(200,0,0,0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
      },
      {
        alt: "rect5",
        shape: "rect",
        // prettier-ignore
        coords: [1392,1615,1663,1903],
        fillColor: "rgba(200,0,0,0.4)",
        strokeColor: "rgba(100,200,0,0.4)",
      },
    ],
  },
  onClick: () => {
    console.log("on click");
  },
  onMouseEnter: () => {
    console.log("on mouse enter");
  },
  onMouseLeave: () => {
    console.log("on mouse leave");
  },
  onLoad: () => {
    console.log("on image load");
  },
};

export const mapAlts = [
  "rect1",
  "rect2",
  "circle1",
  "circle2",
  "poly1",
  "poly2",
];
