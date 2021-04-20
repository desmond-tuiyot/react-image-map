import { render, screen, fireEvent } from "@testing-library/react";

// import Demo from "./demo";
import ImageMapper from "./ImageMapper";
import { map, mapAlts } from "./demo/maps";

describe("Image Mapper", () => {
  test("image and image maps load", () => {
    render(<ImageMapper img={map.img} map={map.map} />);
    screen.getByRole("img");
    mapAlts.forEach((alt) => {
      screen.getByAltText(alt);
    });
  });

  test("shape is drawn on canvas when hovering over image, and disappears when hovering off", () => {
    render(<ImageMapper img={map.img} map={map.map} />);
  });
});
