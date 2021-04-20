import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DemoRect } from "./demo";

describe("Image Mapper", () => {
  test("image and image map loads", () => {
    render(<DemoRect />);
    screen.getByRole("img");
    screen.getByAltText("rect1");
  });
});
