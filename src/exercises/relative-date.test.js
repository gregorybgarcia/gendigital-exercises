import { calculateRelativeDate } from "./relative-date";
import { expect } from "@open-wc/testing";

const mockToday = "2024-05-17";

describe("Calculate Relative Date", () => {
  it("Today", () => {
    const mockDatePicked = "2024-05-17";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("Today");
  });
  it("Yesterday", () => {
    const mockDatePicked = "2024-05-16";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("Yesterday");
  });
  it("This week", () => {
    const mockDatePicked = "2024-05-15";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("This week");
  });
  it("Last week", () => {
    const mockDatePicked = "2024-05-10";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("Last week");
  });
  it("This month", () => {
    const mockDatePicked = "2024-05-01";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("This month");
  });
  it("Last month", () => {
    const mockDatePicked = "2024-04-30";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("Last month");
  });
  it("This year", () => {
    const mockDatePicked = "2024-02-01";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("This year");
  });
  it("Last year", () => {
    const mockDatePicked = "2023-12-01";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("Last year");
  });
  it("Long time ago", () => {
    const mockDatePicked = "2022-04-19";
    const result = calculateRelativeDate(mockDatePicked, mockToday);
    expect(result).to.equal("Long time ago");
  });
});
