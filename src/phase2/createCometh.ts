import type { Cometh, Direction } from "../types";
import { createCometh as createComethApi } from "../api";

const createCometh = async (
  row: number,
  column: number,
  comethType: Cometh
) => {
  const [direction] = comethType.split("_");
  return createComethApi(row, column, direction.toLowerCase() as Direction);
};

export default createCometh;
