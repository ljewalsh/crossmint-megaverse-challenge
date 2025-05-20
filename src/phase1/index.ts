import calculateCrossCoordinates from "./calculateCrossCoordinates";
import { createPolyanet } from "../api";
import delay from "../delay";

const phase1 = async (size: number, distanceFromEdge: number) => {
  const coordinatesOfCross = calculateCrossCoordinates(size, distanceFromEdge);
  for (const [row, column] of coordinatesOfCross) {
    await createPolyanet(row, column);
    await delay();
  }
};

export default phase1;
