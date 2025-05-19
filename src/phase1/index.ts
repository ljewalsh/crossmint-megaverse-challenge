import calculateCrossCoordinates from "./calculateCrossCoordinates";
import { createPolyanet } from "../api";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const phase1 = async (size: number, distanceFromEdge: number) => {
  const coordinatesOfCross = calculateCrossCoordinates(size, distanceFromEdge);
  const promises = coordinatesOfCross.map(async ([row, column], index) => {
    if (index > 0) await delay(1000); // 1 second delay between calls
    return createPolyanet(row, column);
  });
  await Promise.all(promises);
};

export default phase1;
