import angular, { IComponentOptions, IModule } from "angular";

import { getQueriesForElement, fireEvent, wait } from "dom-testing-library";

export { fireEvent, wait };

interface RenderProps {
  component?: IComponentOptions;
  template?: string;
  modules?: string[];
  returnedInjections?: string[];
  registerDependencies(module: IModule): void;
}

function initAngular({ component, template }: any) {
  const testModule = angular.module("ghTest", []);

  if (component) {
    testModule.component("ghTestComponent", component);
  }

  testModule.component("ghTestContainer", {
    template: template || "<gh-test-component />"
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
