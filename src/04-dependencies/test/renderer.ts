import angular, { IComponentOptions, IModule } from "angular";
import { getQueriesForElement, fireEvent, wait } from "dom-testing-library";

import { getComponentTemplate } from "./utils";

export { fireEvent, wait };

interface RenderProps {
  component?: IComponentOptions;
  template?: string;
  modules?: string[];
  props?: { [attr: string]: any };
  returnedInjections?: string[];
  registerDependencies?(module: IModule): void;
}

function initAngular({ component, template, props }: RenderProps) {
  const testModule = angular.module("ghTest", []);
  const testComponentName = "ghTestComponent";

  if (component) {
    testModule.component(testComponentName, component);
  }

  testModule.component("ghTestContainer", {
    controller: class GatherTestContainer {
      public $onInit() {
        if (!props) return;

        const propKeys = Object.keys(props);
        propKeys.forEach(prop => {
          (this as any)[prop] = props[prop];
        });
      }
    },
    template: template || getComponentTemplate(testComponentName, props)
  });

  return testModule;
}

export function render({
  registerDependencies,
  returnedInjections = [],
  modules = [],
  ...theRest
}: RenderProps) {
  const testModule = initAngular(theRest);
  if (registerDependencies) {
    registerDependencies(testModule);
  }

  const container = document.createElement("div");
  container.innerHTML = "<gh-test-container />";

  const angularApp = angular.bootstrap(container, [
    testModule.name,
    ...modules
  ]);
  return {
    container,
    returnedInjections: returnedInjections.reduce((acc: any, injection) => {
      acc[injection] = angularApp.get(injection);
      return acc;
    }, {}) as { [s: string]: any },
    ...getQueriesForElement(container)
  };
}
