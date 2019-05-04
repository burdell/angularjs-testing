import { render, fireEvent, wait } from "./renderer";

import { RenderWithProps } from "../component";
import { spongebobCase } from "../../03-dependencies/Spongebob";
import { renderWithPropsModule, RWPController, template } from "../index";

describe("Props test", () => {
  it("renders with props", () => {
    const submitdFn = jest.fn();
    const { getByText } = render({
      //   template: `
      //       <render-with-props
      //           first-name='$ctrl.firstName'
      //           last-name='$ctrl.lastName'
      //           on-submit='$ctrl.onSubmit'
      //       />
      //     `,
      //   modules: [renderWithPropsModule],
      component: RenderWithProps,
      modules: [spongebobCase],
      props: {
        firstName: "Tom",
        lastName: "Joad",
        onSubmit: submitdFn
      }
    });

    getByText("~ * ToM jOaD * ~");

    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    expect(submitdFn).toBeCalledWith("ToM jOaD");
  });

  it("renders just a controller & template", () => {
    const { getByText, getByLabelText } = render({
      component: {
        controller: RWPController,
        template
      },
      modules: [renderWithPropsModule]
    });

    const firstName = getByLabelText("First Name");
    const lastName = getByLabelText("Last Name");
    fireEvent.change(firstName, { target: { value: "Ivan" } });
    fireEvent.change(lastName, { target: { value: "Karamazov" } });
    fireEvent.click(getByText("Submit"));

    getByText("Submitted: IvAn KaRaMaZoV");
  });
});
