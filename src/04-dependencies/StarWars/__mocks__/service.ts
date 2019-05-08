export class StarWarsService {
  public getPeople = jest
    .fn()
    .mockResolvedValue(["George P. Burdell", "Art Vandelay", "Bob Sacamano"]);
}
