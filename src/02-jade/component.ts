import { IComponentOptions } from "angular";

const template = require("./tmpl.jade");

export const RenderJade: IComponentOptions = {
  template,
  controller: class BasicTestCtrl {
    private whatAmI: string = "JadeBoi";
  }
};
