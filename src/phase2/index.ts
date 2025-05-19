import { getGoalMap, createPolyanet } from "../api";
import { Cell, Cometh, Soloon } from "../types";
import createCell from "./createCell";

export const DELAY_MS = 500;

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const createMegaverse = async (goalMap: Cell[][]) => {
  for (const [rowIndex, row] of goalMap.entries()) {
    for (const [columnIndex, cell] of row.entries()) {
      if (cell !== "SPACE") {
        await createCell(rowIndex, columnIndex, cell);
        // delay between api calls to avoid rate limiting
        await delay(DELAY_MS);
      }
    }
  }
};

const phase2 = async () => {
  const {
    data: { goal },
  } = await getGoalMap();
  await createMegaverse(goal);
};

export default phase2;
