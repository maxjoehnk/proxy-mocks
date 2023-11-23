import { SinonStub, stub } from "sinon";
import { createMockImplementationWithStubFunction, MockPrototype } from "./mock";

import * as base from "./mock";

/**
 * Mock object with generated stubs with sinon
 */
export type IMock<TObject extends base.MockableObject> = base.IMock<TObject, SinonStub>;

/**
 * Mock object with generated stubs with sinon
 *
 * Allows to assign values to readonly properties
 */
export type IWriteableMock<TObject extends base.MockableObject> = base.IWriteableMock<TObject, SinonStub>;

export const Mock: MockPrototype<SinonStub> = createMockImplementationWithStubFunction(stub);
