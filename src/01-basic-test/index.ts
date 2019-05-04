import angular from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

import { BasicTest } from "./component";

export const basicTestModule = angular
  .module("basicTestModule", [uiRouter])
  .component("basicTest", BasicTest)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: "basic-test",
      component: "basicTest",
      url: "/basic-test"
    });
  }).name;
