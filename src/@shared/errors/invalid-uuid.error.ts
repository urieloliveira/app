export default class InvalidUuidError extends Error {
  constructor(id: string) {
    super(`${id} is not a valid uuid`);
    this.name = "InvalidUuidError";
  }
}
