import angular, { IComponentOptions, IModule } from "angular";

import { getQueriesForElement, fireEvent, wait } from "dom-testing-library";

export { fireEvent, wait };

interface RenderProps {
  component?: IComponentOptions;
  template?: string;
  modules?: string[];
  returnedInjections?: string[];
  props?: { [attr: string]: any };
  registerDependencies?(module: IModule): void;
}

function camelCaseToDash(str: string) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}

const getComponentTemplate = (componentName: string, props: any) => {
  let propString = "";
  const propNames = Object.keys(props);
  propNames.forEach(propName => {
    propString += ` ${camelCaseToDash(propName)}="$ctrl.${propName}"`;
  });

  const dashedName = camelCaseToDash(componentName);
  return `<${dashedName} ${propString}></${dashedName}>`;
};

function initAngular(
  props: any,
  component?: IComponentOptions,
  template?: string
) {
  const testModule = angular.module("ghTest", []);

  if (component) {
    testModule.component("ghTestComponent", component);
  }

  testModule.component("ghTestContainer", {
    controller: class GatherTestContainer {
      public $onInit() {
        const propKeys = Object.keys(props);
        propKeys.forEach(prop => {
          (this as any)[prop] = props[prop];
        });
      }
    },
    template: template || getComponentTemplate("ghTestComponent", props)
  });

  return testModule;
}

export function render({
  component,
  template,
  registerDependencies,
  returnedInjections = [],
  props = {},
  modules = []
}: RenderProps) {
  const testModule = initAngular(props, component, template);
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
