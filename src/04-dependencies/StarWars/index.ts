import { IModule } from "angular";
import { StarWarsService } from "./service";

export function register(ngModule: IModule) {
  ngModule.service("StarWarsService", StarWarsService);
}
