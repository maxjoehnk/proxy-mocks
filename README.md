# proxy-mocks

Generate mocks for any class or object.

## Example

```typescript
// import { IMock, Mock } from 'proxy-mocks/jest';
import { IMock, Mock } from "proxy-mocks/sinon";
import Dependency from "./dependency";
import Implementation from "./implementation";

describe("Implementation", () => {
  let dependency: IMock<Dependency>;

  let implementation: Implementation;

  beforeEach(() => {
    dependency = Mock.of(Dependency);

    implementation = new Implementation(dependency);
  });

  test("your test", () => {
    dependency.someMethod.returns("your result");

    const result = implementation.anotherMethod();

    expect(result).toEqual("your result");
  });
});
```
