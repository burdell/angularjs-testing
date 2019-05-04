import angular from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

import { RenderWithDependencies } from "./component";
import { StarWarsService } from "./service";

import { spongebobCase } from "./Spongebob";

export const renderWithDependenciesModule = angular
  .module("renderWithDependenciesModule", [uiRouter, spongebobCase])
  .component("renderWithDependencies", RenderWithDependencies)
  .service("StarWarsService", StarWarsService)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: "render-with-dependencies",
      component: "renderWithDependencies",
      url: "/renderWithDependencies"
    });
  }).name;
