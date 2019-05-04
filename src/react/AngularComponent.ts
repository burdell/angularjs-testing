import { IComponentOptions, IModule, IScope } from "angular";

const component: IComponentOptions = {
  controller: class MyAppCtrl {
    private name: string;
    private email: string;
    private $scope: IScope;

    constructor($scope: IScope) {
      this.name = "";
      this.email = "";
      this.$scope = $scope;
    }

    setInfo = ({ name, email }: { name: string; email: string }) => {
      this.$scope.$evalAsync(() => {
        this.name = name;
        this.email = email;
      });
    };
  },

  template: `
    <div>
      <div>
        <div>Name: {{ $ctrl.name }}</div>
        <div>Email: {{ $ctrl.email }}</div>
      </div>
      <div>
        <react-component on-change="$ctrl.setInfo"</react-component>
      </div>
    </div>
  `
};

export const AngularComponent = (ngModule: IModule) => {
  ngModule.component("angularComponent", component).name;
};
