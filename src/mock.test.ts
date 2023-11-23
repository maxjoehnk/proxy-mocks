import { createMockImplementationWithStubFunction, IMock, IWriteableMock } from "./mock";
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
    const mock: IWriteableMock<TestServiceToMock, any> = Mock.of(TestServiceToMock);

    mock.value = "mocked value";

    expect(mock.value).toBe("mocked value");
  });

  test("mock should be assignable to the base class", () => {
    const mock: IMock<TestServiceToMock, any> = Mock.of(TestServiceToMock);

    callTestService(mock);
  });

  test("writable mock should be assignable to the base class after cast when contains private fields", () => {
    const mock: IWriteableMock<TestServiceToMock, any> = Mock.of(TestServiceToMock);

    callTestService(mock as TestServiceToMock);
  });

  function callTestService(testService: TestServiceToMock) {
    console.log(testService.value);
  }
});
