import type { Soloon, Color } from "../types";
import { createSoloon as createSoloonApi } from "../api";

const createSoloon = async (
  row: number,
  column: number,
  soloonType: Soloon,
) => {
  const [color, _suffix] = soloonType.split("_");
  return createSoloonApi(row, column, color.toLowerCase() as Color);
};

export default createSoloon;
