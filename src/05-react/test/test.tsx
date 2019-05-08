import React from "react";
// import { render, fireEvent, wait } from "./renderer";
import { render as rtlRender, fireEvent } from "react-testing-library";

import { reactModule, stateOptions } from "../index";
import { ReactComponent } from "../react-component";
import * as SpongebobModule from "../../04-dependencies/Spongebob";

const { controller, template } = stateOptions;

describe("Props test", () => {
  it("doesn't test implementation details", () => {
    // const { getByText, getByLabelText } = render({
    //   component: {
    //     controller,
    //     template
    //   },
    //   registerDependencies: ngModule => {
    //     SpongebobModule.register(ngModule);
    //   },
    //   modules: [reactModule]
    // });
    const { getByLabelText, getByText } = rtlRender(<ReactComponent />);

    const firstName = getByLabelText("First Name");
    const lastName = getByLabelText("Last Name");
    fireEvent.change(firstName, { target: { value: "Ivan" } });
    fireEvent.change(lastName, { target: { value: "Karamazov" } });
    fireEvent.click(getByText("Submit"));

    getByText("Submitted: IvAn KaRaMaZoV");
  });
});
