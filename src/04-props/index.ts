import angular, { IScope } from "angular";
import uiRouter, { StateProvider } from "@uirouter/angularjs";

import { RenderWithProps } from "./component";
import { spongebobCase } from "../03-dependencies/Spongebob";

export const template = `
<div>
    <div>
        <render-with-props
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

export class RWPController {
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

export const renderWithPropsModule = angular
  .module("renderWithPropsModule", [uiRouter, spongebobCase])
  .component("renderWithProps", RenderWithProps)
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: "render-with-props",
      template,
      controller: RWPController,
      controllerAs: "$ctrl",
      url: "/renderWithProps"
    });
  }).name;
