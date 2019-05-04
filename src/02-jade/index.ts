import angular from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

import { RenderJade } from "./component";

export const renderingJadeModule = angular
  .module("renderingJadeModule", [uiRouter])
  .component("renderJade", RenderJade)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: "rendering-jade",
      component: "renderJade",
      url: "/renderingJade"
    });
  }).name;
