import angular, { IComponentOptions, IModule } from "angular";
import { getQueriesForElement, fireEvent } from "dom-testing-library";

import { getComponentTemplate } from "./utils";

export { fireEvent };

interface RenderProps {
  component?: IComponentOptions;
  template?: string;
  modules?: string[];
  props?: { [attr: string]: any };
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
