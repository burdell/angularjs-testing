import React from "react";
import ReactDOM from "react-dom";
import { IScope, IAttributes } from "angular";

export const ReactBridge = (component: any) => {
  return () => {
    return {
      restrict: "E",
      replace: true,
      link: (scope: IScope, element: JQLite, attrs: IAttributes) => {
        let props = {};
        const wantedProps = Object.keys(attrs.$attr);
        if (wantedProps.length) {
          props = wantedProps.reduce(
            (acc, prop) => {
              acc[prop] = scope.$eval(attrs[prop]);
              return acc;
            },
            {} as { [k: string]: any }
          );
        }

        ReactDOM.render(React.createElement(component, props), element[0]);
        scope.$on("$destroy", () =>
          ReactDOM.unmountComponentAtNode(element[0])
        );
      }
    };
  };
};
