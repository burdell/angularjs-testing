import angular from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

import { RenderWithDependencies } from "./component";

export const renderWithDependenciesModule = angular
  .module("renderWithDependenciesModule", [uiRouter])
  .component("renderWithDependencies", RenderWithDependencies)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: "render-with-dependencies",
      component: "renderWithDependencies",
      url: "/renderWithDependencies"
    });
  }).name;
