import { getGoalMap } from "../api";
import type { Cell } from "../types";
import createCell from "./createCell";
import delay from "../delay";

export const createMegaverse = async (goalMap: Cell[][]) => {
  for (const [rowIndex, row] of goalMap.entries()) {
    for (const [columnIndex, cell] of row.entries()) {
      if (cell !== "SPACE") {
        await createCell(rowIndex, columnIndex, cell);
        // delay between api calls to avoid rate limiting
        await delay();
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
