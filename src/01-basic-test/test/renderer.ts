import angular, { IComponentOptions, IModule } from "angular";

import { getQueriesForElement, fireEvent } from "dom-testing-library";

export { fireEvent };

interface RenderProps {
  component?: IComponentOptions;
  template?: string;
  modules?: string[];
}

function initAngular({ component, template }: RenderProps) {
  const testModule = angular.module("ghTest", []);

  if (component) {
    testModule.component("ghTestComponent", component);
  }

  testModule.component("ghTestContainer", {
    template: template || "<gh-test-component />"
  });

  return testModule;
}

export function render({ modules = [], ...theRest }: RenderProps) {
  const testModule = initAngular(theRest);

  const container = document.createElement("div");
  container.innerHTML = "<gh-test-container />";

  angular.bootstrap(container, [testModule.name, ...modules]);
  return {
    container,
    ...getQueriesForElement(container)
  };
}
