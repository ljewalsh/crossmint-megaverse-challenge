import calculateCrossCoordinates, {
  getCenterCoordinate,
} from "../../../src/phase1/calculateCrossCoordinates";

describe("getCenterCoordiate", () => {
  it("returns the center coordinate based on the size of the map", () => {
    expect(getCenterCoordinate(3)).toEqual(1);
    expect(getCenterCoordinate(5)).toEqual(2);
    expect(getCenterCoordinate(7)).toEqual(3);
  });
});

describe("calculateCrossCoordinates", () => {
  it("throws an error when the size arg is even", () => {
    expect(() => calculateCrossCoordinates(2)).toThrow();
    expect(() => calculateCrossCoordinates(4)).toThrow();
    expect(() => calculateCrossCoordinates(6)).toThrow();
  });
  it("throws an error when the distanceFromEdge is too large", () => {
    expect(() => calculateCrossCoordinates(3, 2)).toThrow();
    expect(() => calculateCrossCoordinates(5, 3)).toThrow();
    expect(() => calculateCrossCoordinates(7, 4)).toThrow();
  });
  it("returns coordinates of a cross to the edge of the square when distanceFromEdge is 0", () => {
    expect(calculateCrossCoordinates(3, 0)).toEqual([
      [1, 1],
      [0, 0],
      [0, 2],
      [2, 0],
      [2, 2],
    ]);
    expect(calculateCrossCoordinates(5, 0)).toEqual([
      [2, 2],
      [1, 1],
      [1, 3],
      [3, 1],
      [3, 3],
      [0, 0],
      [0, 4],
      [4, 0],
      [4, 4],
    ]);
    expect(calculateCrossCoordinates(7, 0)).toEqual([
      [3, 3],
      [2, 2],
      [2, 4],
      [4, 2],
      [4, 4],
      [1, 1],
      [1, 5],
      [5, 1],
      [5, 5],
      [0, 0],
      [0, 6],
      [6, 0],
      [6, 6],
    ]);
  });
  it("returns coordinates of a cross with the expected distance from edge when distanceFromEdge is greater than 0", () => {
    expect(calculateCrossCoordinates(3, 1)).toEqual([[1, 1]]);
    expect(calculateCrossCoordinates(5, 1)).toEqual([
      [2, 2],
      [1, 1],
      [1, 3],
      [3, 1],
      [3, 3],
    ]);
    expect(calculateCrossCoordinates(5, 2)).toEqual([[2, 2]]);
    expect(calculateCrossCoordinates(7, 1)).toEqual([
      [3, 3],
      [2, 2],
      [2, 4],
      [4, 2],
      [4, 4],
      [1, 1],
      [1, 5],
      [5, 1],
      [5, 5],
    ]);
    expect(calculateCrossCoordinates(7, 2)).toEqual([
      [3, 3],
      [2, 2],
      [2, 4],
      [4, 2],
      [4, 4],
    ]);
    expect(calculateCrossCoordinates(7, 3)).toEqual([[3, 3]]);
  });
});
