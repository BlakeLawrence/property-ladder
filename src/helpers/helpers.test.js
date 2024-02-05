import { describe, test, expect } from "@jest/globals";
import { currency } from "./helpers";

// currency converter function tests
describe("Currency convertor should format any number into british pounds as a string", () => {
  test("property priced at £1k to print £1,000.00 to console", () => {
    expect(currency(1000)).toBe("£1,000.00");
  });
  test("property priced at £1,255.99 to print £1,255.99 to console", () => {
    expect(currency(1255.99)).toBe("£1,255.99");
  });
});
