import { render, fireEvent, wait } from "./renderer";

import { RenderWithDependencies } from "../component";
import { IModule } from "angular";
import { spongebobCase } from "../Spongebob";

describe("Basic test", () => {
  it("renders with dependencies", async () => {
    const { getByPlaceholderText, getByText, returnedInjections } = render({
      component: RenderWithDependencies,
      registerDependencies,
      modules: [spongebobCase],
      returnedInjections: ["StarWarsService"]
    });

    const input = getByPlaceholderText("Person's name");
    const button = getByText("Search for People");

    fireEvent.change(input, { target: { value: "luke" } });
    fireEvent.click(button);

    await wait();

    const swService = returnedInjections.StarWarsService;
    expect(swService.getPeople).toHaveBeenCalledTimes(1);
    getByText("~ * GeOrGe P. bUrDeLl * ~");
    getByText("~ * ArT vAnDeLaY * ~");
    getByText("~ * BoB sAcAmAnO * ~");
  });
});

function registerDependencies(ngModule: IModule) {
  ngModule.service(
    "StarWarsService",
    class MockSWS {
      public getPeople = jest
        .fn()
        .mockResolvedValue([
          "George P. Burdell",
          "Art Vandelay",
          "Bob Sacamano"
        ]);
    }
  );
}
