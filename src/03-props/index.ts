import angular, { IComponentOptions } from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

export const PropsComponent: IComponentOptions = {
  template: `
      <div>
          <div>Last name {{$ctrl.lastName}}, first name {{$ctrl.firstName}}
      </div>
    `,
  bindings: {
    firstName: "<",
    lastName: "<"
  }
};

export const basicPropsModule = angular
  .module("basicPropsModule", [uiRouter])
  .component("basicPropz", PropsComponent)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: "basic-props",
      template: `
        <basic-propz first-name="'Art'" last-name="'Vandelay'" />
      `,
      url: "/basic-props"
    });
  }).name;
