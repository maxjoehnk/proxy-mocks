import { SinonStub } from "sinon";
import { Mock } from "./sinon";
import { TestServiceToMock } from "./test-utils";

describe("Sinon Mocks", () => {
  test("accessing a method should create a stub for it", () => {
    const mock = Mock.of(TestServiceToMock);

    const isStub = isSinonStub(mock.someMethod);

    expect(isStub).toBe(true);
  });
});

function isSinonStub(stub: SinonStub): boolean {
  // implementation detail of sinon
  // sinon sets the isSinonProxy to true when it creates a stub
  return (stub as any).isSinonProxy;
}
