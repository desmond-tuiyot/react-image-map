import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DemoRect } from "./demo";
import { mapAlts } from "./demo/maps";

describe("Image Mapper", () => {
  test("image and image maps load", () => {
    render(<DemoRect />);
    screen.getByRole("img");
    mapAlts.forEach((alt) => {
      screen.getByAltText(alt);
    });
  });
});
