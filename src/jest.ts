import { createMockImplementationWithStubFunction, MockableObject, MockPrototype } from "./mock";

import * as base from "./mock";

/**
 * Mocked object with stubs generated with jest
 */
export type IMock<TObject extends MockableObject> = base.IMock<TObject, jest.Mock<TObject>>;

/**
 * Mocked object with stubs generated with jest
 *
 * Allows to assign values to readonly properties
 */
export type IWriteableMock<TObject extends MockableObject> = base.IWriteableMock<TObject, jest.Mock<TObject>>;

export const Mock: MockPrototype<jest.Mock> = createMockImplementationWithStubFunction(jest.fn);
