import { IComponentOptions } from "angular";

export const BasicTest: IComponentOptions = {
  template: `
        <div>
            <div>The current count is {{ $ctrl.count }}</div>
            <button ng-click="$ctrl.bump()">BUMP</button>
            <button ng-click="$ctrl.dump()">DUMP</button>
        </div>
    `,
  controller: class BasicTestCtrl {
    private count: number = 0;

    bump() {
      this.count++;
    }

    dump() {
      this.count--;
    }
  }
};
