import angular, { ILocationProvider } from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

import { basicTestModule } from "./01-basic-test";
import { renderingJadeModule } from "./02-jade";
import { renderWithDependenciesModule } from "./04-dependencies";
import { basicPropsModule } from "./03-props";
import { reactModule } from "./05-react";

import * as StarWarsModule from "./04-dependencies/StarWars";
import * as SpongebobModule from "./04-dependencies/Spongebob";

const app = angular.module("app", [
  basicTestModule,
  renderingJadeModule,
  basicPropsModule,
  renderWithDependenciesModule,
  reactModule,
  uiRouter
]);

StarWarsModule.register(app);
SpongebobModule.register(app);

app.config(function(
  $stateProvider: StateProvider,
  $locationProvider: ILocationProvider
) {
  $locationProvider.html5Mode(true);

  $stateProvider.state("home", {
    url: "/",
    template: `
        <div>
            <a ui-sref="basic-test">Basic test</a>
            <a ui-sref="rendering-jade">Jade</a>
            <a ui-sref="basic-props">Props</a>
            <a ui-sref="render-with-dependencies">Dependencies</a>
            <a ui-sref="render-with-react">React</a>
        </div>
    `
  });
});
