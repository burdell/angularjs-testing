import angular from "angular";

export class SBService {
  transformText(text: any) {
    return text.replace(/[a-z]/gi, (c: any) =>
      c[`to${(text = !text) ? "Low" : "Upp"}erCase`]()
    );
  }
}

export const spongebobCase = angular
  .module("spongebobCaseModule", [])
  .service("SpongebobService", SBService)
  .component("spongebobCase", {
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
    template: `<div>~ * {{ $ctrl.transformText($ctrl.text) }} * ~</div>`
  }).name;
