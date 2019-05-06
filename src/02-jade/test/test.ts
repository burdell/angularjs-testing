import { render, fireEvent } from "./renderer";

import { renderingJadeModule } from "../index";

describe("Jade rendering test", () => {
  it("says who it is", () => {
    const { getByPlaceholderText, getByText } = render({
      template: "<render-jade />",
      modules: [renderingJadeModule]
    });

    getByText("I'm a JadeBoi");

    const input = getByPlaceholderText("WHAT AM I??");
    fireEvent.change(input, { target: { value: "Test" } });

    getByText("I'm a TestBoi");
  });
});
