import { SinonStub, stub } from "sinon";
import { createMockImplementationWithStubFunction, MockPrototype } from "./mock";

import * as base from "./mock";

/**
 * Mock object with generated stubs.
 *
 * There is no guarantee whether a property is actually a stub or not as it can be overridden at creation time.
 */
export type IMock<TObject extends base.MockableObject> = base.IMock<TObject, SinonStub>;

export const Mock: MockPrototype<SinonStub> = createMockImplementationWithStubFunction(stub);
