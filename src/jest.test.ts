import { Mock } from "./jest";
import { TestServiceToMock } from "./test-utils";

describe("Jest Mocks", () => {
  test("accessing a method should create a stub for it", () => {
    const mock = Mock.of(TestServiceToMock);

    const isStub = jest.isMockFunction(mock.someMethod);

    expect(isStub).toBe(true);
  });
});
