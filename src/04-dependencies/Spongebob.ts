import { IModule } from "angular";

export class SBService {
  transformText(text: any) {
    return text.replace(/[a-z]/gi, (c: any) =>
      c[`to${(text = !text) ? "Low" : "Upp"}erCase`]()
    );
  }
}

const SpongebobCaseComponent = {
  bindings: {
    text: "<"
  },
  controller: class SBCController {
    private service: SBService;
    constructor(SpongebobService: SBService) {
      this.service = SpongebobService;
    }

    transformText(text: any) {
      return this.service.transformText(text);
    }
  },
  template: `<div>~ * {{ $ctrl.transformText($ctrl.text) }} * ~<div>`
};

export function register(ngModule: IModule) {
  ngModule
    .service("SpongebobService", SBService)
    .component("spongebobCase", SpongebobCaseComponent);
}
