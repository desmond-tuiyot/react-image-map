import { render, screen, fireEvent } from "@testing-library/react";

import Demo from "./demo";
import { mapAlts } from "./demo/maps";

describe("Image Mapper", () => {
  test("image and image maps load", () => {
    render(<Demo />);
    screen.getByRole("img");
    mapAlts.forEach((alt) => {
      screen.getByAltText(alt);
    });
  });

  test("onclick is called when image map is clicked", () => {
    render(<Demo />);
  });
});
