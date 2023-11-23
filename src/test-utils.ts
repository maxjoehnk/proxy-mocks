export class TestServiceToMock {
  someMethod(arg: string): string {
    return `transformed ${arg}`;
  }

  get value(): string {
    return "value";
  }
}
