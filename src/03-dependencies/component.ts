import { IComponentOptions, IScope } from "angular";

import { StarWarsService as SWService } from "./service";

const template = require("./tmpl.jade");

export const RenderWithDependencies: IComponentOptions = {
  template,
  controller: class BasicTestCtrl {
    private swService: SWService;
    private starWarsPeople: string[];
    private searchTerm: string = "";
    private $scope: IScope;

    constructor($scope: IScope, StarWarsService: SWService) {
      this.swService = StarWarsService;
      this.starWarsPeople = [];
      this.$scope = $scope;
    }

    async getPeople() {
      const people = await this.swService.getPeople(this.searchTerm);
      this.$scope.$evalAsync(() => {
        this.starWarsPeople = people;
      });
    }
  }
};
