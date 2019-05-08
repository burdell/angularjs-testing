import { render, fireEvent } from "./renderer";

import { basicPropsModule, PropsComponent } from "../index";

describe("Basic test", () => {
  it("renders with props", () => {
    const { getByText } = render({
      template:
        "<basic-propz first-name='$ctrl.firstName' last-name='$ctrl.lastName' />",
      modules: [basicPropsModule],
      // component: PropsComponent,
      props: {
        lastName: "Greatest",
        firstName: "Evers"
      }
    });

    getByText("Last name Greatest, first name Ever");
  });
});
