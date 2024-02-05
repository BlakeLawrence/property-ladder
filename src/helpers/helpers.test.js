import { describe, test, expect } from "@jest/globals";
import {
  currency,
  firstTimeBuyerRate,
  nextTimeBuyerRate,
  additionalBuyerRate,
} from "./helpers";

// currency converter function tests
describe("Currency convertor should format any number into british pounds as a string", () => {
  test("value of 1000 to format to £1,000.00", () => {
    expect(currency(1000)).toBe("£1,000.00");
  });
  test("value of 12599 to format to £1,255.99", () => {
    expect(currency(1255.99)).toBe("£1,255.99");
  });
});

// first time buyer function tests
describe("First time buyer function - should calculate appropriate stamp duty", () => {
  test("first time buyer rate under 425000 threshold should carry 0 stamp duty charge", () => {
    expect(firstTimeBuyerRate(100000)).toBe(0);
  });
  test("first time buyer rate over 425000 threshold but under 925000 should carry 5% stamp duty", () => {
    expect(firstTimeBuyerRate(426000)).toBe(50);
  });
  test("first time buyer rate over 925000 threshold but under 1.5mil should carry entire 5% threshold + 10% of amount between 925000 - 1.5mil", () => {
    expect(firstTimeBuyerRate(926000)).toBe(25100);
  });
  test("first time buyer rate over 1.5mil should carry entire 5% & 10% thresholds + 12% of any amount over 1.5mil", () => {
    expect(firstTimeBuyerRate(1501000)).toBe(82620);
  });
});

// Next home buyer function tests
describe("Next home buyer function - should calculate appropriate stamp duty", () => {
  test("Next home buyer rate under 250000 threshold should carry 0 stamp duty charge", () => {
    expect(nextTimeBuyerRate(249000)).toBe(0);
  });
  test("Next home buyer rate over 250000 threshold but under 925000 should carry 5% stamp duty", () => {
    expect(nextTimeBuyerRate(251000)).toBe(50);
  });
  test("Next home buyer rate over 925000 threshold but under 1.5mil should carry entire 5% threshold + 10% of amount between 925000 - 1.5mil", () => {
    expect(nextTimeBuyerRate(926000)).toBe(33850);
  });
  test("Next home buyer rate over 1.5mil should carry entire 5% & 10% thresholds + 12% of any amount over 1.5mil", () => {
    expect(nextTimeBuyerRate(1501000)).toBe(91370);
  });
});

// Additional home buyer function tests
describe("Additional home buyer function - should calculate appropriate stamp duty", () => {
  test("Additional home buyer rate under 250000 threshold should carry 3% stamp duty charge", () => {
    expect(additionalBuyerRate(100000)).toBe(3000);
  });
  test("Additional home buyer rate over 250000 threshold but under 925000 should carry 8% stamp duty", () => {
    expect(additionalBuyerRate(251000)).toBe(7580);
  });
  test("Additional home buyer rate over 925000 threshold but under 1.5mil should carry entire 3% & 8% threshold + 13% of amount between 925000 - 1.5mil", () => {
    expect(additionalBuyerRate(926000)).toBe(61630);
  });
  test("Additional home buyer rate over 1.5mil should carry entire 3%, 8% & 13% thresholds + 15% of any amount over 1.5mil", () => {
    expect(additionalBuyerRate(1501000)).toBe(136400);
  });
});
