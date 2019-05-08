import { IComponentOptions } from "angular";
import { SBService } from "../04-dependencies/Spongebob";

const template = require("./tmpl.jade");

export const NgComponent: IComponentOptions = {
  template,
  bindings: {
    firstName: "<",
    lastName: "<",
    onSubmit: "<"
  },
  controller: class BasicTestCtrl {
    private firstName: string = "";
    private lastName: string = "";
    private onSubmit = (n: string) => undefined;
    private sbService: SBService;

    constructor(SpongebobService: SBService) {
      this.sbService = SpongebobService;
    }

    getFullName() {
      return `${this.firstName || ""} ${this.lastName || ""}`;
    }

    submit() {
      const sbName = this.sbService.transformText(this.getFullName());
      this.onSubmit(sbName);
    }
  }
};
