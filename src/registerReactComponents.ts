import { IModule } from "angular";

import { ReactBridge } from "./react/bridge";
import { ReactComponent } from "./react/ReactComponent";

const componentsToRegister = [
  { name: "reactComponent", component: ReactComponent }
];

export const registerReactComponents = (ngModule: IModule) => {
  componentsToRegister.forEach(({ name, component }) => {
    ngModule.directive(name, ReactBridge(component));
  });
};
