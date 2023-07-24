import * as vitest from "vitest";
import { createMockImplementationWithStubFunction, MockableObject, MockPrototype } from './mock';
import * as base from './mock';

export type IMock<TObject extends MockableObject> = base.IMock<TObject, vitest.Mock>;

export const Mock: MockPrototype<vitest.Mock> = createMockImplementationWithStubFunction(vitest.vi.fn);
