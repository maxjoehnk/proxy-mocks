import * as vitest from "vitest";
import { createMockImplementationWithStubFunction, MockableObject, MockPrototype } from "./mock";
import * as base from "./mock";

export type IMock<TObject extends MockableObject> = base.IMock<TObject, vitest.Mock>;

// TODO: each test framework specific way should be tested in it's own environment
// This fixes the current issue where we can't import the vitest globals as they conflict with jest globals
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Mock: MockPrototype<vitest.Mock> = createMockImplementationWithStubFunction(vi.fn);
