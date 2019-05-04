import { IHttpService, IPromise } from "angular";

export class StarWarsService {
  private $http: IHttpService;

  constructor($http: IHttpService) {
    this.$http = $http;
  }

  getPeople(name?: string): IPromise<string[]> {
    let api = "https://swapi.co/api/people";
    if (name) {
      api += `?search=${name}`;
    }

    return this.$http
      .get(api)
      .then(res => (res.data as any).results.map((person: any) => person.name));
  }
}
