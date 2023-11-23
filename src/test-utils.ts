export class TestServiceToMock {
  private dependency: unknown;

  someMethod(arg: string): string {
    return `transformed ${arg}`;
  }

  get value(): string {
    return "value";
  }
}
