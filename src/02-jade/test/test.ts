import { render, fireEvent } from "./renderer";

import { RenderJade } from "../component";

describe("Basic test", () => {
  it("says who it is", () => {
    const { getByPlaceholderText, getByText } = render({
      component: RenderJade
    });

    getByText("I'm a JadeBoi");

    const input = getByPlaceholderText("WHAT AM I??");
    fireEvent.change(input, { target: { value: "TestBoi" } });

    getByText("I'm a TestBoi");
  });
});
