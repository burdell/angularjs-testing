import angular, { IScope } from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

import { NgComponent } from "./component";

import { ReactComponent } from "./react-component";
import { ReactBridge } from "./bridge";

export const reactTemplate = `<react-component />`;

export const angularTemplate = `
<div>
    <div>
        <angular-component
            first-name="$ctrl.firstName"
            last-name="$ctrl.lastName"
            on-submit="$ctrl.setSubmittedName"
        />
    </div>
    <div>
        Submitted: {{ $ctrl.submittedName || "No name submitted" }}
    </div>
</div>
`;

export class NgController {
  private submittedName: string = "";
  private firstName = "Rusty";
  private lastName = "Shackelford";
  private $scope: IScope;

  constructor($scope: IScope) {
    this.$scope = $scope;
    this.setSubmittedName = this.setSubmittedName.bind(this);
  }

  setSubmittedName(name: string) {
    this.submittedName = name;
  }
}

export const stateOptions = {
  name: "render-with-react",
  controller: NgController,
  // template: angularTemplate,
  template: reactTemplate,
  controllerAs: "$ctrl",
  url: "/renderWithReact"
};

export const reactModule = angular
  .module("renderWithReact", [uiRouter])
  .directive("reactComponent", ReactBridge(ReactComponent))
  .component("angularComponent", NgComponent)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state(stateOptions);
  }).name;
