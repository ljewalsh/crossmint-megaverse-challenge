import { createPolyanet } from "../api";
import { Cell, Cometh, Soloon } from "../types";
import createCometh from "./createCometh";
import createSoloon from "./createSoloon";

const isCometh = (cell: string): cell is Cometh => {
  return ["LEFT_COMETH", "RIGHT_COMETH", "UP_COMETH", "DOWN_COMETH"].includes(
    cell
  );
};
const isSaloon = (cell: string): cell is Soloon => {
  return [
    "WHITE_SOLOON",
    "BLUE_SOLOON",
    "PURPLE_SOLOON",
    "RED_SOLOON",
  ].includes(cell);
};

const createCell = (rowIndex: number, columnIndex: number, cell: Cell) => {
  console.log(`Creating cell at ${rowIndex}, ${columnIndex}: ${cell}`);
  if (cell === "POLYANET") {
    return createPolyanet(rowIndex, columnIndex);
  }
  if (isCometh(cell)) {
    return createCometh(rowIndex, columnIndex, cell);
  }
  if (isSaloon(cell)) {
    return createSoloon(rowIndex, columnIndex, cell);
  }
};

export default createCell;
