import { describe, it, expect } from "vitest";
import { findMaximumNumber } from "./functions";

describe("findMaximumNumber", () => {
  it("should return 5 when finding max in [1, 2, 3, 4, 5]", () => {
    expect(findMaximumNumber([1, 2, 3, 4, 5])).toBe(5);
  });

  it("should return 10 when finding max in [-10, -5, 0, 5, 10]", () => {
    expect(findMaximumNumber([-10, -5, 0, 5, 10])).toBe(10);
  });
});