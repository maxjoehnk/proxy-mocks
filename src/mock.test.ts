import { createMockImplementationWithStubFunction, IMock } from "./mock";
import { TestServiceToMock } from "./test-utils";

describe("Mock", () => {
  let Mock: IMock<any, any>;

  beforeEach(() => {
    Mock = createMockImplementationWithStubFunction(() => null);
  });

  test("toString should use the name of the base class", () => {
    const mock = Mock.of(TestServiceToMock);

    const name = mock.toString();

    expect(name).toBe("[object TestServiceToMock]");
  });

  test("assigning a value to a readonly property should compile", () => {
    const mock: IMock<TestServiceToMock, any> = Mock.of(TestServiceToMock);

    mock.value = "mocked value";

    expect(mock.value).toBe("mocked value");
  });
});
