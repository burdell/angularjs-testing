import angular, { ILocationProvider } from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

import { AngularComponent } from "./react/AngularComponent";
import { registerReactComponents } from "./registerReactComponents";

import { basicTestModule } from "./01-basic-test";
import { renderingJadeModule } from "./02-jade";
import { renderWithDependenciesModule } from "./03-dependencies";
import { renderWithPropsModule } from "./04-props";

const app = angular.module("app", [
  uiRouter,
  basicTestModule,
  renderingJadeModule,
  renderWithDependenciesModule,
  renderWithPropsModule
]);

AngularComponent(app);
registerReactComponents(app);

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
            <a ui-sref="rendering-jade">Rendering Jade</a>
            <a ui-sref="render-with-dependencies">Rendering Dependencies</a>
            <a ui-sref="render-with-props">Rendering Props</a>
        </div>
    `
  });
});
