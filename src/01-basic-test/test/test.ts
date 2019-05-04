import { render, fireEvent } from "./renderer";

import { BasicTest } from "../component";
import { basicTestModule } from "../index";

describe("Basic test", () => {
  it("bumps & dumps", () => {
    // const { getByText } = render({ component: BasicTest });
    const { getByText } = render({
      template: "<basic-test></basic-test>",
      modules: [basicTestModule]
    });

    const bumpButton = getByText("BUMP");
    const dumpButton = getByText("DUMP");

    getByText("The current count is 0");

    fireEvent.click(bumpButton);
    getByText("The current count is 1");

    fireEvent.click(bumpButton);
    getByText("The current count is 2");

    fireEvent.click(dumpButton);
    getByText("The current count is 1");

    fireEvent.click(dumpButton);
    getByText("The current count is 0");
  });
});
