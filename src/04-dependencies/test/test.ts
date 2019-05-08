import { render, fireEvent, wait } from "./renderer";

import { renderWithDependenciesModule } from "../index";
import { IModule } from "angular";
import * as SpongebobModule from "../Spongebob";
import * as StarWarsModule from "../StarWars";

// jest.mock("../StarWars/service");

describe("Dependencies test", () => {
  it("renders with dependencies", async () => {
    const { getByPlaceholderText, getByText, returnedInjections } = render({
      template: "<render-with-dependencies />",
      modules: [renderWithDependenciesModule],
      registerDependencies: registerDependencies,
      returnedInjections: ["StarWarsService"]
    });

    getByText("NO PEOPLE");

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
  SpongebobModule.register(ngModule);
  // StarWarsModule.register(ngModule);

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
